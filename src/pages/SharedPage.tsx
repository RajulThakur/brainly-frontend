import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {IdeaComponentProps} from '../components/ui/IdeaComponent';
import SharedIdeaComponent from '../components/ui/SharedIdeaComponent';
export default function SharedPage() {
  const [searchParams] = useSearchParams();
  const [sharedIdea, setSharedIdea] = useState<IdeaComponentProps[]>([]);
  const [name, setName] = useState<string>('');
  const shareId = searchParams.get('shareid');
  useEffect(() => {
    async function fetchIdea() {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/brain/share?shareid=${shareId}`
      );
      const {content} = await res.json();
      const shareContent = content.sharedContent;
      setSharedIdea(shareContent);
      setName(content.sharedBy);
    }
    fetchIdea();
  }, [shareId]);

  return (
    <main className="flex h-[calc(100dvh-124px)] w-full flex-col gap-2 bg-slate-200 px-3 py-2 md:gap-3 lg:h-dvh lg:gap-6 lg:px-8 lg:py-4">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {name} Notes
      </h1>
      <div className="h-36 flex-1 snap-y overflow-y-scroll scroll-smooth">
        <div className="fold:grid-cols-2 grid grid-cols-1 gap-x-4 gap-y-6 min-[1600px]:grid-cols-6 md:grid-cols-3 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-4 2xl:grid-cols-5">
          {sharedIdea.map((idea) => (
            <SharedIdeaComponent
              key={idea._id}
              {...idea}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
