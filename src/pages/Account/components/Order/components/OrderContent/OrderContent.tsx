import React, { useState, useEffect, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderContent.module.scss';
import { useDebounce } from '@/hooks';
import { IOrder } from '@/models';
import { IOrderItem } from '@/interfaces';
import { SearchInput } from '@/components';
import OrderItem from '../OrderItem';
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
      <div className={cx('search-order')}>
        <SearchInput
          value={searchInput}
          loading={loading}
          onChange={(e) => setSearchInput(e.target.value)}
          handleClearInput={() => setSearchInput('')}
          placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm"
        />
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

export default memo(OrderContent);
