import React from 'react'
import { ArrowRightIcon } from '../../../../../components/Icons'
import { EOrderStatus } from '../../../../../models/order.model'
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import { IOrder } from '../../../../../models/order.model';
const cx = classNames.bind(styles);
type Props = {
  order: IOrder
}
const OrderItem: React.FC<Props> = ({ order }) => {
  return (
    <>
      <div className={cx('order__meta')}>
        <div className={cx('order__code')}>
          Đơn hàng <strong>#{order.orderId}</strong>
        </div>
        <div className={cx('order__status')}>
          <span>
            {order.orderStatus === EOrderStatus.Processing && 'Đang xử lý'}
            {order.orderStatus === EOrderStatus.Shipping && 'Đang vận chuyển'}
            {order.orderStatus === EOrderStatus.Delivery && 'Đang giao hàng'}
            {order.orderStatus === EOrderStatus.Delivered && 'Đã giao hàng'}
            {order.orderStatus === EOrderStatus.Canceled && 'Đã hủy'}
            <ArrowRightIcon width="20" height="20" color="#868d95" />
          </span>
        </div>
      </div>
      <div className={cx('order__product')}>
        <div className={cx('product')}>
          <div className={cx('image-wrapper')}>
            <img
              className={cx('image-product')}
              src={process.env.REACT_APP_API_URL + order.orderItems[0].image}
              alt={order.orderItems[0].name}
            />
          </div>
          <div className={cx('text-wrapper')}>
            <div className={cx('product-brand')}>PUMA</div>
            <div className={cx('product-name')}>{order.orderItems[0].name}</div>
          </div>
        </div>
      </div>
      <div className={cx('lq')}>
        <span>{order.orderItems.length} sản phẩm</span>
        <strong>{(order.shippingPrice + order.totalPrice).toLocaleString('vn-VN')}₫</strong>
      </div>
    </>
  )
}

export default OrderItem
