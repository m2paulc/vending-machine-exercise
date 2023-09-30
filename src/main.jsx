import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './ErrorPage.jsx';
import Chips from './components/Chips.jsx';
import Soda from './components/Soda.jsx';
import Sardines from './components/Sardines.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'chips',
        element: <Chips />,
      },
      {
        path: 'soda',
        element: <Soda />,
      },
      {
        path: 'sardines',
        element: <Sardines />,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
