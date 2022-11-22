import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import config from '../../config';
import ScrollToTop from '../components/ScrollToTop';
import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect, ReactNode } from 'react';
import Messenger from './../../components/Messenger';
import { useSockets } from '../../context/socket.context';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../features/authSlice';
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
      <Header />
      {/* Container */}
      <div className={cx('container')}>
        <div className={cx('content')}> {children} </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default DefaultLayout;
