import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { IColor, IProduct } from '../../models/product';
import config from '../../config';
import { HeartActiveIcon, HeartIcon } from '../Icons';
const cx = classNames.bind(styles);
type Props = {
    product: IProduct
}
const ProductItem: React.FC<Props> = ({ product }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isCached, setIsCached] = useState<boolean>(false);
    const [defaultImages, setDefaultImages] = useState<IColor>(product.colors[0]);
    const [colorActive, setColorActive] = useState<IColor>(product.colors[0]);
    const handleOnMouse = (direction: string) => {
        direction === 'mouseover' ? setIsCached(true) : setIsCached(false);
    };
    const handleMouseColor = (color: IColor, action: string) => {
        const prevImageDefault: IColor | undefined = product.colors.find((color: IColor) => color._id === colorActive._id);
        action === 'mouseover' ? setDefaultImages(color) : setDefaultImages((prev: IColor) => (prevImageDefault ? prevImageDefault : prev));
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('product-img')}>
                    <Link
                        className={cx('img-link')}
                        onMouseOver={() => handleOnMouse('mouseover')}
                        onMouseOut={() => handleOnMouse('mouseout')}
                        to={config.routes.product + '/' + product.slug}
                        state={{ colorSelected: colorActive }}
                    >
                        <img src={process.env.REACT_APP_API_URL + defaultImages?.images[0]} alt="" />
                        <img
                            src={process.env.REACT_APP_API_URL + defaultImages?.images[1]}
                            alt=""
                            className={cx('lazyloaded', isCached && 'is-cached')}
                        />
                    </Link>
                    {product?.discount > 0 && <div className={cx('discount')}>-{product.discount}%</div>}
                    <div onClick={() => setIsLiked(!isLiked)} className={cx('wishlist', isLiked && 'active')}>
                        <HeartIcon className={cx('heart')} stroke="#ffffff" />
                        <HeartActiveIcon className={cx('heart-active')} />
                    </div>
                    <div className={cx('banner-product')}>
                        <img
                            src="https://file.hstatic.net/1000284478/file/frame__22__c3a6e45e3424441da3746870f1e77536.png"
                            alt=""
                            className={cx('banner-img')}
                        />
                    </div>
                    <div className={cx('outer-product-color')}>
                        {product.colors.map((color) => (
                            <div
                                onMouseOver={() => handleMouseColor(color, 'mouseover')}
                                onMouseOut={() => handleMouseColor(color, 'mouseout')}
                                onClick={() => setColorActive(color)}
                                key={color._id}
                                className={cx('product-color-loop', colorActive._id === color._id && 'active')}
                            >
                                <img src={process.env.REACT_APP_API_URL + color.imageSmall} alt="" className={cx('product-color-img')} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('product-loop-info')}>
                    <Link to={config.routes.product + '/' + product.slug}
                        state={{ colorSelected: colorActive }}>
                        <h3 className={cx('trademark-name')}>{product.brand?.name}</h3>
                        <p className={cx('product-name')}>{product.name}</p>
                    </Link>
                    <span className={cx('quantity-color')}>{product.colors.length} màu</span>
                    <div className={cx('product-price')}>
                        <span className={cx('price', product.discount > 0 && 'hasSale')}>
                            {(product.price - product.price * (product.discount / 100)).toLocaleString('vn-VN')}
                            <span className={cx('td-underline')}>đ</span>
                        </span>
                        {product?.discount > 0 && (
                            <del>
                                {product.price.toLocaleString('vn-VN')}
                                <span className={cx('td-underline')}>đ</span>
                            </del>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(ProductItem);
