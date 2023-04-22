import classNames from 'classnames/bind';
import styles from './WishList.module.scss';
import ItemCart from '../ItemCart';
import Button from '../Button';
import { CloseIcon, HeartFragileIcon } from '../Icons';
import RecommendedProduct from '../RecommendedProduct';
import EmptyContent from '../EmptyContent';
import { useAppSelector } from '../../app/hooks';
import { IFavorite } from '../../models/user.model';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useAddItemToCartMutation } from '../../services/cartsApi';
import productApi from '../../api/productApi';
import { useGetMyProfileQuery } from '../../services/authApi';
import { memo, useRef } from 'react';
import { selectAuth } from '../../features/authSlice';
import { ICartItem } from '../../models/cart.model';
import config from '../../config';
const cx = classNames.bind(styles);

type Props = {
  activeWishList: boolean;
  handleClosePopUp: () => void;
};
const WishList: React.FC<Props> = ({ activeWishList, handleClosePopUp = () => {} }) => {
  const location = useLocation();
  const { user } = useAppSelector(selectAuth);
  const contentRef = useRef<HTMLDivElement>(null);

  const [addItemToCart] = useAddItemToCartMutation();

  const { refetch: refetchProfile } = useGetMyProfileQuery({});

  const handleRemoveFavorite = async (productId: string) => {
    try {
      const res = await productApi.removeFavorite(productId);
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  const handleAddAllToCart = async () => {
    if (user?.favorites && user.favorites.length > 0) {
      location.pathname === config.routes.cart && handleClosePopUp();
      for (const favorite of user.favorites) {
        await handleRemoveFavorite(favorite.product._id);
        await addItemToCart({
          product: favorite.product._id,
          color: favorite.color,
          size: favorite.size,
        });
      }
      refetchProfile();
    }
  };
  return (
    <div
      className={cx(
        'modal-content',
        !activeWishList && 'no-active',
        user?.favorites && user?.favorites.length === 0 && 'empty',
      )}
    >
      {user?.favorites && user?.favorites.length > 0 ? (
        <>
          <div onClick={handleClosePopUp} className={cx('close')}>
            <CloseIcon />
          </div>
          <h3 className={cx('title')}>Yêu thích</h3>
          <div ref={contentRef} className={cx('content')}>
            {user.favorites.map((favorite: IFavorite) => {
              const item: ICartItem = {
                _id: favorite._id,
                color: favorite.color,
                image: favorite.product.colors[0].images[0],
                product: favorite.product,
                quantity: favorite.quantity,
                size: favorite.size,
              };
              return (
                <ItemCart
                  key={favorite._id}
                  handleClosePopUp={handleClosePopUp}
                  cartItem={item}
                  isCart={false}
                />
              );
            })}
          </div>
          <div className={cx('wishlist-actions')}>
            <Button onClick={handleAddAllToCart} primary children="Chuyển tất cả vào giỏ hàng" />
          </div>
        </>
      ) : (
        <div>
          <EmptyContent
            titleBtn="Dạo một vòng xem nào"
            content1="Không có sản phẩm nào !"
            icon={<HeartFragileIcon width="10rem" height="10rem" />}
            noPadding
          />
          <RecommendedProduct slideShow={2} slideScroll={2} small line={false} />
        </div>
      )}
    </div>
  );
};

export default memo(WishList);
