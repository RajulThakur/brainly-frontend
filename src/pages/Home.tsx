import IdeaComponent from '../components/ui/IdeaComponent';
import { IdeaComponentProps } from '../components/ui/IdeaComponent';

export default function Home({ ideas }: { ideas: IdeaComponentProps[] }) {
  return (
    <div className="h-36 flex-1 snap-y overflow-y-scroll scroll-smooth">
      <div className="min-[1600px]:grid-cols- fold:grid-cols-2 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-4 2xl:grid-cols-5">
        {ideas.map((idea) => (
          <IdeaComponent key={idea._id} {...idea} />
        ))}
      </div>
    </div>
  );
}
