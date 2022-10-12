import React, { useEffect } from 'react';
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
import { ArrowLeftIcon } from '../../components/Icons';
import { IAddressUser } from '../../models/user';
import { logout, selectAuth } from '../../features/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useLogoutUserMutation } from '../../services/authApi';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles);

const Account = () => {
    const { user } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch()
    const { pathname } = useLocation();
    const { orderID } = useParams();
    const navigate = useNavigate()

    const [
        logoutUser,
        { data: logoutData, isLoading, isSuccess: isLogoutSuccess, isError: isLogoutError, error: logoutError },
    ] = useLogoutUserMutation();

    let defaultAddress: IAddressUser | undefined = user?.addresses?.find((address: IAddressUser) => address.isDefault);

    const handleLogout = async (sidebar: SideBarItem) => {
        if (sidebar.to === '#') {
            await logoutUser({})
        }
    }
    useEffect(() => {
        if (isLogoutSuccess) {
            dispatch(logout())
            navigate(config.routes.login)
            toast.success((logoutData as any).message)
        }
        if (isLogoutError) {
            console.log(logoutError);
            toast.error((logoutError as any).data.message)
        }
    }, [isLoading])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('container')}>
                    <div className={cx('col-3')}>
                        <div className={cx('account-avatar')}>
                            <div className={cx('avatar')}>
                                <span className={cx('avatar-name')}>{defaultAddress?.firstName[0]}</span>
                                {user?.avatar && <img className={cx('img')} src={user.avatar} alt="" />}
                            </div>
                            <div
                                className={cx('name')}
                            >{`Xin chào, ${defaultAddress?.firstName && defaultAddress?.lastName ? defaultAddress.firstName + ' ' + defaultAddress.lastName : 'bạn'}`}</div>
                        </div>
                        <div className={cx('sidebar__list')}>
                            {sidebars.map((sidebar, index) => (
                                <NavLink
                                    end={sidebar.endPath}
                                    key={index}
                                    to={sidebar.to}
                                    onClick={() => handleLogout(sidebar)}
                                    className={(nav) => cx('sidebar__item', { active: nav.isActive && sidebar.to !== '#' })}
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
                            {pathname === config.routes.account && (
                                <AccountInfo
                                    data={{
                                        ...defaultAddress,
                                        firstName: defaultAddress?.firstName ? defaultAddress?.firstName : '',
                                        email: user?.email || '',
                                    }}
                                />
                            )}
                            {/* {pathname === config.routes.order && <Order />} */}
                            {pathname.includes(config.routes.order) && <Order />}
                            {pathname === config.routes.address && <Address data={user?.addresses} />}
                            {pathname === config.routes.recentlyViewed && <RecentlyViewed />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
