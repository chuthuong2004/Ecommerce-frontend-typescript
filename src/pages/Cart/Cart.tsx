import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { BagIconLarge, PointerIcon } from '../../components/Icons';
import config from '../../config';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../redux/slices/cartSlice';
import { memo, useEffect, useState } from 'react';
import { ICartItem } from '../../interfaces';
import { Button, EmptyContent, Input, ItemCart, RecommendedProduct } from '../../components';
import { Footer, SocialFooter } from '../../layouts/components';
const cx = classNames.bind(styles);
const Cart = () => {
  let cart = useAppSelector(selectCart);
  const [selectedAll, setSelectedAll] = useState<boolean>(true);
  const [selectedCart, setSelectedCart] = useState<ICartItem[]>(cart?.cartItems || []);

  const handleCheckedChange = (cartItem: ICartItem, isChecked: boolean) => {
    isChecked && setSelectedCart((prev: ICartItem[]) => [...prev, cartItem]);
    !isChecked &&
      setSelectedCart((prev: ICartItem[]) => {
        return prev.filter((item: ICartItem) => item._id !== cartItem._id);
      });
  };
  useEffect(() => {
    if (selectedCart?.length < cart?.cartItems.length) {
      setSelectedAll(false);
    } else {
      setSelectedAll(true);
    }
  }, [selectedCart, cart?.cartItems]);
  useEffect(() => {
    !cart && setSelectedCart([]);
    if (cart) {
      setSelectedCart((prev: ICartItem[]) => {
        return cart.cartItems.filter((item) =>
          prev.some((prevItem: ICartItem) => prevItem._id === item._id),
        );
      });
    }
    document.title = 'Giỏ hàng của bạn - Koga-clothes.shop';
  }, [cart]);
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAll(e.target.checked);
    !e.target.checked && setSelectedCart([]);
    e.target.checked && setSelectedCart(cart?.cartItems);
  };
  return (
    <div className={cx('wrapper')}>
      {cart?.cartItems.length === 0 ? (
        <>
          <EmptyContent
            icon={<BagIconLarge />}
            titleBtn="Dạo một vòng xem nào"
            content1="Không có sản phẩm nào!"
            content2=" Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dấn chỉ dành riêng cho bạn."
          />
          <RecommendedProduct />
          <Footer />
        </>
      ) : (
        <>
          <div className={cx('cart-content')}>
            <div className={cx('container')}>
              <div className={cx('cart-listing')}>
                <div className={cx('cart-listing__header')}>
                  <input
                    type="checkbox"
                    id="all-item"
                    checked={selectedAll}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="all-item">TẤT CẢ SẢN PHẨM</label>
                </div>
                <div className={cx('cart-listing__body')}>
                  {cart?.cartItems.map((cartItem: ICartItem) => (
                    <div key={cartItem._id} className={cx('cart-listing__line')}>
                      <ItemCart
                        onChangeChecked={handleCheckedChange}
                        isSelected={
                          selectedCart?.find((item) => item._id === cartItem._id) ? true : false
                        }
                        cartItem={cartItem}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx('cart-more-info')}>
                <div className={cx('cart-note')}>
                  <div className={cx('text-coupon')}>
                    <PointerIcon />
                    <span>Bạn có thể nhập mã giảm giá ở trang thanh toán</span>
                  </div>
                  <div className={cx('note-cart')}>
                    Vui lòng liên hệ 1900252538 hoặc inbox fanpage Koga Clothes <b>tại đây</b> nếu
                    Quý khách có yêu cầu đặc biệt với đơn hàng này.
                  </div>
                </div>
                <div className={cx('cart-invoice')}>
                  <div className={cx('invoice__show')}>
                    <input type="checkbox" name="" id="invoice" />
                    <label className={cx('invoice__label')} htmlFor="invoice">
                      Xuất hóa đơn công ty
                    </label>
                    <div className={cx('invoice__form')}>
                      <div style={{ color: 'red', fontStyle: 'italic' }}>
                        Lưu ý: Hóa đơn sẽ được xuất bao gồm tổng giá trị đơn hàng (sản phẩm + phí
                        vận chuyển)
                      </div>
                      <div>
                        <Input label="Tên công ty" />
                      </div>
                      <div>
                        <Input label="Mã số thuế" />
                      </div>

                      <div>
                        <Input label="Địa chỉ" />
                      </div>

                      <div>
                        <Input type="email" label="Email" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SocialFooter />
          <div className={cx('cart-actions')}>
            <div className={cx('container')}>
              <div className={cx('cart-actions__total')}>
                <div className={cx('title')}>
                  <strong>TẠM TÍNH</strong>
                  <span> ({selectedCart?.length} sản phẩm)</span>
                </div>
                <div className={cx('total-price')}>
                  {selectedCart
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
              <div className={cx('cart-actions__btn')}>
                <div className={cx('btn')}>
                  <Button
                    to={config.routes.collections + '/new-arrival'}
                    large
                    className={cx('btn-continue')}
                  >
                    Tiếp tục mua sắm
                  </Button>
                </div>
                <div className={cx('btn')}>
                  <Button
                    to={config.routes.payment}
                    state={{ listCartItem: selectedCart }}
                    large
                    primary
                  >
                    Thanh toán
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Cart);
