import React, { Fragment, ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import config from './config';
import { selectAuth } from './features/authSlice';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { privateRoutes, publicRoutes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Messenger from './components/Messenger';
import ScrollToTop from './layouts/components/ScrollToTop';

// 258122201888-nki79uqhlu4g7tbmj5cukepcqvcs2d5u.apps.googleusercontent.com
// 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
const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer autoClose={3000} />
      <ScrollToTop />
      <Messenger />
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
                    <Page />
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
  console.log('12312312312313123', location);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on thehome  page.
    return <Navigate to={config.routes.login} state={{ from: location }} replace={true} />;
  }

  return children;
}
export default App;
