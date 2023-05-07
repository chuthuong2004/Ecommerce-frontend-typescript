import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import config from '@/config';
import { useLocation } from 'react-router-dom';
import React, { useEffect, ReactNode, Suspense, lazy } from 'react';
import { useSockets } from '@/context/socket.context';
import { useAppSelector } from '@/app/hooks';
import { selectAuth } from '@/redux/slices/authSlice';
import { Footer, ScrollToTop } from '../components';
import { Messenger } from '@/components';

const Header = lazy(() => import('../components/Header'));
const cx = classNames.bind(styles);

type Props = {
  children: ReactNode;
};
const DefaultLayout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useAppSelector(selectAuth);
  const { socket } = useSockets();
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  useEffect(() => {
    const handleScrollTop = () => {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    handleScrollTop();
  }, [pathname]);
  useEffect(() => {
    socket.emit(config.socketEvents.CLIENT.ADD_USER, user?._id);
  }, [user?._id, socket]);
  return (
    <div className={cx('wrapper')}>
      {/* Header */}
      <ScrollToTop />
      <Messenger />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className={cx('container')}>
        <div className={cx('content')}> {children} </div>
      </div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
