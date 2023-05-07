import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import config from './config';
import { selectAuth } from './redux/slices/authSlice';
import { publicRoutes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from './components';
import { DefaultLayout } from './layouts';

// 258122201888-nki79uqhlu4g7tbmj5cukepcqvcs2d5u.apps.googleusercontent.com
// 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
const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer autoClose={3000} />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout: any = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          let PrivateRoute = ({ children }: { children: any }) => {
            return children;
          };
          if (route.private) {
            PrivateRoute = RequireAuth;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  <Layout>
                    <Suspense fallback={<Loading />}>
                      <Page />
                    </Suspense>
                  </Layout>
                </PrivateRoute>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};
function RequireAuth({ children }: { children: any }): JSX.Element {
  const { user } = useAppSelector(selectAuth);
  let location = useLocation();
  if (!user) {
    return <Navigate to={config.routes.login} state={{ from: location }} replace={true} />;
  }
  return children;
}
export default App;
