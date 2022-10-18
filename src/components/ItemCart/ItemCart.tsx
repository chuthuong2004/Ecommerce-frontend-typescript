import classNames from 'classnames/bind';
import styles from './ItemCart.module.scss';
import { CloseIcon, MinusIcon, PlusIcon, PlusStrongIcon } from '../Icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import config from '../../config/index';
import React, { useEffect, useState, memo } from 'react';
import { EActionCart, ICartItem } from '../../models/cart.model';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    addToCart,
    clearCart,
    decreaseCart,
    increaseCart,
    removeFromCart,
    selectCart,
    setCart,
} from '../../features/cartSlice';
import { selectAuth, setCredentials } from '../../features/authSlice';
import {
    useAddItemToCartMutation,
    useRemoveItemFromCartMutation,
    useUpdateQuantityCartMutation,
} from '../../services/cartsApi';
import { toast } from 'react-toastify';
import { useGetMyProfileQuery } from '../../services/authApi';
import productApi from '../../api/productApi';
import ReactLoading from 'react-loading';
const cx = classNames.bind(styles);
type Props = {
    cartItem: ICartItem;
    isSelected?: boolean;
    onChangeChecked?: (cartItem: ICartItem, isSelected: boolean) => void;
    handleClosePopUp?: () => void;
    isCart?: boolean;
};
const ItemCart: React.FC<Props> = ({
    cartItem,
    onChangeChecked = () => { },
    handleClosePopUp = () => { },
    isSelected = false,
    isCart = true,
}) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(selectAuth);
    const cart = useAppSelector(selectCart);

    const [checked, setChecked] = useState(false);
    const [defaultSize, setDefaultSize] = useState<string | number>(cartItem.size);
    const [
        removeItemFromCart,
        {
            data: dataRemoved,

            isLoading: isLoadingRemoved,
            isError: isErrorRemoved,
            isSuccess: isSuccessRemoved,
            error: errorRemoved,
        },
    ] = useRemoveItemFromCartMutation();
    const [
        updateQuantityCart,
        {
            data: dataUpdated,
            isLoading: isLoadingUpdated,
            isError: isErrorUpdated,
            isSuccess: isSuccessUpdated,
            error: errorUpdated,
        },
    ] = useUpdateQuantityCartMutation();

    const {
        refetch: refetchProfile,
    } = useGetMyProfileQuery({});
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
        setChecked(isSelected);
    }, [isSelected]);
    useEffect(() => {
        if (isSuccessRemoved) {
            if ((dataRemoved as any)?.message) {
                dispatch(clearCart());
                // onChangeChecked(cartItem, false);
                // toast.info((dataRemoved as any).message);
            } else {
                dataRemoved && dispatch(setCart(dataRemoved.cartItems));
            }
        }
        if (isErrorRemoved) {
            toast.error((errorRemoved as any).data.message);
        }
    }, [isLoadingRemoved]);
    useEffect(() => {
        if (isSuccessUpdated) {
            if ((dataUpdated as any)?.message) {
                dispatch(clearCart());
                toast.error((dataUpdated as any).message);
            } else {
                dataUpdated && dispatch(setCart(dataUpdated.cartItems));
                toast.info('Cập nhật số lượng sản phẩm thành công !');
            }
        }
        if (isErrorUpdated) {
            toast.error((errorUpdated as any).data.message);
        }
    }, [isLoadingUpdated]);
    useEffect(() => {
        if (isSuccessCart) {
            if (dataCart?.data) {
                dispatch(setCart(dataCart.data.cartItems));
                handleClosePopUp();
                // refetchCart()
                toast.success(dataCart?.message);
            }
        }
    }, [isLoadingCart]);

    const handleRemoveFavorite = async () => {
        try {
            const res = await productApi.removeFavorite(cartItem.product._id);
            refetchProfile();
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };
    const handleAddToCart = async () => {
        handleRemoveFavorite();
        await addItemToCart({
            product: cartItem.product._id,
            color: cartItem.color,
            size: defaultSize,
        });
    };
    const handleDecreaseCart = async () => {
        await updateQuantityCart({
            cartItemId: cartItem._id || '',
            quantity: cartItem.quantity - 1,
        });
    };
    const handleIncreaseCart = async () => {
        await updateQuantityCart({
            cartItemId: cartItem._id || '',
            quantity: cartItem.quantity + 1,
        });
    };
    const handleRemoveFromCart = async () => {
        if (isCart) {
            const res = await removeItemFromCart(cartItem._id || '');
            console.log('res', res);
            dispatch(removeFromCart(cartItem));
        }
        !isCart && handleRemoveFavorite();
    };
    const handleCart = (action: EActionCart) => {
        if (user && cartItem) {
            action === EActionCart.ADD && handleAddToCart();
            action === EActionCart.DECREASE && handleDecreaseCart();
            action === EActionCart.INCREASE && handleIncreaseCart();
            action === EActionCart.REMOVE && handleRemoveFromCart();
        } else {
            action === EActionCart.DECREASE && dispatch(decreaseCart(cartItem));
            action === EActionCart.INCREASE && dispatch(increaseCart(cartItem));
            action === EActionCart.REMOVE && dispatch(removeFromCart(cartItem));
        }
    };
    const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        onChangeChecked(cartItem, e.target.checked);
    };

    const handleChangeSelectedSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDefaultSize(e.target.value);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {isCart && <input type="checkbox" checked={checked} onChange={handleChangeChecked} />}
                <Link
                    to={config.routes.product + '/' + cartItem.product.slug}
                    className={cx('image-wrapper')}
                >
                    <img src={process.env.REACT_APP_API_URL + cartItem.image} alt="" />
                </Link>
                <div className={cx('text-wrapper')}>
                    <div className={cx('top')}>
                        <Link to={config.routes.trademark} className={cx('brand')}>
                            {cartItem.product.brand.name}
                        </Link>
                        <div onClick={() => handleCart(EActionCart.REMOVE)} className={cx('close')}>
                            <CloseIcon />
                        </div>
                    </div>
                    <Link
                        to={config.routes.product + '/' + cartItem.product.slug}
                        className={cx('product-name', isCart && 'item-cart')}
                    >
                        {cartItem.product.brand.name} - {cartItem.product.name}
                    </Link>
                    <div className={cx('product-price', { hasSale: cartItem.product.discount > 0 })}>
                        <span className={cx('price')}>
                            {(
                                cartItem.product.price -
                                cartItem.product.price * (cartItem.product.discount / 100)
                            ).toLocaleString('vn-VN')}
                            ₫
                        </span>
                        <del>{cartItem.product.price.toLocaleString('vn-VN')}₫</del>
                    </div>
                    <div className={cx('variant-select')}>
                        <div className={cx('product-variant-color')}>
                            <span>Màu sắc:</span>
                            <span>{cartItem.color}</span>
                        </div>
                        <div className={cx('product-variant-size')}>
                            <span>Kích cỡ:</span>

                            {isCart ? (
                                <div>{cartItem.size}</div>
                            ) : (
                                <select name="" id="" onChange={handleChangeSelectedSize}>
                                    {cartItem.product.colors
                                        .find((c) => c.colorName === cartItem.color)
                                        ?.sizes.map((size) => (
                                            <option
                                                selected={size.size === defaultSize}
                                                key={size._id}
                                                value={size.size}
                                            >
                                                {size.size}
                                            </option>
                                        ))}
                                </select>
                            )}
                        </div>
                    </div>

                    {isCart ? (
                        <div className={cx('product-quantity')}>
                            <div className={cx('input-number')}>
                                <div
                                    onClick={() => handleCart(EActionCart.DECREASE)}
                                    className={cx('btn-quantity')}
                                >
                                    <MinusIcon />
                                </div>
                                <span className={cx('input-quantity')}>{cartItem.quantity}</span>
                                <div
                                    onClick={() => handleCart(EActionCart.INCREASE)}
                                    className={cx('btn-quantity')}
                                >
                                    <PlusStrongIcon />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('product-actions')}>
                            {cart.cartItems.find(
                                (item: ICartItem) =>
                                    item.product._id === cartItem.product._id &&
                                    item.color === cartItem.color &&
                                    item.size === cartItem.size,
                            ) ? (
                                <Button disabled small primary children="Đã có trong giỏ hàng" />
                            ) : (
                                <Button
                                    onClick={() => handleCart(EActionCart.ADD)}
                                    small
                                    primary

                                >

                                    {isLoadingCart ? (
                                        <ReactLoading
                                            type="spinningBubbles"
                                            color="#ffffff"
                                            width={20}
                                            height={20}
                                        />
                                    ) : (
                                        'Chuyển vào giỏ hàng'
                                    )}

                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(ItemCart);
