import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IdeaComponentProps } from '../components/ui/IdeaComponent';
import { useAuth } from './AuthContext';

interface IdeaContextType {
  ideas: IdeaComponentProps[];
  setIdeas: (ideas: IdeaComponentProps[]) => void;
}

const IdeaContext = createContext<IdeaContextType>({
  ideas: [],
  setIdeas: () => {},
});

function IdeaProvider({ children }: { children: ReactNode }) {
  const [ideas, setIdeas] = useState<IdeaComponentProps[]>([]);
  const { user } = useAuth();
  useEffect(() => {
    async function fetchIdeas() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/content`, {
          credentials: 'include',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch ideas');
        }
        const { data } = await res.json();
        setIdeas(data);
      } catch (error) {
        console.error('Error fetching ideas:', error);
        setIdeas([]);
      }
    }
    if (user) {
      fetchIdeas();
    }
  }, [user]);
  return (
    <IdeaContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </IdeaContext.Provider>
  );
}
function useIdeas() {
  const context = useContext(IdeaContext);
  if (context === undefined) {
    throw new Error('useIdeas must be used within a IdeaProvider');
  }
  return context;
}

export { IdeaProvider, useIdeas };
