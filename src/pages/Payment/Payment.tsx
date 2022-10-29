import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ATMIcon,
  BlankSlateIcon,
  LogoIcon,
  MoMoIcon,
  MomoIcon,
  PaymentReceived,
  ReePayIcon,
  ShopeePayIcon,
  VisaIcon,
  VNPayIcon,
} from '../../components/Icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import config from '../../config';
import { useState, useRef, useEffect } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { selectAuth } from '../../features/authSlice';
import { useAppSelector } from '../../app/hooks';
import Select from '../../components/Select';
import { ICartItem } from '../../models/cart.model';
import { selectCart } from '../../features/cartSlice';
import { IAddress, IAddressUser, IDistrict, IProvince, IWard } from '../../models/user.model';
import axiosClient from '../../api/axiosClient';
import { useCreateNewOrderMutation, useGetMyOrderQuery } from '../../services/ordersApi';
import { toast } from 'react-toastify';
import { useGetMyCartQuery } from '../../services/cartsApi';
import Loading from '../../components/Loading';
const cx = classNames.bind(styles);

type Props = {
  listCartItem: ICartItem[];
};
interface IAddressInput extends IAddress {
  fullName?: string;
  isDefault?: boolean;
}
const initialValue: IAddressInput = {
  firstName: '',
  lastName: '',
  address: '',
  ward: '',
  district: '',
  province: '',
  phone: '',
  fullName: '',
};
const Payment: React.FC<Props> = () => {
  const location = useLocation();
  let { listCartItem }: { listCartItem: ICartItem[] } = location.state;
  const navigate = useNavigate();
  const { user } = useAppSelector(selectAuth);
  const { cartItems } = useAppSelector(selectCart);

  const [isOpenItem, setIsOpenItem] = useState<boolean>(false);
  const [informationDelivery, setInformationDelivery] = useState<IAddressInput>(() => {
    const addressDefault = user?.addresses?.find((address: IAddressUser) => address.isDefault);
    if (!addressDefault) {
      return initialValue;
    }
    return {
      ...addressDefault,
      fullName: addressDefault.firstName + ' ' + addressDefault.lastName,
    };
  });
  const [errorsInput, setErrorsInput] = useState<IAddressInput>(initialValue);
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [wards, setWards] = useState<IWard[]>([]);
  const [shipmentPrice, setShipmentPrice] = useState<number>(0);

  const productItemRef = useRef<HTMLDivElement>(null);

  const [createNewOrder, { data, isLoading, isError, error, isSuccess }] =
    useCreateNewOrderMutation();
  const { refetch: refetchCart } = useGetMyCartQuery({});

  if (listCartItem.length === 0) {
    listCartItem = cartItems;
  }

  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/?depth=3').then(async (res) => {
      const data: IProvince[] = await res.json();
      const districts: IDistrict[] | undefined = data.find(
        (province: IProvince) => province.name === informationDelivery.province,
      )?.districts;
      const wards = districts?.find(
        (district: IDistrict) => district.name === informationDelivery.district,
      )?.wards;
      setProvinces(data);
      if (informationDelivery.province) {
        setDistricts(districts || []);
      }
      if (informationDelivery.district) {
        setWards(wards || []);
      }
    });
  }, []);

  useEffect(() => {
    if (!informationDelivery.district) {
      setShipmentPrice(0);
    } else if (informationDelivery.province?.includes('Hồ Chí Minh')) {
      if (informationDelivery.district?.includes('Thủ Đức')) {
        setShipmentPrice(10000);
      } else {
        setShipmentPrice(20000);
      }
      informationDelivery.ward?.includes('Hiệp Bình Phước') && setShipmentPrice(0);
    } else {
      setShipmentPrice(30000);
    }
    if (informationDelivery.province) {
      const districts: IDistrict[] | undefined = provinces.find(
        (province: IProvince) => province.name === informationDelivery.province,
      )?.districts;
      const wards = districts?.find(
        (district: IDistrict) => district.name === informationDelivery.district,
      )?.wards;
      setDistricts(districts || []);
      setWards(wards || []);
    }
    setErrorsInput({
      ...errorsInput,
      fullName: informationDelivery?.fullName && '',
      address: informationDelivery.address && '',
      phone: informationDelivery.phone && '',
      province: informationDelivery.province && '',
      district: informationDelivery.district && '',
      ward: informationDelivery.ward && '',
    });
  }, [informationDelivery]);
  useEffect(() => {
    const fullName: string[] | undefined = informationDelivery.fullName?.split(' ');
    if (fullName && fullName.length > 1) {
      const firstName = fullName?.shift();
      setInformationDelivery((prev) => ({
        ...prev,
        firstName: firstName ? firstName : '',
        lastName: fullName.join(' '),
      }));
    }
    if (!informationDelivery.fullName) {
      setInformationDelivery((prev) => ({
        ...prev,
        firstName: '',
        lastName: '',
      }));
    }
  }, [informationDelivery.fullName]);

  useEffect(() => {
    if (isSuccess) {
      console.log(data);

      refetchCart();
      toast.success('Đặt hàng thành công !');
      navigate(config.routes.order);
    }
    if (isError) {
      console.log(error);
      toast.error((error as any).data.message);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isOpenItem) {
      const heightItems = listCartItem.length * (80 + 30); // 80: heigh của 1 item, 30 là phần margin 1 item
      if (heightItems > 500) {
        productItemRef.current!.style.height = '530px';
        productItemRef.current!.style.overflow = 'scroll';
      } else {
        productItemRef.current!.style.height = String(heightItems + 'px');
      }
    } else {
      productItemRef.current!.style.height = '0';
    }
  }, [isOpenItem]);

  const handleChangeAddress = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setInformationDelivery(initialValue);
      setDistricts([]);
      setWards([]);
    }
    const address = user?.addresses?.find(
      (address: IAddressUser) => address._id === e.target.value,
    );
    address &&
      setInformationDelivery({
        ...address,
        fullName: address.firstName + ' ' + address.lastName,
      });
  };
  const handleCreateOrder = async () => {
    if (!informationDelivery.firstName || !informationDelivery.lastName) {
      toast.error('Vui lòng nhập đầy đủ họ và tên.');
      return;
    }
    if (!informationDelivery.phone) {
      toast.error('Vui lòng nhập số điện thoại.');
      return;
    }
    if (!informationDelivery.address) {
      toast.error('Vui lòng nhập địa chỉ.');
      return;
    }
    if (!informationDelivery.province) {
      toast.error('Vui lòng chọn tỉnh / thành.');
      return;
    }
    if (!informationDelivery.district) {
      toast.error('Vui lòng chọn quận / huyện.');
      return;
    }
    if (!informationDelivery.ward) {
      toast.error('Vui lòng chọn phường / xã.');
      return;
    }
    const cartItemsId = listCartItem.map((cartItem) => (cartItem._id ? cartItem._id : ''));
    await createNewOrder({
      deliveryInformation: {
        firstName: informationDelivery.firstName,
        lastName: informationDelivery.lastName,
        phone: informationDelivery.phone,
        province: informationDelivery.province,
        district: informationDelivery.district,
        ward: informationDelivery.ward,
        address: informationDelivery.address,
      },
      cartItemsId: cartItemsId,
      shippingPrice: shipmentPrice,
    });
  };

  const handleBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorsInput({
      ...errorsInput,
      [e.target.name]: e.target.value ? '' : 'Trường này là bắt buộc !',
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setInformationDelivery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(informationDelivery);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container-fluid')}>
        <div className={cx('checkout-header')}>
          <div className={cx('checkout-logo')}>
            <LogoIcon width="78" height="35" />
          </div>
          <div className={cx('breadcrumb')}>
            <div className={cx('breadcrumb-item')}>
              1 - <Link to={config.routes.cart}>giỏ hàng</Link>
              <span>
                <ArrowRightIcon />
              </span>
            </div>
            <div className={cx('breadcrumb-item', 'breadcrumb-item-current')}>
              Thông tin giao hàng
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('main')}>
            <h2 className={cx('title')}>Thông tin giao hàng</h2>
            <div className={cx('main-content', 'customer-information')}>
              <div className={cx('logged-in-customer-information')}>
                <div className={cx('logged-in-customer-information-avatar')}>
                  <span>{user?.firstName ? user?.firstName[0] : user?.username[0]}</span>
                  {user?.avatar && (
                    <img
                      className={cx('img')}
                      src={process.env.REACT_APP_API_URL + user.avatar}
                      alt=""
                    />
                  )}
                </div>
                <div className={cx('logged-in-customer-information-paragraph')}>
                  <div className={cx('infor-account')}>
                    <div className={cx('name')}>Đào Văn Thương</div>
                    <div className={cx('email')}>({user?.email})</div>
                  </div>
                  <div className={cx('logout')}>Đăng xuất</div>
                </div>
              </div>
              <div className={cx('fieldset')}>
                <Select onChangeSelected={handleChangeAddress} label="Chọn địa chỉ">
                  <option value="">Địa chỉ đã lưu trữ</option>
                  {user?.addresses &&
                    user?.addresses?.map((address: IAddressUser) => (
                      <option selected={address.isDefault} key={address._id} value={address._id}>
                        {address.phone}, {address.address},{' '}
                        {address.ward?.includes('Phường') && address.ward.replace('Phường', '')}
                        {address.ward?.includes('Xã') && address.ward.replace('Xã', '')}
                        {address.ward?.includes('Thị trấn') && address.ward.replace('Thị trấn', '')}
                        ,
                        {address.district?.includes('Quận') && address.district.replace('Quận', '')}
                        {address.district?.includes('Huyện') &&
                          address.district.replace('Huyện', '')}
                        {address.district?.includes('Thành phố') &&
                          address.district.replace('Thành phố', '')}
                        ,
                        {address.province?.includes('Thành phố') &&
                          address.province?.replace('Thành phố', '')}
                        {address.province?.includes('Tỉnh') &&
                          address.province?.replace('Tỉnh', '')}
                      </option>
                    ))}
                </Select>
                <div className={cx('field-required')}>
                  <div className={cx('field-input')}>
                    <Input
                      label="họ và tên"
                      value={informationDelivery.fullName}
                      onChange={handleChange}
                      name="fullName"
                      onBlur={handleBlurInput}
                      error={errorsInput}
                    />
                  </div>
                  <div className={cx('field-input')}>
                    <Input
                      label="số điện thoại"
                      value={informationDelivery.phone}
                      onChange={handleChange}
                      name="phone"
                      onBlur={handleBlurInput}
                      error={errorsInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('content-box')}>
              <div className={cx('field-required')}>
                <div className={cx('field-input')}>
                  <Input type="radio" label="Giao tận nơi" />
                </div>
                <div className={cx('field-input')}>
                  <Input type="radio" label="Nhận tại cửa hàng" />
                </div>
              </div>
              <div className={cx('form-location-customer')}>
                <div className={cx('field-required')}>
                  <div className={cx('field-input')}>
                    <Input
                      label="địa chỉ"
                      value={informationDelivery.address}
                      onChange={handleChange}
                      onBlur={handleBlurInput}
                      name="address"
                      error={errorsInput}
                    />
                  </div>
                  <div className={cx('field-input')}>
                    <Select label="Tỉnh / thành" name="province" onChangeSelected={handleChange}>
                      <option value="">Chọn tỉnh / thành</option>
                      {provinces?.map((province: IProvince) => (
                        <option
                          key={province.code}
                          value={province.name}
                          selected={province.name === informationDelivery.province}
                        >
                          {province.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className={cx('field-required')}>
                  <div className={cx('field-input')}>
                    <Select label="Quân / huyện" name="district" onChangeSelected={handleChange}>
                      <option value="">Chọn quận / huyện</option>
                      {districts?.map((district: IDistrict) => (
                        <option
                          key={district.code}
                          value={district.name}
                          selected={district.name === informationDelivery.district}
                        >
                          {district.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className={cx('field-input')}>
                    <Select label="Phường / xã" name="ward" onChangeSelected={handleChange}>
                      <option value="">Chọn phường / xã</option>
                      {wards?.map((ward: IWard) => (
                        <option
                          key={ward.code}
                          value={ward.name}
                          selected={ward.name === informationDelivery.ward}
                        >
                          {ward.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <div className={cx('type-address-shipping')}>
                <div className={cx('field-input', 'none-flex')}>
                  <input type="radio" name="locate" id="home" />
                  <label htmlFor="home">Nhà</label>
                </div>
                <div className={cx('field-input', 'none-flex')}>
                  <input type="radio" name="locate" id="company" />
                  <label htmlFor="company">Công ty</label>
                </div>
              </div>

              <div className={cx('section-content')}>
                <h2 className={cx('title')}>Phương thức vận chuyển</h2>
                {wards.length > 0 ? (
                  <div className={cx('radio-wrapper')}>
                    <div className={cx('field-input', 'none-flex')}>
                      <input type="radio" defaultChecked id="shipment" />
                      <label htmlFor="shipment">Giao hàng tiêu chuẩn (3 - 5 ngày)</label>
                    </div>

                    <div className={cx('radio-accessory')}>
                      {shipmentPrice.toLocaleString('vn-VN')}₫
                    </div>
                  </div>
                ) : (
                  <div className={cx('blank-slate')}>
                    <BlankSlateIcon />
                    <p>Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển</p>
                  </div>
                )}
              </div>
              <div className={cx('section-payment')}>
                <h2 className={cx('title')}>Phương thức thanh toán</h2>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="momo" />
                  <label htmlFor="momo">
                    <MoMoIcon />
                    <span>Ví Momo</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="shopeepay" />
                  <label htmlFor="shopeepay">
                    <ShopeePayIcon />
                    <span>Ví ShopeePay</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="vnpay" />
                  <label htmlFor="vnpay">
                    <VNPayIcon />
                    <span>
                      <p>Thanh toán qua cổng VN Pay</p>
                      <p className={cx('text-more-vnpay')}>
                        Nhập mã: <b>VNPAYVIP</b> Giảm ngay 3% tối đa 500K{' '}
                      </p>
                    </span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="reepay" />
                  <label htmlFor="reepay">
                    <ReePayIcon />
                    <span>
                      <p>Ree-Pay</p>
                      <p className={cx('quick-tagline')}>
                        Mua trước - Trả say, với giá trị đến 2.000.000đ
                      </p>
                    </span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="banking" />
                  <label htmlFor="banking">
                    <ATMIcon />
                    <span>ATM Card / Internet Banking</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="visa" />
                  <label htmlFor="visa">
                    <VisaIcon />
                    <span>Visa / Master / JSB Card</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input name="method-payment" type="radio" id="cod" />
                  <label htmlFor="cod">
                    <PaymentReceived />
                    <span>Thanh toán khi nhận hàng (COD)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('sidebar')}>
            <div
              onClick={() => setIsOpenItem(!isOpenItem)}
              className={cx('toggle-items', isOpenItem && 'expanded')}
            >
              <div>
                <span>Tóm tắt đơn hàng</span>
                <ArrowDownIcon />
              </div>
              <div className={cx('cart-price')}>
                {listCartItem
                  ?.reduce(
                    (acc: number, cartItem: ICartItem) =>
                      acc +
                      (cartItem.product.price -
                        cartItem.product.price * (cartItem.product.discount / 100)) *
                        cartItem.quantity,
                    0,
                  )
                  .toLocaleString('vn-VN')}
                ₫
              </div>
            </div>
            <div ref={productItemRef} className={cx('product-list')}>
              {listCartItem.map((cartItem: ICartItem) => (
                <div key={cartItem._id} className={cx('product-item')}>
                  <img
                    className={cx('product-thumbnail')}
                    src={process.env.REACT_APP_API_URL + cartItem.image}
                    alt={cartItem.product.name}
                  />
                  <div className={cx('product-description')}>
                    <div className={cx('product-name')}>
                      <b>{cartItem.product.brand.name}</b>
                      <span className={cx('product-title')}>{cartItem.product.name}</span>
                    </div>
                    <div className={cx('product-price')}>
                      <span>
                        {(
                          cartItem.product.price -
                          cartItem.product!.price * (cartItem.product!.discount / 100)
                        ).toLocaleString('vn-VN')}
                        ₫
                      </span>
                      <span>Số lượng: {cartItem.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx('discount')}>
              <div className={cx('input')}>
                <Input label="mã giảm giá" />
              </div>
              <div>
                <Button className={cx('btn')} primary small>
                  Sử dụng
                </Button>
              </div>
            </div>
            <div className={cx('total-line')}>
              <div>
                <span>Tạm tính</span>
                <span>
                  {' '}
                  {listCartItem
                    ?.reduce(
                      (acc: number, cartItem: ICartItem) =>
                        acc +
                        (cartItem.product.price -
                          cartItem.product.price * (cartItem.product.discount / 100)) *
                          cartItem.quantity,
                      0,
                    )
                    .toLocaleString('vn-VN')}
                  ₫
                </span>
              </div>
              <div>
                <span>Phí vận chuyển</span>
                <span>
                  +{' '}
                  {informationDelivery.district ? `${shipmentPrice.toLocaleString('vn-VN')}₫` : '-'}
                </span>
              </div>
            </div>
            <div className={cx('total-price')}>
              <span>Tổng cộng</span>
              <p>
                {' '}
                {(
                  listCartItem?.reduce(
                    (acc: number, cartItem: ICartItem) =>
                      acc +
                      (cartItem.product.price -
                        cartItem.product.price * (cartItem.product.discount / 100)) *
                        cartItem.quantity,
                    0,
                  ) + shipmentPrice
                ).toLocaleString('vn-VN')}
                ₫
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('checkout-step')}>
        <div className={cx('step-footer')}>
          <div>
            <Button className={cx('btn', 'btn-prev-link')} leftIcon={<ArrowLeftIcon />} large>
              Quay lại giỏ hàng
            </Button>
          </div>
          <div>
            <Button onClick={handleCreateOrder} className={cx('btn')} large primary>
              Hoàn tất đặt hàng
            </Button>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Payment;
