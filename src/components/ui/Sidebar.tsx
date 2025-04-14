import {useNavigate} from 'react-router';
import {IdeaType} from '../../interface/Interface';
import Type from '../icons/Type';

export default function Sidebar({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: IdeaType | 'all';
  setActiveFilter: React.Dispatch<React.SetStateAction<IdeaType | 'all'>>;
}) {
  const navigate = useNavigate();
  // const sidebarItems = ['tweets', 'videos', 'links', 'documents', 'tags'];
  const sidebarItems = ['tweets', 'videos', 'links', 'documents'];
  return (
    <aside className="from-accent-700/10 to-accent-900/10 flex h-auto w-screen flex-col gap-3 border-r border-white/20 bg-linear-to-b px-4 py-2 backdrop-blur-md md:py-2 xl:h-screen xl:w-1/6 xl:max-w-64 xl:gap-6 xl:py-4">
      <h1 className="flex h-[54px] flex-1 items-center gap-2 text-4xl font-bold text-slate-800 lg:flex-none">
        <img
          src="/image.png"
          alt="Brainly"
          className="h-8 w-8"
        />
        Brainly
      </h1>
      <ul className="fold:text-sm flex flex-1 flex-row justify-between text-xs tracking-wide md:text-base lg:justify-start lg:gap-4 lg:text-xl xl:flex-col xl:px-4">
        {sidebarItems.map((item) => (
          <li
            className={`hover:text-accent-0 relative flex w-auto flex-col items-center justify-start gap-1 text-slate-700 capitalize transition-all duration-200 lg:flex-row lg:justify-start lg:gap-3 ${
              activeFilter === item
                ? 'text-accent-200 scale-105 font-semibold'
                : ''
            }`}
            key={item}
            onClick={() => {
              if (item === activeFilter) {
                setActiveFilter('all');
                navigate(`/app/all`);
                return;
              }
              setActiveFilter(item as IdeaType);
              navigate(`/app/${item}`);
            }}>
            <Type type={item as IdeaType} />
            <span className="cursor-pointer select-none">{item}</span>
            <div
              className={`bg-accent-200 absolute -bottom-1 left-0 h-0.5 w-full origin-center transition-transform duration-300 ${
                activeFilter === item
                  ? 'scale-x-100 opacity-100'
                  : 'scale-x-0 opacity-0'
              }`}></div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
