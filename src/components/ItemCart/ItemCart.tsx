import React, { useEffect, useState, memo, useMemo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CloseIcon, MinusIcon, PlusStrongIcon } from '../Icons';

import {
  clearCart,
  decreaseCart,
  increaseCart,
  removeFromCart,
  selectCart,
  setCart,
} from '../../features/slices/cartSlice';
import { selectAuth } from '../../features/slices/authSlice';
import {
  useAddItemToCartMutation,
  useRemoveItemFromCartMutation,
  useUpdateQuantityCartMutation,
} from '../../services/cartsApi';
import { useGetMyProfileQuery } from '../../services/authApi';
import { productApi } from '../../api';

import styles from './ItemCart.module.scss';
import config from '../../config';
import { Button, Dialog, Loading } from '..';
import { EActionCart, ICartItem } from '../../interfaces';
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
  onChangeChecked = () => {},
  handleClosePopUp = () => {},
  isSelected = false,
  isCart = true,
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const cart = useAppSelector(selectCart);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isLoadingRemoveFavorite, setIsLoadingRemoveFavorite] = useState(false);
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

  const { refetch: refetchProfile } = useGetMyProfileQuery({});
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
        toast.success(dataCart?.message);
      }
    }
  }, [isLoadingCart]);

  async function handleRemoveFavorite() {
    try {
      setIsLoadingRemoveFavorite(true);
      const res = await productApi.removeFavorite(cartItem.product._id);
      setIsLoadingRemoveFavorite(false);
      refetchProfile();
    } catch (error: any) {
      toast.error(error.data.message);
    }
  }
  async function handleAddFavorite() {
    try {
      const res = await productApi.addFavorite(cartItem.product._id);
      refetchProfile();
    } catch (error: any) {
      toast.error(error.data.message);
    }
  }

  async function handleAddToCart() {
    if (!isCart) {
      handleRemoveFavorite();
      await addItemToCart({
        product: cartItem.product._id,
        color: cartItem.color,
        size: defaultSize,
      });
    } else {
      handleRemoveFromCart();
      handleAddFavorite();
    }
  }

  async function handleDecreaseCart() {
    await updateQuantityCart({
      cartItemId: cartItem._id || '',
      quantity: cartItem.quantity - 1,
    });
  }

  async function handleIncreaseCart() {
    await updateQuantityCart({
      cartItemId: cartItem._id || '',
      quantity: cartItem.quantity + 1,
    });
  }

  async function handleRemoveFromCart() {
    if (isCart) {
      const res = await removeItemFromCart(cartItem._id || '');
      console.log('res', res);
      dispatch(removeFromCart(cartItem));
    }
    !isCart && handleRemoveFavorite();
  }

  async function handleCart(action: EActionCart) {
    if (user && cartItem) {
      action === EActionCart.ADD && handleAddToCart();
      action === EActionCart.DECREASE && handleDecreaseCart();
      action === EActionCart.INCREASE && handleIncreaseCart();
      action === EActionCart.REMOVE && handleRemoveFromCart();
    } else {
      action === EActionCart.ADD && navigate(config.routes.login, { state: { from: location } });
      action === EActionCart.DECREASE && dispatch(decreaseCart(cartItem));
      action === EActionCart.INCREASE && dispatch(increaseCart(cartItem));
      action === EActionCart.REMOVE && dispatch(removeFromCart(cartItem));
    }
  }

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChangeChecked(cartItem, e.target.checked);
  };

  const handleChangeSelectedSize = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setDefaultSize(e.target.value);
  }, []);

  return (
    <div className={cx('wrapper')}>
      {(isLoadingUpdated || isLoadingRemoved) && <Loading />}
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
              {cartItem?.product.brand.name}
            </Link>
            <div onClick={() => setIsOpenDialog(true)} className={cx('close')}>
              <CloseIcon />
            </div>
            <Dialog
              title="Xóa sản phẩm?"
              description={`Bạn chắc chắn muốn xóa sản phẩm này khỏi ${
                isCart ? 'Giỏ Hàng' : 'danh sách Yêu Thích'
              }?`}
              isOpenDialog={isOpenDialog}
              handleCloseDialog={() => setIsOpenDialog(false)}
            >
              <Button onClick={() => handleCart(EActionCart.ADD)} border small primary>
                {isLoadingCart && !isCart ? (
                  <ReactLoading type="spinningBubbles" color="#ffffff" width={20} height={20} />
                ) : isCart ? (
                  'Chuyển vào Yêu Thích'
                ) : (
                  'Chuyển vào giỏ hàng'
                )}
              </Button>
              <Button onClick={() => handleCart(EActionCart.REMOVE)} small>
                {isLoadingRemoveFavorite && !isCart && !isLoadingCart ? (
                  <ReactLoading type="spinningBubbles" color="#2e2e2e" width={20} height={20} />
                ) : (
                  'Xóa'
                )}
              </Button>
            </Dialog>
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
                <select name="" id="" value={defaultSize} onChange={handleChangeSelectedSize}>
                  {cartItem.product.colors
                    .find((c) => c.colorName === cartItem.color)
                    ?.sizes.map((size) => (
                      <option key={size._id} value={size.size}>
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
                  item.product._id === cartItem.product._id && item.color === cartItem.color,
              ) ? (
                <Button disabled small primary children="Đã có trong giỏ hàng" />
              ) : (
                <Button onClick={() => handleCart(EActionCart.ADD)} small primary>
                  {isLoadingCart ? (
                    <ReactLoading type="spinningBubbles" color="#ffffff" width={20} height={20} />
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
