import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import config from '@/config';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import {
  BagActiveIcon,
  BagIcon,
  HeartActiveIcon,
  HeartIcon,
  LogoIcon,
  MenuIcon,
  SearchIcon,
  UserActiveIcon,
  UserIcon,
} from '@/components/Icons';
import { Button, PopUp, WishList } from '@/components';
import { headerLinks } from '@/assets/headerLinks';
import { SideBarItem, sidebars } from '@/assets/sidebars';
import { logout, selectAuth, setCredentials } from '@/redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { clearCart, selectCart, setCart } from '@/redux/slices/cartSlice';
import { authApi, useGetMyProfileQuery, useLogoutUserMutation } from '@/services/authApi';
import { cartsApi, useGetMyCartQuery } from '@/services/cartsApi';
import { ordersApi } from '@/services';

import { MenuMobile, MenuSub, Search } from './components';

import { toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';
const cx = classNames.bind(styles);

function Header() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query: URLSearchParams = useQuery();
  const { user } = useAppSelector(selectAuth);
  let cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeWishList, setActiveWishList] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [currentPageYOffset, setCurrentPageYOffset] = useState<number>(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const navigate = useNavigate();

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
  const {
    data: dataProfile,
    refetch: refetchProfile,
    currentData,
    isFetching: isFetchingProfile,
    isLoading: isLoadingProfile,
    isSuccess: isSuccessProfile,
    isError: isErrorProfile,
    error: errorProfile,
  } = useGetMyProfileQuery({});
  const {
    data: dataCart,
    refetch: refetchCart,
    isLoading: isLoadingCart,
    isFetching: isFetchingCart,
    isSuccess: isSuccessCart,
    isError: isErrorCart,
    error: errorCart,
  } = useGetMyCartQuery({});
  useEffect(() => {
    refetchProfile();
  }, []);
  useEffect(() => {
    const onScroll: EventListener = (e: any) => {
      setActiveWishList(false);
      setCurrentPageYOffset(e.target?.documentElement.scrollTop);
      setIsScrollUp(
        e.target?.documentElement.scrollTop >= currentPageYOffset ||
          e.target?.documentElement.scrollTop < 97
          ? false
          : true,
      );
      setIsScrollDown(e.target?.documentElement.scrollTop < currentPageYOffset ? false : true);
      e.target?.documentElement.scrollTop < 97 &&
        headerRef.current?.classList.remove(cx('out-top'));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentPageYOffset]);

  useEffect(() => {
    if (location.pathname === config.routes.cart) {
      setActiveProfile(false);
    }
    setActiveWishList(false);
    document.title = 'Koga-clothes.shop';
  }, [location.pathname]);

  const handleScrollTop = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleClickActive = (direction: string) => {
    if (direction === 'account') {
      setActiveProfile(!activeProfile);
      setActiveWishList(false);
    } else if (direction === 'wishlist') {
      if (!user) navigate(config.routes.login, { state: { from: location } });
      setActiveWishList(!activeWishList);
      setActiveProfile(false);
    }
  };

  const handleLogout = async (sidebar: SideBarItem) => {
    setActiveProfile(false);
    if (sidebar.to === '#') {
      await logoutUser({});
    }
  };
  useEffect(() => {
    if (isLogoutSuccess) {
      dispatch(logout());
      dispatch(clearCart());
      dispatch(authApi.util.resetApiState());
      dispatch(cartsApi.util.resetApiState());
      dispatch(ordersApi.util.resetApiState());
      toast.success((logoutData as any).message);
      navigate(config.routes.login);
    }
    if (isLogoutError) {
      console.log(logoutError);
      toast.error((logoutError as any).data.message);
    }
  }, [isLoadingLogout]);
  useEffect(() => {
    if (isSuccessProfile) {
      user?._id === dataProfile._id && dispatch(setCredentials({ user: dataProfile, token: null }));
    }
    if (isErrorProfile) {
      console.log(errorProfile);
    }
  }, [isFetchingProfile, isLoadingProfile]);
  useEffect(() => {
    if (isSuccessCart) {
      user && dispatch(setCart(dataCart.cartItems));
    }
    if (isErrorCart) {
      if (user) {
        dispatch(clearCart());
      }
      console.log(errorCart);
    }
  }, [isLoadingCart, isFetchingCart]);
  console.log('header');

  return (
    <div
      ref={headerRef}
      className={cx(
        'container',
        isMobile ? 'sticky' : isScrollDown && 'out-top',
        isScrollUp && 'sticky',
      )}
    >
      {/* banner */}
      <img
        className={cx('img-banner')}
        src="https://file.hstatic.net/1000284478/file/header_39a72a810505498cbc66e705fece7758.png"
        alt=""
      />
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          {isMobile && (
            <PopUp
              trigger={
                <div onClick={() => setOpenMenuMobile(true)}>
                  <MenuIcon />
                </div>
              }
              isOpen={openMenuMobile}
              handleClose={() => setOpenMenuMobile(false)}
              position="left"
            >
              <MenuMobile isOpen={openMenuMobile} onClose={() => setOpenMenuMobile(false)} />
            </PopUp>
          )}
          <div className={cx('nav-left')}>
            <Link to={config.routes.home} className={cx('logo')}>
              <LogoIcon height="40" />
            </Link>
          </div>
          <div className={cx('nav-center')}>
            <ul>
              {headerLinks.map((link, i) => (
                <HeadlessTippy
                  key={i}
                  delay={[0, 10]}
                  interactive={true}
                  placement="bottom"
                  render={(attrs) => {
                    return (
                      <div tabIndex={-1} {...attrs}>
                        <MenuSub subLinks={link.subLinks} />
                      </div>
                    );
                  }}
                >
                  <li className={cx(link.class)}>
                    <Link onClick={() => handleScrollTop()} to={link.to}>
                      {link.title}
                    </Link>
                  </li>
                </HeadlessTippy>
              ))}
            </ul>
          </div>
          <div className={cx('nav-right')}>
            <div onClick={() => setOpenSearch(true)} className={cx('search')}>
              <SearchIcon width="2rem" height="2rem" />
              <span>{query.get('q') || 'Tìm kiếm'}</span>
            </div>
            {openSearch && <Search handleClose={() => setOpenSearch(false)} />}
            {isMobile && (
              <div className={cx('icons')}>
                <SearchIcon width="2.4rem" height="2.4rem" />
              </div>
            )}
            <div className={cx('profile')}>
              <HeadlessTippy
                delay={[0, 50]}
                interactive={true}
                visible={activeProfile}
                onClickOutside={() => setActiveProfile(false)}
                placement="bottom"
                render={(attrs) => {
                  return user ? (
                    <PopperWrapper className="popper-user">
                      <ul className={cx('popper-user')} tabIndex={-1} {...attrs}>
                        {sidebars.map((sidebar, index) => (
                          <li onClick={() => handleLogout(sidebar)} key={index}>
                            <Link to={sidebar.to}>{sidebar.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </PopperWrapper>
                  ) : (
                    <PopperWrapper className="popper-user">
                      <ul className={cx('popper-user')} tabIndex={-1} {...attrs}>
                        <li>
                          <Link to={config.routes.help}>Trợ giúp</Link>
                        </li>
                        <li>
                          <Link to={config.routes.partner}>Trở thành đối tác B2B</Link>
                        </li>
                      </ul>
                      <div className={cx('buttons')}>
                        <Button primary to={config.routes.login}>
                          Đăng Nhập
                        </Button>
                      </div>
                      <div className={cx('buttons')}>
                        <Button primary to={config.routes.register}>
                          Tạo Tài Khoản
                        </Button>
                      </div>
                    </PopperWrapper>
                  );
                }}
              >
                <Tippy
                  placement="bottom"
                  delay={100}
                  content={
                    <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                      Tài khoản
                    </span>
                  }
                >
                  <div
                    onClick={() => handleClickActive('account')}
                    className={cx('icons', activeProfile && 'active')}
                  >
                    <UserIcon className={cx('icon')} />
                    <UserActiveIcon className={cx('icon-active')} />
                  </div>
                </Tippy>
              </HeadlessTippy>
            </div>
            <div className={cx('wishlist')}>
              <PopUp
                trigger={
                  <Tippy
                    placement="bottom"
                    delay={100}
                    content={
                      <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                        Yêu thích
                      </span>
                    }
                  >
                    <div
                      onClick={() => handleClickActive('wishlist')}
                      className={cx('icons', activeWishList && 'active')}
                    >
                      <HeartIcon className={cx('icon')} />
                      <HeartActiveIcon className={cx('icon-active')} />
                    </div>
                  </Tippy>
                }
                handleClose={() => setActiveWishList(false)}
                isOpen={activeWishList}
              >
                <WishList
                  activeWishList={activeWishList}
                  handleClosePopUp={() => setActiveWishList(false)}
                />
              </PopUp>
            </div>
            <Link
              onClick={() => handleClickActive('cart')}
              to={config.routes.cart}
              className={cx('cart')}
            >
              <Tippy
                placement="bottom"
                delay={100}
                content={
                  <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                    Giỏ hàng
                  </span>
                }
              >
                <div className={cx('icons', location.pathname === config.routes.cart && 'active')}>
                  <BagIcon className={cx('icon')} />
                  <BagActiveIcon className={cx('icon-active')} />
                  {cart?.cartItems && cart.cartItems.length > 0 && (
                    <span
                      className={cx(
                        'quantity-item',
                        location.pathname === config.routes.cart && 'active',
                      )}
                    >
                      {cart.cartItems.length}
                    </span>
                  )}
                </div>
              </Tippy>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default memo(Header);
