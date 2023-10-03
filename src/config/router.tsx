import { createBrowserRouter } from 'react-router-dom';

import MainPage from '../components/App/MainPage';

interface RouterType {
  path: string;
  element: React.ReactElement;
  menuItem?: {
    title: string;
    icon: React.ReactElement;
  };
}

const routes: RouterType[] = [
  {
    path: '/',
    element: <MainPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
