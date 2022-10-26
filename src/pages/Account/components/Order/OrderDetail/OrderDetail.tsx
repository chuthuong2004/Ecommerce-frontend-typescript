import React, { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import styles from './OrderDetail.module.scss';
import classNames from 'classnames/bind';
import { useGetOrderByIdQuery } from '../../../../../services/ordersApi';
import Loading from '../../../../../components/Loading';
import { BagIcon, CopyIcon, MessageIcon } from '../../../../../components/Icons';
import { EOrderStatus, IOrder, IOrderItem } from '../../../../../models/order.model';
import OrderItem from '../OrderItem';
import OrderItemProduct from '../OrderItemProduct/OrderItemProduct';
import Button from '../../../../../components/Button';
const cx = classNames.bind(styles);
type Props = {
  orderId: string;
};
const OrderDetail: React.FC<Props> = ({ orderId }) => {
  const [order, setOrder] = useState<IOrder | null>(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const orderIDRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isSuccess, isError, isFetching, error } = useGetOrderByIdQuery({
    orderId,
  });
  useEffect(() => {
    if (isSuccess) {
      setOrder(data);
    }
  }, [isLoading, isFetching]);

  const handleCopyOrderID = (text: string) => {
    navigator.clipboard.writeText(text);
    orderIDRef.current?.classList.add(cx('isCopied'));
    setTimeout(() => {
      orderIDRef.current?.classList.remove(cx('isCopied'));
    }, 1000);
  };
  const handleCancelOrder = () => {
    setOpenPopUp(true);
  };
  console.log({ data, isLoading, isSuccess, isError, isFetching, error });

  return (
    <div className={cx('order-detail')}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={cx('order-detail__meta')}>
            <div className={cx('order-detail__meta--left')}>
              <div className={cx('ord-number')}>
                <span>Đơn hàng </span>
                <strong>#{order?.orderId}</strong>
                <div
                  ref={orderIDRef}
                  onClick={() => order?.orderId && handleCopyOrderID(order.orderId)}
                  className={cx('copy-icon')}
                >
                  <CopyIcon />
                  <span className={cx('copied')}>Copied</span>
                </div>
              </div>
              <div className={cx('payment-stt')}>
                Thanh toán: <strong>{order?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</strong>
              </div>
              <div className={cx('quantity')}>
                Số lượng: <strong>{order?.orderItems.length} sản phẩm</strong>
              </div>
            </div>
            <div className={cx('order-detail__meta--right')}>
              <p className={cx('shipment-detail')}>
                <strong>CHI TIẾT GIAO HÀNG</strong>
                <span>
                  {order?.orderStatus === EOrderStatus.Processing && 'Đang xử lý'}
                  {order?.orderStatus === EOrderStatus.Shipping && 'Đang vận chuyển'}
                  {order?.orderStatus === EOrderStatus.Delivery && 'Đang giao hàng'}
                  {order?.orderStatus === EOrderStatus.Delivered && 'Đã giao hàng'}
                  {order?.orderStatus === EOrderStatus.Canceled && 'Đã hủy'}
                </span>
              </p>
              <p className={cx('customer')}>
                <strong>
                  {order?.deliveryInformation.firstName + ' ' + order?.deliveryInformation.lastName}
                </strong>{' '}
                - {order?.deliveryInformation.phone}
              </p>
              <p className={cx('address')}>
                {order?.deliveryInformation.address}, {order?.deliveryInformation.ward},{' '}
                {order?.deliveryInformation.district}, {order?.deliveryInformation.province}
              </p>
            </div>
          </div>
          <div className={cx('order-detail__items')}>
            {order?.orderItems.map((orderItem: IOrderItem) => (
              <OrderItemProduct detail={true} orderItem={orderItem} />
            ))}
          </div>
          <div className={cx('order-detail__summary')}>
            <strong>TÓM TẮT ĐƠN HÀNG</strong>
            <div className={cx('d-flex', 'justify-content-between')}>
              <div>
                <strong>Tạm tính</strong>
                <div>{order?.orderItems.length} sản phẩm</div>
              </div>
              <strong>{order?.provisionalPrice.toLocaleString('vn-VN')}₫</strong>
            </div>
            <div className={cx('d-flex', 'justify-content-between')}>
              <strong>Phí Giao Hàng</strong>
              <strong>+ {order?.shippingPrice.toLocaleString('vn-VN')}₫</strong>
            </div>
            <div className={cx('d-flex', 'justify-content-between')}>
              <strong>Mã Giảm Giá</strong>
              <strong>- 0₫</strong>
            </div>
            <div className={cx('d-flex', 'justify-content-between', 'order-detail__total')}>
              <strong>TỔNG ĐƠN HÀNG</strong>
              <strong>{order?.totalPrice.toLocaleString('vn-VN')}₫</strong>
            </div>
          </div>
          <div className={cx('order-detail__actions')}>
            {order?.orderStatus === EOrderStatus.Processing && (
              <div className={cx('btn-cancel')}>
                <Popup
                  trigger={
                    <Button className={cx('btn')} primary>
                      Hủy đơn hàng
                    </Button>
                  }
                  position="bottom center"
                  modal
                  nested
                >
                  <div style={{ backgroundColor: 'red', zIndex: 10000 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis in nesciunt
                    quidem et neque. Numquam delectus sit voluptatibus ipsum assumenda. Nam iste,
                    velit minus perspiciatis fugiat est id error molestias.
                  </div>
                </Popup>
              </div>
            )}
            <div className={cx('btn-contract')}>
              <Button leftIcon={<MessageIcon />} primary>
                Liên hệ hỗ trợ
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetail;
