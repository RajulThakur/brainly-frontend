import {RouteObject} from 'react-router';
import Home from './pages/Home';
import SharedPage from './pages/SharedPage';

export const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />,
    loader: async () => ({
      title: 'Bookmarq - Your Second Brain',
      description: 'Transform your bookmarks into an organized knowledge hub',
    }),
  },
  {path: '/share', element: <SharedPage />},
];
