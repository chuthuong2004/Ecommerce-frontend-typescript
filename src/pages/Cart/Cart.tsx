import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '../../components/Button';
import { BagIconLarge, PointerIcon } from '../../components/Icons';
import Input from '../../components/Input';
import ItemCart from '../../components/ItemCart';
import SocialFooter from '../../layouts/components/SocialFooter';
import Footer from '../../layouts/components/Footer';
import config from '../../config';
import EmptyContent from '../../components/EmptyContent';
import RecommendedProduct from '../../components/RecommendedProduct/RecommendedProduct';
import { useGetMyCartQuery } from '../../services/cartsApi';
import { ICartItem } from '../../models/cart.model';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCart, setCart } from '../../features/cartSlice';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
const Cart = () => {
    // const cart = null;
    const dispatch = useAppDispatch()
    let cart = useAppSelector(selectCart)
    // const { data: cart, isLoading: isLoadingCart, isSuccess: isSuccessCart, isError: isErrorCart, error: errorCart } = useGetMyCartQuery({}, { refetchOnMountOrArgChange: true })

    console.log('cart', cart);
    const [selectedAll, setSelectedAll] = useState(true)
    const [selectedCart, setSelectedCart] = useState(cart?.cartItems)

    useEffect(() => {
        !selectedAll && setSelectedCart([])
        selectedAll && setSelectedCart(cart?.cartItems)
    }, [selectedAll])
    const handleCheckedChange = (cartItem: ICartItem) => {
        setSelectedCart(selectedCart?.filter(item => item._id !== cartItem._id))
    }
    useEffect(() => {
        if (selectedCart?.length !== cart?.cartItems.length) {
            setSelectedAll(false)
        }
    }, [selectedCart])
    useEffect(() => {
        setSelectedCart(cart?.cartItems)
    }, [cart])
    // useEffect(() => {
    //     if (isSuccessCart) {
    //         dispatch(setCart(cart))
    //     }
    // }, [isLoadingCart])
    console.log('sele', selectedCart);

    return (
        <div className={cx('wrapper')}>
            {cart?.cartItems.length === 0 ?
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
                : (
                    <>
                        <div className={cx('cart-content')}>
                            <div className={cx('container')}>
                                <div className={cx('cart-listing')}>
                                    <div className={cx('cart-listing__header')}>
                                        <input type="checkbox" id="all-item" defaultChecked={selectedAll} onChange={(e) => setSelectedAll(e.target.checked)} />
                                        <label htmlFor="all-item">TẤT CẢ SẢN PHẨM</label>
                                    </div>
                                    <div className={cx('cart-listing__body')}>
                                        {cart?.cartItems.map((cartItem: ICartItem) => (
                                            <div key={cartItem._id} className={cx('cart-listing__line')}>
                                                <ItemCart onChangeChecked={(e) => handleCheckedChange(cartItem)} isSelected={selectedCart?.find(item => item._id === cartItem._id) ? true : false} cartItem={cartItem} checkbox={true} />
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
                                            Vui lòng liên hệ 1900252538 hoặc inbox fanpage Maison Online <b>tại đây</b> nếu
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
                                                    Lưu ý: Hóa đơn sẽ được xuất bao gồm tổng giá trị đơn hàng (sản phẩm +
                                                    phí vận chuyển)
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
                                    <div className={cx('total-price')}>{selectedCart?.reduce((acc: number, cartItem: ICartItem) => acc + ((cartItem.product.price - cartItem.product.price * (cartItem.product.discount / 100)) * cartItem.quantity), 0).toLocaleString('vn-VN')}₫</div>
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
                                        <Button to={config.routes.payment} large primary>
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

export default Cart;
