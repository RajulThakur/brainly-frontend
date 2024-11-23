import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const AuthContext = createContext<{
  user: string | null;
  setUser: (user: string | null) => void;
}>({ user: null, setUser: () => {} });

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        credentials: 'include',
      });
      if (res.ok) {
        const { userId } = await res.json();
        setUser(userId);
      }
    }
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
export { AuthProvider, useAuth };
