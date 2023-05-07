import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderItemProduct.module.scss';
import { IOrderItem } from '../../../../../../interfaces';
const cx = classNames.bind(styles);
type Props = {
  orderItem: IOrderItem;
  detail?: boolean;
};
const OrderItemProduct: React.FC<Props> = ({ orderItem, detail = false }) => {
  return (
    <div className={cx('product')}>
      <div className={cx('image-wrapper')}>
        <img
          className={cx('image-product')}
          src={process.env.REACT_APP_API_URL + orderItem.image}
          alt={orderItem.name}
        />
      </div>
      <div className={cx('text-wrapper')}>
        <div className={cx('product-brand')}>{orderItem.brandName}</div>
        <div className={cx('product-name')}>{orderItem.name}</div>
        {detail && (
          <div className={cx('lq')}>
            <strong>
              {orderItem.price.toLocaleString('vn-VN')}₫ x {orderItem.quantity}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(OrderItemProduct);
