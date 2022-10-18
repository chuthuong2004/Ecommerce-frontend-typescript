import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FacebookIcon, GoogleIcon, LeftIcon, LogoIcon } from '../../components/Icons';
import styles from './Login.module.scss';
import config from '../../config';
import { useState, useEffect, useCallback, FocusEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useLoginUserMutation, useRegisterUserMutation } from '../../services/authApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCredentials } from '../../features/authSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddItemToCartMutation, useGetMyCartQuery } from '../../services/cartsApi';
import { clearCart, selectCart, setCart } from '../../features/cartSlice';
import { ICartItem } from '../../models/cart.model';

const cx = classNames.bind(styles);

export type InputAuth = {
    email: string;
    password?: string;
    phone?: string;
};
const initialState: InputAuth = {
    email: '',
    password: '',
    phone: '',
};
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = useAppSelector(selectCart);

    const dispatch = useAppDispatch();
    const { from } = location.state || { from: { pathname: '/' } };
    const [formValue, setFormValue] = useState(initialState);
    const [activeSignup, setActiveSignup] = useState(false);
    const [errorInput, setErrorInput] = useState<InputAuth>(initialState);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const [cartItems, setCartItems] = useState(cart?.cartItems);
    const [
        loginUser,
        {
            data: loginData,
            isLoading: isLoadingLogin,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
        },
    ] = useLoginUserMutation();
    const [
        registerUser,
        {
            data: registerData,
            isLoading: isLoadingRegister,
            isSuccess: isRegisterSuccess,
            isError: isRegisterError,
            error: registerError,
        },
    ] = useRegisterUserMutation();

    const [
        addItemToCart,
        {
            data: dataCart,
            isLoading: isLoadingCart,
            isSuccess: isSuccessCart,
            isError: isErrorCart,
            error: errorCart,
        },
    ] = useAddItemToCartMutation();
    useEffect(() => {
        location.pathname === config.routes.login ? setActiveSignup(false) : setActiveSignup(true);
        setFormValue(initialState);
        setErrorInput(initialState);
    }, [location.pathname, openForgotPassword]);
    const handleChangeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValue({
                ...formValue,
                [e.target.name]: e.target.value,
            });
        },
        [formValue],
    );
    const checkInputEmpty = (data: InputAuth) => {
        setErrorInput({
            email: !data.email ? 'Vui lòng nhập email.' : '',
            password: !data.password
                ? 'Vui lòng nhập mật khẩu.'
                : data.password && data.password.length < 6
                    ? 'Mật khẩu phải có ít nhất 6 ký tự.'
                    : '',
            phone: !data.phone ? 'Vui lòng nhập số điện thoại.' : '',
        });
    };
    const handleLogin = async () => {
        if (formValue.email && formValue.password && formValue.password.length >= 6) {
            await loginUser({ email: formValue.email, password: formValue.password });
        }
        checkInputEmpty(formValue);
    };
    const handleRegister = async () => {
        if (
            formValue.email &&
            formValue.phone &&
            formValue.password &&
            formValue.password.length >= 6
        ) {
            await registerUser({
                email: formValue.email,
                password: formValue.password,
                phone: formValue.phone,
            });
        }
    };
    const handleForgotPassword = () => { };
    const handleSubmit = () => {
        if (location.pathname === config.routes.login) {
            handleLogin();
        } else {
            handleRegister();
        }
    };
    useEffect(() => {
        if (isSuccessCart) {
            if (dataCart?.data && dataCart.data.cartItems.length === cartItems.length) {
                dispatch(setCart(dataCart.data.cartItems));
                // toast.success(dataCart?.message);
                toast.success('Đăng nhập thành công !');
                navigate(from.pathname);
            }
        }
    }, [isLoadingCart]);
    const addToCart = async (productId: string, color: string, size: string | number) => {
        const cart = await addItemToCart({
            product: productId,
            color,
            size,
        });
        return cart;
    };
    useEffect(() => {
        if (isLoginSuccess) {
            const { accessToken, refreshToken, ...user } = loginData;
            if (cart.cartItems && cart.cartItems.length > 0) {
                setCartItems(cart.cartItems);
                dispatch(clearCart());
                cartItems.forEach(async (cartItem: ICartItem) => {
                    const newCart = await addToCart(cartItem.product._id, cartItem.color, cartItem.size);
                    console.log(newCart);
                });
            }
            dispatch(setCredentials({ user: user, token: { accessToken, refreshToken } }));
            toast.success('Đăng nhập thành công !');
            navigate(from.pathname);
        }

        if (isLoginError) {
            toast.error((loginError as any).data.message, {
                position: 'top-right',
            });
        }
        if (isRegisterSuccess && activeSignup) {
            toast.success(registerData.message);
            setFormValue(initialState);
            navigate(config.routes.login);
        }
        if (isRegisterError) {
            toast.error((registerError as any).data.message, {
                position: 'top-right',
            });
        }
    }, [isLoadingLogin, isLoadingRegister]);
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setErrorInput({
            ...errorInput,
            [e.target.name]: e.target.value
                ? e.target.name === 'password'
                    ? e.target.value.length < 6 && 'Mật khẩu phải có ít nhất 6 ký tự.'
                    : ''
                : 'Trường này là bắt buộc.!!!',
        });
    };
    console.log('c', cartItems);

    return (
        <section className={cx('login-section')}>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('col-lg')}>
                        <div className={cx('customer-actions__greeting')}>
                            <div className={cx('logo')}>
                                <Link to={config.routes.home}>
                                    <LogoIcon />
                                </Link>
                            </div>
                            <h1>
                                <span>Xin chào </span>Quý khách
                            </h1>
                        </div>
                    </div>
                    <div className={cx('col-lg')}>
                        <div className={cx('customer-actions__wrapper')}>
                            <div className={cx('customer-actions__form', openForgotPassword && 'show')}>
                                <div className={cx('login-n-signup')}>
                                    <div className={cx('nav-links')}>
                                        <Link
                                            to={config.routes.login}
                                            onClick={() => setActiveSignup(false)}
                                            className={cx('nav-link', !activeSignup && 'active')}
                                        >
                                            Đăng nhập
                                        </Link>
                                        <Link
                                            to={config.routes.register}
                                            onClick={() => setActiveSignup(true)}
                                            className={cx('nav-link', activeSignup && 'active')}
                                        >
                                            Đăng ký
                                        </Link>

                                        <div className={cx('line')}></div>
                                    </div>
                                    <div className={cx('customer-login')}>
                                        {activeSignup ? (
                                            <>
                                                <div className={cx('form-desc')}>
                                                    Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ và số, không bao gồm ký tự
                                                    đặc biệt.
                                                </div>
                                                <Input
                                                    label="email"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChangeInput}
                                                    value={formValue.email}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                                <Input
                                                    label="mật khẩu"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChangeInput}
                                                    value={formValue.password}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                                <Input
                                                    label="số điện thoại"
                                                    name="phone"
                                                    onChange={handleChangeInput}
                                                    value={formValue.phone}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <Input
                                                    label="email"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChangeInput}
                                                    value={formValue.email}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                                <Input
                                                    label="mật khẩu"
                                                    type="password"
                                                    name="password"
                                                    onBlur={handleBlur}
                                                    onChange={handleChangeInput}
                                                    value={formValue.password}
                                                    error={errorInput}
                                                />
                                            </>
                                        )}
                                        <Input type="checkbox" label="Lưu thông tin đăng nhập" />
                                        {activeSignup && (
                                            <>
                                                <Input type="checkbox" label="Đăng kí nhận thông tin khuyến mãi" />
                                                <div className={cx('form-desc')}>
                                                    Bằng cách tạo tài khoản ở Maison là bạn đồng ý với các{' '}
                                                    <span>Chính sách Bảo mật và Điều khoản - Điều kiện.</span>
                                                </div>
                                            </>
                                        )}
                                        <Button onClick={handleSubmit} className={cx('btn-action')} large primary>
                                            {activeSignup ? 'Tạo tài khoản' : 'Đăng nhập'}
                                        </Button>

                                        {!activeSignup && (
                                            <div className={cx('redirect-form')}>
                                                <span
                                                    onClick={() => setOpenForgotPassword(true)}
                                                    className={cx('redirect-btn')}
                                                >
                                                    Quên mật khẩu?
                                                </span>
                                            </div>
                                        )}
                                        <div className={cx('input-line')}></div>
                                    </div>
                                    <div className={cx('login-n-signup__socials')}>
                                        <div className={cx('btn')}>
                                            <Button
                                                className={cx('btn__facebook')}
                                                large
                                                primary
                                                icon={<FacebookIcon width="18" height="18" />}
                                            >
                                                Đăng nhập bằng facebook
                                            </Button>
                                        </div>
                                        <div className={cx('btn')}>
                                            <Button
                                                className={cx('btn__google')}
                                                large
                                                primary
                                                icon={<GoogleIcon width="18" height="18" />}
                                            >
                                                Đăng nhập bằng google
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('forgot-password')}>
                                    <div className={cx('forgot-password__top')}>
                                        <h3 className={cx('form-title')}>Quên mật khẩu</h3>
                                        <div className={cx('form-desc')}>
                                            Vui lòng nhập email của bạn ở đây để nhận hướng dẫn đặt lại mật khẩu.
                                        </div>
                                        <Input
                                            label="email"
                                            type="email"
                                            name="email"
                                            error={errorInput}
                                            onChange={handleChangeInput}
                                            onBlur={handleBlur}
                                            value={formValue.email}
                                        />
                                        <div className={cx('btn')}>
                                            <Button onClick={handleForgotPassword} large primary>
                                                xác thực email
                                            </Button>
                                        </div>
                                        <div className={cx('btn', 'btn-forgot')}>
                                            <Button
                                                onClick={() => setOpenForgotPassword(false)}
                                                leftIcon={<LeftIcon />}
                                                large
                                            >
                                                trở về đăng nhập
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('register-now')}>
                                        Bạn chưa có tài khoản ?{' '}
                                        <Link to={config.routes.register} onClick={() => setOpenForgotPassword(false)}>
                                            Tạo ngay
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
