import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { useState, useEffect, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TruckEmptyIcon } from '../../../../components/Icons';
import { useLocation, useParams } from 'react-router-dom';
import config from '../../../../config';
import { useGetMyOrderQuery } from '../../../../services/ordersApi';
import { EmptyContent, Helmet, RecommendedProduct, TabContent } from '../../../../components';
import { IOrder } from '../../../../models';
import { EOrderStatus, ITabContent } from '../../../../interfaces';
import { OrderContent, OrderDetail } from './components';
const cx = classNames.bind(styles);

const Order: React.FC = () => {
  let { orderID } = useParams();
  const { pathname } = useLocation();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [processing, setProcessing] = useState<IOrder[]>([]);
  const [completed, setCompleted] = useState<IOrder[]>([]);
  const [tabHeaders, setTabHeaders] = useState<ITabContent[]>([]);

  const {
    data: dataOrder,
    refetch,
    isFetching,
    isError,
    isSuccess,
    isLoading,
    error,
  } = useGetMyOrderQuery({});
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setProcessing(
        dataOrder.data.filter(
          (order) =>
            order.orderStatus === EOrderStatus.Processing ||
            order.orderStatus === EOrderStatus.Shipping ||
            order.orderStatus === EOrderStatus.Delivery,
        ),
      );
      setCompleted(
        dataOrder.data.filter(
          (order) =>
            order.orderStatus === EOrderStatus.Canceled ||
            order.orderStatus === EOrderStatus.Delivered,
        ),
      );
      setOrders(dataOrder.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [isFetching, isLoading]);
  useEffect(() => {
    setTabHeaders([
      {
        _id: uuidv4(),
        title: `Đang xử lý ${processing?.length > 0 ? `(${processing?.length})` : ''}`,
        content:
          processing?.length > 0 && processing ? (
            <OrderContent data={processing} />
          ) : (
            <EmptyContent
              icon={<TruckEmptyIcon />}
              titleBtn="Dạo một vòng xem nào!"
              content1="Không có đơn hàng nào!"
              content2="Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dẫn chỉ dành riêng cho bạn."
            />
          ),
      },
      {
        _id: uuidv4(),
        title: `Đã hoàn tất ${completed?.length > 0 ? `(${completed?.length})` : ''}`,
        content:
          completed?.length > 0 && completed ? (
            <OrderContent data={completed} />
          ) : (
            <EmptyContent
              icon={<TruckEmptyIcon />}
              titleBtn="Dạo một vòng xem nào!"
              content1="Không có đơn hàng nào!"
              content2="Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dẫn chỉ dành riêng cho bạn."
            />
          ),
      },
    ]);
  }, [orders]);
  return (
    <Helmet title="Đơn hàng của bạn - Koga-clothes.shop">
      <div>
        {pathname === config.routes.order ? (
          <div className={cx('wrapper')}>
            {tabHeaders.length > 0 && (
              <>
                <div className={cx('container')}>
                  <TabContent contents={tabHeaders} />
                </div>
                {orders.length === 0 && (
                  <div className={cx('empty-order')}>
                    <RecommendedProduct slideShow={2.5} slideScroll={2} small noMargin />
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          orderID && <OrderDetail orderId={orderID} />
        )}
      </div>
    </Helmet>
  );
};

export default memo(Order);
