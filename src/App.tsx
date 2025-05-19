import {BrowserRouter, Navigate, Route, Routes} from 'react-router';
import {AuthProvider, useAuth} from './context/AuthContext';
import {IdeaProvider} from './context/IdeaContext';
import AppLayout from './pages/AppLayout';
import Extension from './pages/Extension';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedPage from './pages/SharedPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Test from './pages/Test';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Extra/PrivacyPolicy';
import TermsOfService from './pages/Extra/TermsOfService';
import CookiePolicy from './pages/Extra/CookiePolicy';

function AppRoutes() {
  const {user} = useAuth();

  return (
    <Routes>
      <Route
        path="test"
        element={<Test />}
      />
      <Route
        path="home"
        element={<Home />}
      />
      <Route
        path="/"
        element={
          user ? (
            <Navigate
              to="/app/all"
              replace
            />
          ) : (
            <Navigate
              to="/auth/signin"
              replace
            />
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
      <Route
        path="/share"
        element={<SharedPage />}
      />
      <Route path="auth">
        <Route
          path="signin"
          element={
            user ? (
              <Navigate
                to="/app/all"
                replace
              />
            ) : (
              <Signin />
            )
          }
        />
        <Route
          path="signup"
          element={
            user ? (
              <Navigate
                to="/app/all"
                replace
              />
            ) : (
              <Signup />
            )
          }
        />
        <Route
          path="extension"
          element={<Extension />}
        />
      </Route>
      <Route path="legal">
        <Route
          path="privacy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="terms"
          element={<TermsOfService />}
        />
        <Route
          path="cookies"
          element={<CookiePolicy />}
        />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <IdeaProvider>
          <AppRoutes />
        </IdeaProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
