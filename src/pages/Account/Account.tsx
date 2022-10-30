import React, { useEffect, useState } from 'react';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { NavLink, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import config from '../../config';
import AccountInfo from './components/AccountInfo';
import Order from './components/Order';
import Address from './components/Address';
import RecentlyViewed from './components/RecentlyViewed';
import { SideBarItem, sidebars } from '../../assets/sidebars';
import { user } from '../../assets/fakeUser';
import { ArrowLeftIcon, CameraIcon } from '../../components/Icons';
import { FileResponse, IAddressUser } from '../../models/user.model';
import { logout, selectAuth } from '../../features/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useLogoutUserMutation, useUpdateProfileMutation } from '../../services/authApi';
import { toast } from 'react-toastify';
import { clearCart } from '../../features/cartSlice';
import axiosClient from '../../api/axiosClient';
import Loading from '../../components/Loading';
const cx = classNames.bind(styles);

const Account = () => {
  const { user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { orderID } = useParams();
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState<File | undefined>(undefined);
  const [
    logoutUser,
    {
      data: logoutData,
      isLoading: isLoadingLogout,
      isSuccess: isLogoutSuccess,
      isError: isLogoutError,
      error: logoutError,
    },
  ] = useLogoutUserMutation();
  const [updateProfile, { isSuccess, isError, error, isLoading }] = useUpdateProfileMutation();

  const handleLogout = async (sidebar: SideBarItem) => {
    if (sidebar.to === '#') {
      await logoutUser({});
    }
  };
  useEffect(() => {
    if (isLogoutSuccess) {
      dispatch(logout());
      dispatch(clearCart());
      navigate(config.routes.login);
      toast.success((logoutData as any).message);
    }
    if (isLogoutError) {
      console.log(logoutError);
      toast.error((logoutError as any).data.message);
    }
  }, [isLoadingLogout]);
  useEffect(() => {
    const uploadAvatar = async () => {
      try {
        const data = new FormData();
        data.append('avatar', avatar || '');
        const res: { message: string; file: FileResponse } = await axiosClient.post(
          '/upload/avatar',
          data,
        );
        console.log(res);

        if (res.file) {
          await updateProfile({ avatar: `/public/avatars/${res.file.filename}` });
        }
      } catch (error) {
        console.log(error);
      }
    };
    avatar && uploadAvatar();
  }, [avatar]);
  console.log(avatar);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container-fluid')}>
        <div className={cx('container')}>
          <div className={cx('col-3')}>
            <div className={cx('account-avatar')}>
              <div className={cx('avatar')}>
                <span className={cx('avatar-name')}>
                  {user?.firstName ? user?.firstName[0] : user?.username[0]}
                </span>
                {user?.avatar && (
                  <img
                    className={cx('img')}
                    src={process.env.REACT_APP_API_URL + user.avatar}
                    alt=""
                  />
                )}
                <div className={cx('camera-icon')}>
                  <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    onChange={(e) => setAvatar(e.target.files![0] || undefined)}
                  />
                  <label htmlFor="avatar">
                    <CameraIcon />
                  </label>
                </div>
              </div>

              <div className={cx('name')}>{`Xin chào, ${
                user?.firstName && user?.lastName
                  ? user.firstName + ' ' + user.lastName
                  : user?.username
              }`}</div>
            </div>
            <div className={cx('sidebar__list')}>
              {sidebars.map((sidebar, index) => (
                <NavLink
                  end={sidebar.endPath}
                  key={index}
                  to={sidebar.to}
                  onClick={() => handleLogout(sidebar)}
                  className={(nav) =>
                    cx('sidebar__item', { active: nav.isActive && sidebar.to !== '#' })
                  }
                >
                  <div className={cx('sidebar__icons')}>
                    <div className={cx('icon')}>{sidebar.icon}</div>
                    <div className={cx('icon', 'active')}>{sidebar.iconActive}</div>
                  </div>
                  <span>{sidebar.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className={cx('col-9')}>
            <div className={cx('account-info')}>
              <h1 className={cx('account-page-title')}>
                {orderID ? (
                  <Link
                    style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                    to={config.routes.order}
                  >
                    <ArrowLeftIcon />
                    <strong style={{ fontSize: 14, letterSpacing: 1, fontWeight: 700 }}>
                      Đơn hàng
                    </strong>
                  </Link>
                ) : (
                  sidebars.find((sidebar: SideBarItem) => sidebar.to === pathname)?.title
                )}
              </h1>
              {pathname === config.routes.account && <AccountInfo />}
              {pathname.includes(config.routes.order) && <Order />}
              {pathname === config.routes.address && <Address />}
              {pathname === config.routes.recentlyViewed && <RecentlyViewed />}
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Account;
