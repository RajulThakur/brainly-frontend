import {ReactNode} from 'react';
import {useIdeas} from '../../context/IdeaContext';
// import Share from '../icons/Share';
import Trash from '../icons/Trash';
import Button from './Button';
import {useAuth} from '../../context/AuthContext';
interface IdeaNavProps {
  _id: string;
  isShared?: boolean;
  title: string;
  icon: ReactNode;
  link: string;
  light?: boolean;
}
export default function IdeaNav(props: IdeaNavProps) {
  const {user} = useAuth();
  const {ideas, setIdeas} = useIdeas();
  const handleDelete = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/delete`, {
      method: 'DELETE',
      body: JSON.stringify({postId: props._id, token: user}),
      headers: {'Content-Type': 'application/json'},
    });
    if (res.ok) {
      setIdeas(ideas.filter((idea) => idea._id !== props._id));
    }
  };

  return (
    <>
      <nav className="flex h-12 items-center justify-between gap-2 text-base">
        {props.icon}
        <h1
          className={`flex-1 cursor-pointer overflow-hidden text-base font-semibold whitespace-nowrap ${
            props.light ? 'text-slate-400' : 'text-slate-700'
          } `}>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer">
            {props.title}
          </a>
        </h1>

        <section className="hover:text-accent-200 flex items-center gap-2">
          {/* <Button
            varient="none"
            size="sm"
            light={props.light}
            startIcon={<Share varient="md" />}
          /> */}
          <Button
            varient="none"
            size="sm"
            light={props.light}
            startIcon={<Trash varient="md" />}
            onClick={handleDelete}
          />
        </section>
      </nav>
    </>
  );
}
