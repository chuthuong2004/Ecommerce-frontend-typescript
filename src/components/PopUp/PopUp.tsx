import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import { useEffect, useRef, useState } from 'react';
import ItemCart from '../ItemCart';
import Button from '../Button';
import { CloseIcon, HeartFragileIcon } from '../Icons';
import RecommendedProduct from '../RecommendedProduct';
import EmptyContent from '../EmptyContent';
import { selectAuth, setCredentials } from '../../features/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IFavorite } from '../../models/user.model';
import { EActionCart, ICartItem } from '../../models/cart.model';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import config from '../../config';
import { useAddItemToCartMutation } from '../../services/cartsApi';
import productApi from '../../api/productApi';
import { useGetMyProfileQuery } from '../../services/authApi';
import { setCart } from '../../features/cartSlice';
const cx = classNames.bind(styles);

type Props = {
    activeWishList: boolean;
    handleClosePopUp: () => void;
    handleOpenPopUp: () => void;
};
const PopUp: React.FC<Props> = ({ activeWishList, handleClosePopUp, handleOpenPopUp }) => {
    const location = useLocation();
    const dispatch = useAppDispatch()
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { user } = useAppSelector(selectAuth);
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

    const {
        refetch: refetchProfile,
    } = useGetMyProfileQuery({},);



    useEffect(() => {
        if (!activeWishList) {
            const timeout = setTimeout(() => {
                modalRef.current!.style.display = 'none';
            }, 450);
            return () => {
                clearTimeout(timeout);
            };
        } else {
            modalRef.current!.style.display = 'block';
        }
    }, [activeWishList]);
    // useEffect(() => {
    //     if (location.pathname !== config.routes.cart) {
    //         handleOpenPopUp();
    //     }
    // }, [user?.favorites]);


    // ! nếu lỗi hãy mở code 
    // useEffect(() => {
    //     if (isSuccessProfile) {
    //         dispatch(setCredentials({ user: dataProfile, token: null }));
    //         console.log('đã set');
    //     }
    //     if (isErrorProfile) {
    //         console.log(errorProfile);
    //     }
    // }, [isFetchingProfile, isLoadingProfile]);
    useEffect(() => {
        if (isSuccessCart) {
            if (dataCart?.data) {
                dispatch(setCart(dataCart.data.cartItems));
                toast.success(dataCart?.message);
            }
        }
    }, [isLoadingCart]);


    const handleRemoveFavorite = async (productId: string) => {
        try {
            const res = await productApi.removeFavorite(productId);
            refetchProfile();
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };


    const handleAddAllToCart = () => {
        if (user?.favorites && user.favorites.length > 0) {
            user.favorites.forEach(async (favorite: IFavorite) => {
                // setTimeout(async () => {
                await handleRemoveFavorite(favorite.product._id)
                await addItemToCart({
                    product: favorite.product._id,
                    color: favorite.color,
                    size: favorite.size,
                })
                // }, 100)
            })
            handleClosePopUp()
        }
    }
    return (
        <div ref={modalRef} className={cx('modal', activeWishList ? 'active' : 'no-active')}>
            <div onClick={handleClosePopUp} className={cx('overlay')}></div>
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
                                    <ItemCart key={favorite._id} handleClosePopUp={handleClosePopUp} cartItem={item} isCart={false} />
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
        </div>
    );
};

export default PopUp;
