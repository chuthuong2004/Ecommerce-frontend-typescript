import React, { useState, useEffect, memo, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderContent.module.scss';
import { IOrder, IOrderItem } from '../../../../../models/order.model';
import { CloseIcon, SearchIcon } from '../../../../../components/Icons';
import OrderItem from '../OrderItem';
import { useDebounce } from '../../../../../hooks';
import ReactLoading from 'react-loading';
const cx = classNames.bind(styles);

type Props = {
  data: IOrder[];
};
const OrderContent: React.FC<Props> = ({ data }) => {
  const [searchInput, setSearchInput] = useState('');
  const [dataSearch, setDataSearch] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchInput, 500);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setDataSearch([]);
      return;
    }
    const handleSearch = () => {
      setLoading(true);
      const result = data.filter((order: IOrder) => {
        const isValidOrderId = order.orderId.toLowerCase().includes(debouncedValue.toLowerCase());
        const isValidNameOrder = order.orderItems.filter((item: IOrderItem) => {
          return item.name.toLowerCase().includes(debouncedValue);
        });
        return isValidOrderId || isValidNameOrder.length > 0;
      });
      setTimeout(() => {
        setLoading(false);
        setDataSearch(result);
      }, 500);
    };
    handleSearch();
  }, [debouncedValue]);
  useEffect(() => {
    setSearchInput('');
    setLoading(false);
  }, [data]);

  return (
    <div>
      <div className={cx('order-search')}>
        <div className={cx('search-icon')}>
          <SearchIcon width="20" height="20" color="#868D95" />
        </div>
        <input
          className={cx('search-input')}
          type="text"
          value={searchInput}
          placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {!loading && searchInput && (
          <div onClick={() => setSearchInput('')} className={cx('loading-icon')}>
            <CloseIcon />
          </div>
        )}
        {loading && (
          <div className={cx('loading-icon')}>
            <ReactLoading type="spinningBubbles" color="#2e2e2e" width={20} height={20} />
          </div>
        )}
      </div>
      <div className={cx('list-order')}>
        {searchInput
          ? dataSearch.length > 0
            ? dataSearch.map((order: IOrder) => (
                <div key={order._id} className={cx('order')}>
                  <OrderItem order={order} />
                </div>
              ))
            : !loading && <span className={cx('order-not-found')}>Không tìm thấy đơn hàng nào</span>
          : data.map((order: IOrder) => (
              <div key={order._id} className={cx('order')}>
                <OrderItem order={order} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default OrderContent;
