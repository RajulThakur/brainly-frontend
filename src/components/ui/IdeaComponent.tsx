import { ContentType, IdeaType } from '../../interface/Interface';
import Content from './Content';
import Date from './Date';
import Tags from './Tags';
import IdeaNav from './IdeaNav';
import Type from '../icons/Type';

export interface IdeaComponentProps {
  _id: string;
  title: string;
  content: string;
  link: string;
  contentType: ContentType;
  type: IdeaType;
  createdAt: string;
  tags: string[];
  light?: boolean;
}

export default function IdeaComponent(idea: IdeaComponentProps) {
  return (
    <div className="flex h-72 w-full snap-start flex-col justify-between gap-2 rounded-md border border-white/20 bg-white/30 px-4 pt-1 pb-2 shadow-md backdrop-blur-md min-[1600px]:max-w-sm">
      <IdeaNav
        _id={idea._id}
        title={idea.title}
        link={idea.link}
        icon={<Type type={idea.type} />}
        light={idea.light}
      />
      <div className="flex-1 overflow-hidden">
        <Content
          type={idea.contentType}
          content={idea.content}
          light={idea.light}
        />
      </div>
      <section className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          <Tags tags={idea.tags} light={idea.light} />
        </div>
        <Date date={idea.createdAt} light={idea.light} />
      </section>
    </div>
  );
}
