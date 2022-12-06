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
  CloseIcon,
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
import { brandsMen } from '../Home/components/Men/dataMen';
import productApi from '../../api/productApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, setCart } from '../../features/cartSlice';
import { toast } from 'react-toastify';
import NextArrow from '../../components/NextArrow';
import PrevArrow from '../../components/PrevArrow';
import { selectAuth, setCredentials } from '../../features/authSlice';
import { useAddItemToCartMutation } from '../../services/cartsApi';
import { useGetMyProfileQuery } from '../../services/authApi';
import { IFavorite } from '../../models/user.model';
import ReactLoading from 'react-loading';
import Loading from '../../components/Loading';
import PopUp from '../../components/PopUp';
import GuideSize from '../../components/GuideSize/GuideSize';
const cx = classNames.bind(styles);

const Product = () => {
  const location = useLocation();
  const slug = location.pathname.split('/')[2];
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  const [defaultColor, setDefaultColor] = useState<IColor | undefined>(undefined);
  const [defaultSize, setDefaultSize] = useState<ISize | undefined>(undefined);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [isOpenGuideSize, setIsOpenGuideSize] = useState<boolean>(false);
  const [isLoadingBuyNow, setIsLoadingBuyNow] = useState<boolean>(false);
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
  const [loading, setLoading] = useState(true);
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false);

  const [addItemToCart, { isLoading: isLoadingAddToCart }] = useAddItemToCartMutation();
  const { refetch } = useGetMyProfileQuery({});

  const navItems: ITabContent[] = [
    {
      _id: uuidv4(),
      title: 'Chi tiết sản phẩm',
      content: product?.description || '',
    },
    {
      _id: uuidv4(),
      title: 'Thông tin bảo quản',
      content: product?.preserveInformation ? product.preserveInformation : '',
    },
    {
      _id: uuidv4(),
      title: 'Giao hàng và đổi trả',
      content: <ReturnPolicy />,
    },
    {
      _id: uuidv4(),
      title: 'Về thương hiệu',
      content: product?.brand.history || '',
    },
  ];
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productApi.getBySlug(slug);
        if (res) {
          console.log(res);
          setProduct(res);
          setDefaultColor(location.state?.colorSelected || res.colors[0]);
          setDefaultSize(location.state?.colorSelected.sizes[0] || res.colors[0].sizes[0]);
          setIsFavorited(res.favorites.includes(user?._id || ''));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [slug]);
  useEffect(() => {
    if (user && product) {
      // refetch profile để update state cho user
      refetch();
    }
  }, [product]);
  useEffect(() => {
    user &&
      setProduct((prev: IProduct | null) => {
        if (!prev) {
          return null;
        }
        let newFavorites = prev.favorites;
        const productInUser = user.favorites?.find(
          (favorite: IFavorite) => favorite.product._id === prev._id,
        );
        const userInProduct = prev.favorites.find((favorite: string) => favorite === user._id);
        console.log({ productInUser, userInProduct });

        if (!productInUser && userInProduct) {
          newFavorites = prev.favorites.filter((favorite: string) => favorite !== userInProduct);
          setIsFavorited(false);
        } else {
          newFavorites.push(user._id);
          setIsFavorited(true);
        }
        return {
          ...prev,
          favorites: newFavorites,
        };
      });
  }, [user?.favorites]);
  const handleSetColor = (color: IColor) => {
    setDefaultColor(color);
    setDefaultSize(color.sizes[0]);
  };
  const handleAddToCart = async () => {
    if (product && defaultColor && defaultSize) {
      if (user) {
        await addItemToCart({
          product: product._id,
          color: defaultColor.colorName,
          size: defaultSize.size,
        });
      }
      dispatch(
        addToCart({
          product: product,
          color: defaultColor.colorName,
          size: defaultSize.size,
          quantity: 1,
          image: defaultColor.images[0],
        }),
      );
    } else {
      toast.warn('Vui lòng chọn màu sắc và kích cỡ !');
    }
  };
  const handleWishList = () => {
    if (!user) navigate(config.routes.login, { state: { from: location } });
    else {
      const addFavoriteHandler = async () => {
        try {
          setIsLoadingFavorite(true);
          const res = await productApi.addFavorite(product ? product._id : '');
          console.log(res);
          setProduct((prev: IProduct | null) => {
            if (!prev) {
              return res.data;
            }
            return {
              ...prev,
              favorites: res.data.favorites,
            };
          });
          setIsFavorited(res.data.favorites.includes(user._id));
          setIsLoadingFavorite(false);
          // toast.success(res.message);
        } catch (error) {
          console.log(error);
        }
      };
      const removeFavoriteHandler = async () => {
        try {
          setIsLoadingFavorite(true);
          const res = await productApi.removeFavorite(product ? product._id : '');
          console.log(res);
          setProduct((prev: IProduct | null) => {
            if (!prev) {
              return res.data;
            }
            return {
              ...prev,
              favorites: res.data.favorites,
            };
          });
          setIsFavorited(res.data.favorites.includes(user._id));
          setIsLoadingFavorite(false);
          // toast.error(res.message);
        } catch (error: any) {
          // toast.error(error.data.message);
          console.log(error.data.message);
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
  const handleBuyNow = async () => {
    setIsLoadingBuyNow(true);
    await handleAddToCart();
    setIsLoadingBuyNow(false);
    navigate(config.routes.cart);
  };
  console.log('re product', product?.favorites);
  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <Loading />
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
                    {product?.category.catalog === '632f35fab1734732d9dc8821' && (
                      <PopUp
                        isOpen={isOpenGuideSize}
                        trigger={
                          <div
                            className={cx('size-guide')}
                            onClick={() => setIsOpenGuideSize(true)}
                          >
                            <SizeChartIcon />
                            <span>Hướng Dẫn Chọn Size</span>
                          </div>
                        }
                        position="center"
                        handleClose={() => setIsOpenGuideSize(false)}
                      >
                        <GuideSize
                          isOpen={isOpenGuideSize}
                          handleClose={() => setIsOpenGuideSize(false)}
                        />
                      </PopUp>
                    )}
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
                  <div onClick={handleBuyNow} className={cx('btn')}>
                    <Button className={cx('buy-now')} large primary>
                      {isLoadingBuyNow ? (
                        <ReactLoading
                          type="spinningBubbles"
                          color="#2e2e2e"
                          width={20}
                          height={20}
                        />
                      ) : (
                        'mua ngay'
                      )}
                    </Button>
                  </div>
                  <div className={cx('btn')}>
                    <Button large primary onClick={handleAddToCart}>
                      {isLoadingAddToCart && !isLoadingBuyNow ? (
                        <ReactLoading
                          type="spinningBubbles"
                          color="#ffffff"
                          width={20}
                          height={20}
                        />
                      ) : (
                        'thêm vào giỏ'
                      )}
                    </Button>
                  </div>
                  <div className={cx('btn')}>
                    <Button
                      onClick={handleWishList}
                      className={cx('add-to-wish')}
                      leftIcon={
                        isLoadingFavorite ? null : isFavorited ? <HeartActiveIcon /> : <HeartIcon />
                      }
                    >
                      {isLoadingFavorite ? (
                        <ReactLoading
                          type="spinningBubbles"
                          color="#2e2e2e"
                          width={20}
                          height={20}
                        />
                      ) : (
                        'thêm vào wishlist'
                      )}
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
              products={brandsMen[0].products}
            />
          </div>
          <div className={cx('container-fluid')}>
            <SlideProduct
              title="Có thể bạn cũng thích"
              showBtn={false}
              products={brandsMen[0].products}
            />
          </div>
          <div className={cx('container-fluid')}>
            <SlideProduct
              title="Sản phẩm cùng thương hiệu"
              showBtn={false}
              products={brandsMen[0].products}
            />
          </div>
        </>
      )}
    </div>
  );
};
const ReturnPolicy = () => {
  return (
    <div>
      <p className="p10">
        QUY ĐỊNH&nbsp;ĐỔI TRẢ&nbsp;HÀNG TẠI&nbsp;&nbsp;<strong>KOGA CLOTHES</strong>
      </p>
      <ul>
        <li className="p10">
          <strong>Sản phẩm áp dụng: </strong>Tất cả sản phẩm được giao dịch trên Koga Clothes, có
          chương trình khuyến mãi&nbsp;không quá 30%.
        </li>
        <li>
          <strong>Sản phẩm không áp dụng:&nbsp;</strong>
        </li>
      </ul>
      <p className="p10">&nbsp;- Đồ lót, đồ bơi</p>
      <p className="p10">&nbsp;- Nước hoa</p>
      <p className="p10">
        &nbsp;- Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,...&nbsp;
      </p>
      <p className="p10">
        &nbsp;- Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.
      </p>
      <ul>
        <li className="p10">
          <strong>Đối tượng khách hàng:&nbsp;</strong>Tất cả khách hàng sử dụng dịch vụ tại
          <em>
            &nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.maisononline.vn/">
              Koga Clothes
            </a>
          </em>
        </li>
        <li className="p10">
          <strong>Thời gian đổi trả hàng:</strong>
        </li>
      </ul>
      <p className="p10">
        &nbsp;- <strong>Đổi hàng</strong>: Trong vòng <strong>14 ngày</strong> kể từ ngày khách hàng
        nhận được sản phẩm.
      </p>
      <p className="p10">
        &nbsp;-&nbsp;<strong>Trả hàng:</strong> Trong vòng <strong>03 ngày</strong> kể từ ngày khách
        hàng nhận được sản phẩm.
      </p>
    </div>
  );
};
export default Product;
