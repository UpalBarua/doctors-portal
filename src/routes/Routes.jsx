import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Appointment from '../pages/Appointment/Appointment';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/appointment', element: <Appointment /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
]);

export default router;
