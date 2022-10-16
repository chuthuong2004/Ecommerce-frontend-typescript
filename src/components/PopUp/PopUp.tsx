import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import { useEffect, useRef, useState } from 'react';
import ItemCart from '../ItemCart';
import Button from '../Button';
import { CloseIcon, HeartFragileIcon } from '../Icons';
import RecommendedProduct from '../RecommendedProduct';
import EmptyContent from '../EmptyContent';
import { selectAuth } from '../../features/authSlice';
import { useAppSelector } from '../../app/hooks';
import { IFavorite } from '../../models/user.model';
import { ICartItem } from '../../models/cart.model';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import config from '../../config';
const cx = classNames.bind(styles);

type Props = {
    activeWishList: boolean;
    handleClosePopUp: () => void;
    handleOpenPopUp: () => void;
};
const PopUp: React.FC<Props> = ({ activeWishList, handleClosePopUp, handleOpenPopUp }) => {
    const location = useLocation();
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { user } = useAppSelector(selectAuth);
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
            contentRef.current!.scrollIntoView()
        }
    }, [activeWishList]);
    useEffect(() => {
        if (location.pathname !== config.routes.cart) {
            handleOpenPopUp()
            contentRef.current!.scrollIntoView();
        }
    }, [user]);
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
                                    <ItemCart handleClosePopUp={handleClosePopUp} cartItem={item} isCart={false} />
                                );
                            })}
                        </div>
                        <div className={cx('wishlist-actions')}>
                            <Button primary children="Chuyển tất cả vào giỏ hàng" />
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
