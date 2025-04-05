import { useForm } from 'react-hook-form';
import Document from '../icons/Document';
import Links from '../icons/Links';
import Plus from '../icons/Plus';
import Tweet from '../icons/Tweet';
import Video from '../icons/Video';
import Button from './Button';
// import { X } from "lucide-react";
import { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useIdeas } from '../../context/IdeaContext';
import CrossButton from './CrossButton';
import { useAuth } from '../../context/AuthContext';

interface AddIdeaProps {
  onClose: () => void;
}

interface FormData {
  link: string;
  title: string;
  type: 'links' | 'tweets' | 'documents' | 'videos';
  tags: string[];
}

const PREDEFINED_TAGS = [
  'JavaScript',
  'React',
  'TypeScript',
  'CSS',
  'Design',
  'API',
];

export default function AddIdea({ onClose }: AddIdeaProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { ideas, setIdeas } = useIdeas();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : prev.length < 5
          ? [...prev, tag]
          : prev
    );
  };
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNewTagSubmit = (e: KeyboardEvent | FocusEvent) => {
    if (
      (e as KeyboardEvent).key === 'Enter' ||
      (e as React.FocusEvent).type === 'blur'
    ) {
      e.preventDefault();
      if (newTag.trim()) {
        const finalTag = newTag.trim().slice(0, 15);
        if (!selectedTags.includes(finalTag) && selectedTags.length < 5) {
          setSelectedTags((prev) => [...prev, finalTag]);
          setNewTag('');
          setIsAddingTag(false);
        }
      } else {
        setNewTag('');
        setIsAddingTag(false);
      }
    }
  };

  useEffect(() => {
    if (isAddingTag && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddingTag]);

  const onSubmit = async (data: FormData) => {
    console.log('data', data);
    const submitData = {
      ...data,
      tags: selectedTags,
      token: user,
    };
    const res = await fetch(`${import.meta.env.VITE_API_URL}/content`, {
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const addedIdea = await res.json();
    console.log(addedIdea, 'addedIdea');
    if (res.ok) {
      reset();
      setIdeas([...ideas, addedIdea.data]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50"
      onClick={handleOverlayClick}
    >
      <form
        className="flex w-80 flex-col gap-4 rounded-lg border border-white/20 bg-white/30 px-6 pb-6 pt-2 shadow-lg backdrop-blur-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide text-shadow-0">
            Add Links
          </h1>
        </div>

        <input
          {...register('title')}
          placeholder="Title"
          className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
        />
        <input
          {...register('link')}
          placeholder="https://example.com"
          className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
        />

        <div className="flex flex-col gap-2">
          {/* <label className='text-sm font-normal'>Type</label> */}
          <div className="flex justify-between gap-4 rounded-md px-3">
            {[
              { id: 'tweets', icon: <Tweet /> },
              { id: 'links', icon: <Links /> },
              { id: 'documents', icon: <Document /> },
              { id: 'videos', icon: <Video /> },
            ].map(({ id, icon }) => (
              <div key={id} className="flex flex-col items-center gap-2">
                <input
                  {...register('type')}
                  type="radio"
                  id={id}
                  value={id}
                  className="peer hidden"
                />
                <label
                  htmlFor={id}
                  className="cursor-pointer rounded p-2 transition-all duration-200 hover:bg-white/20 peer-checked:bg-white/30 peer-checked:shadow-md"
                >
                  {icon}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* <label className='text-base font-medium'>Tags</label> */}
          <div className="flex flex-wrap items-center gap-2 px-3">
            {[
              ...selectedTags,
              ...PREDEFINED_TAGS.filter((tag) => !selectedTags.includes(tag)),
            ].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={`rounded-full border px-3 py-1.5 transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'border-accent-300 bg-accent-300/30 text-accent-0 shadow-sm'
                    : 'border-white/20 bg-white/10 hover:bg-white/20'
                } text-sm`}
              >
                {tag}
              </button>
            ))}

            {isAddingTag ? (
              <input
                ref={inputRef}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value.slice(0, 15))}
                onKeyDown={(e) => e.key === 'Enter' && handleNewTagSubmit(e)}
                onBlur={handleNewTagSubmit}
                className="min-w-[60px] max-w-[120px] rounded-full border-2 border-dashed border-accent-300/50 bg-accent-900/10 px-3 py-1.5 text-sm outline-none transition-colors duration-200 placeholder:text-accent-500/60 focus:border-accent-300"
                placeholder="New tag..."
                style={{ width: `${Math.max(60, newTag.length * 10)}px` }}
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsAddingTag(true)}
                className="rounded-full border border-accent-300/50 bg-white/10 p-1.5 transition-all duration-200 hover:border-accent-300 hover:bg-accent-300/20"
              >
                <Plus />
              </button>
            )}
          </div>
        </div>

        <Button varient="primary" text="Add" size="lg" />
        <CrossButton onClick={onClose} />
      </form>
    </div>
  );
}
