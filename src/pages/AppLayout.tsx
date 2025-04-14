import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AddIdea from '../components/ui/AddIdea';
import {IdeaComponentProps} from '../components/ui/IdeaComponent';
import MainNav from '../components/ui/MainNav';
import Popup from '../components/ui/Popup';
import Sidebar from '../components/ui/Sidebar';
import {useIdeas} from '../context/IdeaContext';
import {IdeaType} from '../interface/Interface';
import Dashboard from './Dashboard';

export default function AppLayout() {
  const {id} = useParams();
  const [showAddIdea, setShowAddIdea] = useState(false);
  const [activeFilter, setActiveFilter] = useState<IdeaType | 'all'>('all');
  const [filterIdeas, setFilterIdeas] = useState<IdeaComponentProps[]>([]);
  const {ideas} = useIdeas();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const filteredIdeas = ideas.filter((idea) => {
      if (activeFilter === 'all') return true;
      return idea.type === activeFilter;
    });
    setFilterIdeas(filteredIdeas);
    return () => {
      setFilterIdeas([]);
    };
  }, [activeFilter, ideas, id]);

  return (
    <div className="flex flex-col xl:flex-row">
      <Sidebar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <main className="flex h-[calc(100dvh-124px)] w-full flex-col gap-2 bg-slate-200 px-3 py-2 md:gap-3 lg:h-dvh lg:gap-6 lg:px-8 lg:py-4">
        <MainNav
          setShowPopup={setShowPopup}
          setShowAddIdea={setShowAddIdea}>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {`${activeFilter} Notes`}
          </h1>
        </MainNav>
        <Dashboard ideas={filterIdeas} />
        {/* Overlay and Popup */}
        {showAddIdea && <AddIdea onClose={() => setShowAddIdea(false)} />}
        {showPopup && (
          <Popup
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        )}
      </main>
    </div>
  );
}
