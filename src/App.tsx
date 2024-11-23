import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { IdeaProvider } from './context/IdeaContext';
import AppLayout from './pages/AppLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import { useAuth } from './context/AuthContext';

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/app/all" replace />
          ) : (
            <Navigate to="/auth/signin" replace />
          )
        }
      />
      <Route
        path="/app/:id"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      />
      <Route path="auth">
        <Route
          path="signin"
          element={user ? <Navigate to="/app/all" replace /> : <Signin />}
        />
        <Route
          path="signup"
          element={user ? <Navigate to="/app/all" replace /> : <Signup />}
        />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <IdeaProvider>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <AppRoutes />
        </BrowserRouter>
      </IdeaProvider>
    </AuthProvider>
  );
}
