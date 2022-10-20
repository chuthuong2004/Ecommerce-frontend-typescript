import React from 'react'
import classNames from 'classnames/bind';
import styles from './OrderContent.module.scss';
import { IOrder } from '../../../../../models/order.model';
import { SearchIcon } from '../../../../../components/Icons';
import { Link } from 'react-router-dom';
import config from '../../../../../config';
import OrderItem from '../OrderItem';
const cx = classNames.bind(styles);

type Props = {
    data: IOrder[]
}
const OrderContent: React.FC<Props> = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className={cx('order-search')}>
                <div className={cx('search-icon')}>
                    <SearchIcon width="20" height="20" color="#868D95" />
                </div>
                <input
                    className={cx('search-input')}
                    type="text"
                    placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm"
                />
            </div>
            <div className={cx('list-order')}>
                {data.map((order: IOrder) => (
                    <Link key={order._id} to={config.routes.order + '/' + order._id} className={cx('order')}>
                        <OrderItem order={order} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default OrderContent
