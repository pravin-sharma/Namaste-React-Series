import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import RestaurantMenu from './components/RestaurantMenu';
const About = lazy(() => import('./components/About'));
import UserContext from './context/userContext';

const App = () => {
  const [userInfo, setUserInfo] = useState({ userName: 'default user' });

  return (
    <>
      <UserContext.Provider
        value={{ userName: userInfo.userName, setUserInfo }}
      >
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
