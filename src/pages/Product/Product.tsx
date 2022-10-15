import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Product.module.scss';
import { v4 as uuidv4 } from 'uuid';

import { useLocation, useNavigate } from 'react-router-dom';
import { IColor, IProduct, ISize } from '../../models/product.model';
import {
    HeartActiveIcon,
    HeartIcon,
    NextArrowIcon,
    PrevArrowIcon,
    SizeChartIcon,
} from '../../components/Icons';
import TabContent, { ITabContent } from '../../components/TabContent/TabContent';
import { MagnifierContainer, MagnifierPreview, MagnifierZoom } from 'react-image-magnifiers';
import Button from '../../components/Button';
import config from '../../config';
import SlideProduct from '../../components/SlideProduct';
import { trademarkProducts } from '../Home/components/Men/dataMen';
import productApi from '../../api/productApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, setCart } from '../../features/cartSlice';
import { toast } from 'react-toastify';
import NextArrow from '../../components/NextArrow';
import PrevArrow from '../../components/PrevArrow';
import { selectAuth } from '../../features/authSlice';
import { useAddItemToCartMutation } from '../../services/cartsApi';
const cx = classNames.bind(styles);

const Product = () => {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const [addItemToCart, { data: dataCart, isLoading: isLoadingCart, isSuccess: isSuccessCart, isError: isErrorCart, error: errorCart },] = useAddItemToCartMutation()
    const [defaultColor, setDefaultColor] = useState<IColor | undefined>(
        location.state?.colorSelected || undefined,
    );
    const [defaultSize, setDefaultSize] = useState<ISize | undefined>(
        location.state?.colorSelected.sizes[0] || undefined,
    );
    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    let settings = {
        dots: false,
        infinite: defaultColor && defaultColor.images.length > 6,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        focusOnSelect: false,
        nextArrow:
            defaultColor && defaultColor.images.length > 6 ? (
                <NextArrow classNames="btn-arrow-product-slide" />
            ) : undefined,
        prevArrow:
            defaultColor && defaultColor.images.length > 6 ? (
                <PrevArrow classNames="btn-arrow-product-slide" />
            ) : undefined,
        className: 'slide-image-product',
    };
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(false);
    const navItems: ITabContent[] = [
        {
            _id: uuidv4(),
            title: 'Chi tiết sản phẩm',
            content: product?.description,
        },
        {
            _id: uuidv4(),
            title: 'Thông tin bảo quản',
            content: product?.preserveInformation ? product.preserveInformation : '',
        },
        {
            _id: uuidv4(),
            title: 'Giao hàng và đổi trả',
            content: product?.deliveryReturnPolicy ? product.deliveryReturnPolicy : '',
        },
        {
            _id: uuidv4(),
            title: 'Về thương hiệu',
            content: product?.brand.history,
        },
    ];
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await productApi.getBySlug(slug);
                if (res) {
                    setProduct(res);
                    if (!defaultColor) {
                        setDefaultColor(res.colors[0]);
                        setDefaultSize(res.colors[0].sizes[0]);
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        setDefaultColor(location.state?.colorSelected || undefined);
        setDefaultSize(location.state?.colorSelected.sizes[0] || undefined);
        fetchProduct();
    }, [slug, isFavorited]);
    useEffect(() => {
        if (user && product) {
            setIsFavorited(product.favorites.includes(user._id));
        }
    }, [product, user]);
    useEffect(() => {
        if (isSuccessCart) {
            if (dataCart?.data) {
                dispatch(setCart(dataCart.data))
                toast.success(dataCart?.message)
            }
        }
    }, [isLoadingCart])
    const handleSetColor = (color: IColor) => {
        setDefaultColor(color);
        setDefaultSize(color.sizes[0]);
    };
    const handleAddToCart = async () => {
        if (product && defaultColor && defaultSize) {
            if (user) {
                await addItemToCart({ product: product._id, color: defaultColor.colorName, size: defaultSize.size })
            } else {
                dispatch(
                    addToCart({
                        product: product,
                        color: defaultColor.colorName,
                        size: defaultSize.size,
                        quantity: 1,
                        image: defaultColor.images[0],
                    }),
                );
            }

        } else {
            toast.warn('Vui lòng chọn màu sắc và kích cỡ !');
        }
    };
    const handleWishList = () => {
        if (!user) navigate(config.routes.login, { state: { from: location } });
        else {
            const addFavoriteHandler = async () => {
                try {
                    const res = await productApi.addFavorite(product ? product._id : '');
                    console.log(res);
                    setProduct(res.data);
                    toast.success(res.message);
                } catch (error) {
                    console.log(error);
                }
            };
            const removeFavoriteHandler = async () => {
                try {
                    const res = await productApi.removeFavorite(product ? product._id : '');
                    console.log(res);
                    setProduct(res.data);
                    toast.success(res.message);
                } catch (error: any) {
                    toast.error(error.data.message);
                }
            };
            if (product?.favorites.includes(user?._id || '')) {
                // remove
                removeFavoriteHandler();
            } else {
                addFavoriteHandler();
            }
        }
    };
    console.log({ data: dataCart, isLoading: isLoadingCart, isSuccess: isSuccessCart, isError: isErrorCart, error: errorCart },);

    return (
        <div className={cx('wrapper')}>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                <>
                    <div className={cx('container-fluid')}>
                        <div className={cx('product-details')}>
                            <div className={cx('gallery')}>
                                <div className={cx('images')}>
                                    <div className={cx('featured-images')}>
                                        <div className={cx('image')}>
                                            <MagnifierContainer autoInPlace={false}>
                                                <MagnifierPreview
                                                    overlayOpacity={0}
                                                    imageSrc={
                                                        defaultColor
                                                            ? process.env.REACT_APP_API_URL + defaultColor.images[0]
                                                            : ''
                                                    }
                                                />
                                                <MagnifierZoom
                                                    className={cx('image-zoom')}
                                                    imageSrc={
                                                        defaultColor
                                                            ? process.env.REACT_APP_API_URL + defaultColor.images[0]
                                                            : ''
                                                    }
                                                />
                                            </MagnifierContainer>
                                        </div>
                                        <div className={cx('image')}>
                                            <MagnifierContainer autoInPlace={true}>
                                                <MagnifierPreview
                                                    overlayOpacity={0}
                                                    imageSrc={
                                                        defaultColor
                                                            ? process.env.REACT_APP_API_URL + defaultColor.images[1]
                                                            : ''
                                                    }
                                                />
                                                <MagnifierZoom
                                                    className={cx('image-zoom')}
                                                    imageSrc={
                                                        defaultColor
                                                            ? process.env.REACT_APP_API_URL + defaultColor.images[1]
                                                            : ''
                                                    }
                                                />
                                            </MagnifierContainer>
                                        </div>
                                    </div>
                                    <div className={cx('thumb-images')}>
                                        {defaultColor && defaultColor.images.length >= 7 ? (
                                            <div className={cx('slider')}>
                                                <Slider {...settings}>
                                                    {defaultColor?.images
                                                        .filter((image, i) => i !== 0 && i !== 1)
                                                        .map((image, i) => (
                                                            <div key={i} className={cx('image')}>
                                                                <div>
                                                                    <MagnifierContainer autoInPlace={false}>
                                                                        <MagnifierPreview
                                                                            className={cx('zoom-img')}
                                                                            overlayOpacity={0}
                                                                            imageSrc={process.env.REACT_APP_API_URL + image}
                                                                        />
                                                                        <MagnifierZoom
                                                                            className={cx('image-zoom-slide')}
                                                                            imageSrc={process.env.REACT_APP_API_URL + image}
                                                                        />
                                                                    </MagnifierContainer>
                                                                </div>
                                                            </div>
                                                        ))}
                                                </Slider>
                                            </div>
                                        ) : (
                                            <div className={cx('slider', 'no-slide')}>
                                                {defaultColor?.images
                                                    .filter((image, i) => i !== 0 && i !== 1)
                                                    .map((image, i) => (
                                                        <div key={i} className={cx('image')}>
                                                            <MagnifierContainer autoInPlace={true}>
                                                                <MagnifierPreview
                                                                    overlayOpacity={0}
                                                                    imageSrc={process.env.REACT_APP_API_URL + image}
                                                                />
                                                                <MagnifierZoom
                                                                    className={cx('image-zoom')}
                                                                    imageSrc={process.env.REACT_APP_API_URL + image}
                                                                />
                                                            </MagnifierContainer>
                                                        </div>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={cx('variants')}>
                                    <div className={cx('variants-images')}>
                                        {product?.colors.map((color) => (
                                            <div key={color._id} className={cx('image')}>
                                                <input
                                                    type="radio"
                                                    className={cx('d-none')}
                                                    id={color._id}
                                                    value={defaultColor?.colorName}
                                                    name="product-choose-color"
                                                    checked={color._id === defaultColor?._id}
                                                    onChange={() => handleSetColor(color)}
                                                />
                                                <label className={cx('color')} htmlFor={color._id}>
                                                    <img src={process.env.REACT_APP_API_URL + color.imageMedium} alt="" />
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className={cx('details')}>
                                <div className={cx('details__text-content')}>
                                    <h3 className={cx('details__brand')}>{product?.brand.name}</h3>
                                    <h1 className={cx('details__prd-title')}>{product?.name}</h1>
                                    <div className={cx('details__sku')}>Style Code: 3ASMB0323</div>
                                    <div
                                        className={cx(
                                            `details__prd-price`,
                                            product && product.discount > 0 && 'hasSale',
                                        )}
                                    >
                                        <div className={cx('price')}>
                                            {product &&
                                                (product.price - product!.price * (product!.discount / 100)).toLocaleString(
                                                    'vn-VN',
                                                )}
                                            ₫
                                        </div>
                                        <del>{product?.price.toLocaleString('vn-VN')}₫</del>
                                        <div className={cx('sale')}>-{product?.discount}%</div>
                                    </div>
                                </div>
                                <div className={cx('details__sizes')}>
                                    <label className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                        <b>KÍCH CỠ</b>
                                        <div className={cx('size-guide')}>
                                            <SizeChartIcon />
                                            <span>Hướng Dẫn Chọn Size</span>
                                        </div>
                                    </label>
                                    <div className={cx('details__sizes-data')}>
                                        {defaultColor?.sizes.map((size: ISize) => (
                                            <div
                                                key={size._id}
                                                className={cx('size', size.quantity === 0 && 'not-available')}
                                            >
                                                <input
                                                    type="radio"
                                                    className={cx('d-none')}
                                                    name="product-choose-size"
                                                    value={size.size}
                                                    id={size._id}
                                                    defaultChecked={defaultSize?.size === size.size}
                                                    onChange={() => setDefaultSize(size)}
                                                />
                                                <label htmlFor={size._id} className={cx('size-sw')}>
                                                    {size.size}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={cx('details__promotion')}>
                                    <div className={cx('box-gift-detail')}>
                                        <b>Tặng 01 kem mắt AHC cho hóa đơn bất kỳ từ 2690K</b>
                                    </div>
                                </div>
                                <div className={cx('details__promotion')}>
                                    <div className={cx('box-gift-detail')}>
                                        <b>Thanh toán qua Ree-Pay</b>
                                        <div>Nhập mã: REEPAY188 Giảm ngay 188K cho hóa đơn từ 1888K</div>
                                        <div>Nhập mã: REEPAY88 Giảm ngày 88K cho hóa đơn từ 1088K</div>
                                        <div>&nbsp;</div>
                                        <b>Thanh toán qua VNPay</b>
                                        <div>Nhập mã: QRVIP Giảm ngay 3% tối đa 500K</div>

                                        <div>&nbsp;&nbsp;</div>
                                        <div>
                                            <span style={{ color: '#000000', fontWeight: 'bold' }}>Chi tiết:</span>{' '}
                                            <span style={{ color: '#000000', textDecoration: 'underline' }}>Tại đây</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('details__warning')}>
                                    {defaultSize && defaultSize.quantity <= 10 && (
                                        <div className={cx('show-stock-slow')}>
                                            Chỉ còn {defaultSize.quantity} sản phẩm !
                                        </div>
                                    )}
                                </div>
                                <div className={cx('details__actions_available')}>
                                    <div className={cx('btn')}>
                                        <Button to={config.routes.cart} className={cx('buy-now')} large primary>
                                            mua ngay
                                        </Button>
                                    </div>
                                    <div className={cx('btn')}>
                                        <Button large primary onClick={handleAddToCart}>
                                            thêm vào giỏ
                                        </Button>
                                    </div>
                                    <div className={cx('btn')}>
                                        <Button
                                            onClick={handleWishList}
                                            className={cx('add-to-wish')}
                                            leftIcon={isFavorited ? <HeartActiveIcon /> : <HeartIcon />}
                                        >
                                            thêm vào wishlist
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('line')}></div>
                    </div>
                    <div className={cx('container-fluid')}>
                        <div className={cx('product-desc')}>
                            <TabContent contents={navItems} />
                        </div>
                    </div>
                    <div className={cx('container-fluid')}>
                        <SlideProduct
                            title="Sản phẩm bạn đã xem"
                            showBtn={false}
                            products={trademarkProducts[0].products}
                        />
                    </div>
                    <div className={cx('container-fluid')}>
                        <SlideProduct
                            title="Có thể bạn cũng thích"
                            showBtn={false}
                            products={trademarkProducts[0].products}
                        />
                    </div>
                    <div className={cx('container-fluid')}>
                        <SlideProduct
                            title="Sản phẩm cùng thương hiệu"
                            showBtn={false}
                            products={trademarkProducts[0].products}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
