import { Navigate, useLocation } from 'react-router';
import {useAuth} from '../context/AuthContext';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const {user} = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/auth/signin"
        state={{from: location}}
        replace
      />
    );
  }

  return children;
}
