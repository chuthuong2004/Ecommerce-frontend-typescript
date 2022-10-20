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
import { Link, useLocation } from 'react-router-dom';
import config from '../../config';
import { useState, useRef, useEffect } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { selectAuth } from '../../features/authSlice';
import { useAppSelector } from '../../app/hooks';
import Select from '../../components/Select';
import { ICartItem } from '../../models/cart.model';
import { selectCart } from '../../features/cartSlice';
const cx = classNames.bind(styles);

type Props = {
  listCartItem: ICartItem[];
};
const Payment: React.FC<Props> = () => {
  const location = useLocation();
  let { listCartItem } = location.state;
  const { user } = useAppSelector(selectAuth);
  const { cartItems } = useAppSelector(selectCart);
  const [isOpenItem, setIsOpenItem] = useState<boolean>(false);
  console.log(listCartItem);
  if (listCartItem.length === 0) {
    listCartItem = cartItems;
  }
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
                  {user?.avatar && <img className={cx('img')} src={user.avatar} alt="" />}
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
                {/* <Input label="Chọn địa chỉ" /> */}
                <Select label="Chọn địa chỉ">
                  <option value="">Địa chỉ đã lưu trữ</option>
                </Select>
                <div className={cx('field-required')}>
                  <div className={cx('field-input')}>
                    <Input label="họ và tên" />
                  </div>
                  <div className={cx('field-input')}>
                    <Input label="số điện thoại" />
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
                    <Input label="địa chỉ" />
                  </div>
                  <div className={cx('field-input')}>
                    <Select label="Tỉnh / thành">
                      <option value="">Chọn tỉnh / thành</option>
                    </Select>
                  </div>
                </div>
                <div className={cx('field-required')}>
                  <div className={cx('field-input')}>
                    <Select label="Quân / huyện">
                      <option value="">Chọn quận / huyện</option>
                    </Select>
                  </div>
                  <div className={cx('field-input')}>
                    <Select label="Phường / xã">
                      <option value="">Chọn phường / xã</option>
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
                {/* <div className={cx('blank-slate')}>
                                    <BlankSlateIcon />
                                    <p>Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển</p>
                                </div> */}

                <div className={cx('radio-wrapper')}>
                  <div className={cx('field-input', 'none-flex')}>
                    <input type="radio" id="shipment" />
                    <label htmlFor="shipment">Giao hàng tiêu chuẩn (3 - 5 ngày)</label>
                  </div>

                  <div className={cx('radio-accessory')}>21,000₫</div>
                </div>
              </div>
              <div className={cx('section-payment')}>
                <h2 className={cx('title')}>Phương thức thanh toán</h2>
                <div className={cx('field-input', 'payment-method')}>
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
                    <MoMoIcon />
                    <span>Ví Momo</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
                    <ShopeePayIcon />
                    <span>Ví ShopeePay</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
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
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
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
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
                    <ATMIcon />
                    <span>ATM Card / Internet Banking</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
                    <VisaIcon />
                    <span>Visa / Master / JSB Card</span>
                  </label>
                </div>
                <div className={cx('field-input', 'payment-method')}>
                  <input type="radio" id="shipment" />
                  <label htmlFor="shipment">
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
            <div className={cx('product-list')}>
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
                <span>+ 30,000đ</span>
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
                  ) + 30000
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
            <Button className={cx('btn')} large primary>
              Hoàn tất đặt hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
