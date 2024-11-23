import IdeaComponent from '../components/ui/IdeaComponent';
import { IdeaComponentProps } from '../components/ui/IdeaComponent';

export default function Home({ ideas }: { ideas: IdeaComponentProps[] }) {
  return (
    <div className="h-36 flex-1 snap-y overflow-y-scroll scroll-smooth">
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 fold:grid-cols-2 md:grid-cols-3 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-4 2xl:grid-cols-5 min-[1600px]:grid-cols-6">
        {ideas.map((idea) => (
          <IdeaComponent key={idea._id} {...idea} />
        ))}
      </div>
    </div>
  );
}
