import classNames from 'classnames/bind';
import styles from './ItemCart.module.scss';
import { CloseIcon, MinusIcon, PlusIcon, PlusStrongIcon } from '../Icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import config from '../../config/index';
import React, { useEffect } from 'react';
import { ICartItem } from '../../models/cart.model';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart, decreaseCart, increaseCart, removeFromCart, setCart } from '../../features/cartSlice';
import { selectAuth } from '../../features/authSlice';
import { useRemoveItemFromCartMutation, useUpdateQuantityCartMutation } from '../../services/cartsApi';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles);
type Props = {
    cartItem: ICartItem;
    isSelected?: boolean;
    onChangeChecked?: (cartItem: ICartItem) => void;
    hasSale?: boolean;
    itemInCart?: boolean;
    checkbox?: boolean;
};
const ItemCart: React.FC<Props> = ({ cartItem, onChangeChecked = () => { }, isSelected = false, hasSale, itemInCart, checkbox }) => {
    console.log(cartItem);
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(selectAuth)
    const [removeItemFromCart, { data: dataRemoved, isLoading: isLoadingRemoved, isError: isErrorRemoved, isSuccess: isSuccessRemoved, error: errorRemoved }] = useRemoveItemFromCartMutation()
    const [updateQuantityCart, { data: dataUpdated, isLoading: isLoadingUpdated, isError: isErrorUpdated, isSuccess: isSuccessUpdated, error: errorUpdated }] = useUpdateQuantityCartMutation()
    const handleRemoveFromCart = async () => {
        if (user && cartItem) {
            await removeItemFromCart(cartItem._id || '')
        }
        else {
            dispatch(removeFromCart(cartItem))
        }
    }
    const handleIncreaseCart = async () => {
        if (user && cartItem) {
            await updateQuantityCart({ cartItemId: cartItem._id || '', quantity: cartItem.quantity + 1 })
        }
        else {
            dispatch(increaseCart(cartItem))
        }
    }
    const handleDecreaseCart = async () => {
        if (user && cartItem) {
            await updateQuantityCart({ cartItemId: cartItem._id || '', quantity: cartItem.quantity - 1 })
        }
        else {
            dispatch(decreaseCart(cartItem))
        }
    }
    useEffect(() => {
        if (isSuccessRemoved) {
            if ((dataRemoved as any)?.message) {
                dispatch(clearCart())
                toast.error((dataRemoved as any).message)
                return
            }
            toast.info('Xóa sản phẩm khỏi giỏ hàng thành công !')
            dataRemoved && dispatch(setCart(dataRemoved))
        }
        if (isErrorRemoved) {
            toast.error((errorRemoved as any).data.message)
        }
    }, [isLoadingRemoved])
    useEffect(() => {
        if (isSuccessUpdated) {
            if ((dataUpdated as any)?.message) {
                dispatch(clearCart())
                toast.error((dataUpdated as any).message)
                return
            }
            toast.info('Cập nhật số lượng sản phẩm thành công !')
            dataUpdated && dispatch(setCart(dataUpdated))
        }
        if (isErrorUpdated) {
            toast.error((errorUpdated as any).data.message)
        }
    }, [isLoadingUpdated])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {checkbox && <input type="checkbox" checked={isSelected} onChange={() => onChangeChecked(cartItem)} />}
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
                        <div onClick={handleRemoveFromCart} className={cx('close')}>
                            <CloseIcon />
                        </div>
                    </div>
                    <Link
                        to={config.routes.product + '/' + cartItem.product.slug}
                        className={cx('product-name', checkbox && 'item-cart')}
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

                            {checkbox ? (
                                <div>{cartItem.size}</div>
                            ) : (
                                <select name="" id="">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            )}
                        </div>
                    </div>

                    {checkbox ? (
                        <div className={cx('product-quantity')}>
                            <div className={cx('input-number')}>
                                <div onClick={handleDecreaseCart} className={cx('btn-quantity')}>
                                    <MinusIcon />
                                </div>
                                <span className={cx('input-quantity')}>{cartItem.quantity}</span>
                                <div onClick={handleIncreaseCart} className={cx('btn-quantity')}>
                                    <PlusStrongIcon />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('product-actions')}>
                            {itemInCart ? (
                                <Button disabled small primary children="Đã có trong giỏ hàng" />
                            ) : (
                                <Button small primary children="Chuyển vào giỏ hàng" />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
