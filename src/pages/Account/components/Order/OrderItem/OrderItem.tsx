import React, { useRef, memo, useState } from 'react';
import { ArrowRightIcon, CopyIcon } from '../../../../../components/Icons';
import { EOrderStatus } from '../../../../../models/order.model';
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import { IOrder } from '../../../../../models/order.model';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../../../config';
import OrderItemProduct from '../OrderItemProduct/OrderItemProduct';
const cx = classNames.bind(styles);
type Props = {
  order: IOrder;
};
const OrderItem: React.FC<Props> = ({ order }) => {
  const orderIDRef = useRef<HTMLSpanElement>(null);
  const handleCopyOrderID = (text: string) => {
    navigator.clipboard.writeText(text);
    orderIDRef.current?.classList.add(cx('isCopied'));
    setTimeout(() => {
      orderIDRef.current?.classList.remove(cx('isCopied'));
    }, 1000);
  };
  return (
    <>
      <div className={cx('order__meta')}>
        <div className={cx('order__code')}>
          Đơn hàng <strong>#{order.orderId}</strong>
          <span ref={orderIDRef} onClick={() => handleCopyOrderID(order.orderId)}>
            <CopyIcon />
            <span className={cx('copied')}>Copied</span>
          </span>
        </div>
        <Link to={`${config.routes.order}/${order.orderId}`} className={cx('order__status')}>
          <span>
            {order.orderStatus === EOrderStatus.Processing && 'Đang xử lý'}
            {order.orderStatus === EOrderStatus.Shipping && 'Đang vận chuyển'}
            {order.orderStatus === EOrderStatus.Delivery && 'Đang giao hàng'}
            {order.orderStatus === EOrderStatus.Delivered && 'Đã giao hàng'}
            {order.orderStatus === EOrderStatus.Canceled && 'Đã hủy'}
            <ArrowRightIcon width="20" height="20" color="#868d95" />
          </span>
        </Link>
      </div>
      <Link to={config.routes.order + '/' + order._id} className={cx('order__product')}>
        <OrderItemProduct orderItem={order.orderItems[0]} />
      </Link>
      <div className={cx('lq')}>
        <span>{order.orderItems.length} sản phẩm</span>
        <strong>{(order.shippingPrice + order.totalPrice).toLocaleString('vn-VN')}₫</strong>
      </div>
    </>
  );
};

export default memo(OrderItem);
