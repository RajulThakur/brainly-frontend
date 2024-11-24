import {
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react';

const AuthContext = createContext<{
  user: string | null;
  setUser: (user: string | null) => void;
}>({ user: null, setUser: () => {} });

function AuthProvider({ children }: { children: ReactNode }) {
  const token: string | null = localStorage.getItem('token') || null;
  const [user, setUser] = useState<string | null>(token);
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
