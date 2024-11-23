import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { IdeaProvider } from './context/IdeaContext';
import AppLayout from './pages/AppLayout';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedPage from './pages/SharedPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

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
      <Route path="/share" element={<SharedPage />} />
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
