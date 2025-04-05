import Type from '../icons/Type';
import Content from './Content';
import Date from './Date';
import { IdeaComponentProps } from './IdeaComponent';
import Tags from './Tags';

export default function SharedIdeaComponent(idea: IdeaComponentProps) {
  return (
    <div className="flex h-72 w-full snap-start flex-col justify-between gap-2 rounded-md border border-white/20 bg-white/30 px-4 pt-1 pb-2 shadow-md backdrop-blur-md min-[1600px]:max-w-sm">
      <nav className="flex h-12 items-center justify-between gap-2 text-base">
        <Type type={idea.type} />
        <h1
          className={`flex-1 cursor-pointer overflow-hidden text-base font-semibold whitespace-nowrap ${
            idea.light ? 'text-slate-400' : 'text-slate-700'
          } `}
        >
          <a href={idea.link} target="_blank" rel="noreferrer">
            {idea.title}
          </a>
        </h1>
      </nav>
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
