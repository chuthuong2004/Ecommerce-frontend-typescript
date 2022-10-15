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
const cx = classNames.bind(styles);

type Props = {
    activeWishList: boolean;
    handleClosePopUp: () => void;
}
const PopUp: React.FC<Props> = ({ activeWishList, handleClosePopUp }) => {
    const wishlists: string[] = [];
    const modalRef = useRef<HTMLDivElement>(null);
    const { user } = useAppSelector(selectAuth)
    useEffect(() => {
        if (!activeWishList) {
            const timeout = setTimeout(() => {
                modalRef.current!.style.display = 'none';
            }, 850);
            return () => {
                clearTimeout(timeout);
            };
        } else {
            modalRef.current!.style.display = 'block';
        }
    }, [activeWishList]);
    return (
        <div ref={modalRef} className={cx('modal', activeWishList ? 'active' : 'no-active')}>
            <div onClick={handleClosePopUp} className={cx('overlay')}></div>
            <div
                className={cx(
                    'modal-content',
                    !activeWishList && 'no-active',
                    wishlists && wishlists.length > 0 && 'empty',
                )}
            >
                {wishlists && wishlists.length > 0 ? (
                    <>
                        <div onClick={handleClosePopUp} className={cx('close')}>
                            <CloseIcon />
                        </div>
                        <h3 className={cx('title')}>Yêu thích</h3>
                        <div className={cx('content')}>
                            {/* {user?.favorites?.length> 0 && user?.favorites?.map((favorite: IFavorite) =>(
                                <ItemCart cartItem={favorite} hasSale itemInCart />

                            ))}
                            <ItemCart itemInCart />
                            <ItemCart hasSale />
                            <ItemCart /> */}
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
