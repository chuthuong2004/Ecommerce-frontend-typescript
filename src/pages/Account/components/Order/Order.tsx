import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { TruckEmptyIcon } from '../../../../components/Icons';
import EmptyContent from '../../../../components/EmptyContent';
import RecommendedProduct from '../../../../components/RecommendedProduct';
import TabContent from '../../../../components/TabContent';
import { useLocation, useParams } from 'react-router-dom';
import config from '../../../../config';
import OrderDetail from './OrderDetail';
import { dataOrder } from '../../../../assets/dataOrder';
import { ITabContent } from '../../../../components/TabContent/TabContent';
import { EOrderStatus } from '../../../../models/order.model';
import OrderContent from './OrderContent';
const cx = classNames.bind(styles);

const processing = dataOrder.filter((order) => order.orderStatus === EOrderStatus.Processing || order.orderStatus === EOrderStatus.Shipping || order.orderStatus === EOrderStatus.Delivery);
const completed = dataOrder.filter((order) => order.orderStatus === EOrderStatus.Canceled || order.orderStatus === EOrderStatus.Delivered)
const Order: React.FC = () => {
    let { orderID } = useParams();
    const { pathname } = useLocation();
    const tabHeaders: ITabContent[] = [
        {
            _id: uuidv4(),
            title: `Đang xử lý ${processing?.length > 0 ? `(${processing?.length})` : ''}`,
            content: processing?.length > 0 && processing ? <OrderContent data={processing} /> : <EmptyContent
                icon={<TruckEmptyIcon />}
                titleBtn="Dạo một vòng xem nào!"
                content1="Không có đơn hàng nào!"
                content2="Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dẫn chỉ dành riêng cho bạn."
            />,
        },
        {
            _id: uuidv4(),
            title: `Đã hoàn tất ${completed?.length > 0 ? `(${completed?.length})` : ''}`,
            content: completed?.length > 0 && completed ? <OrderContent data={completed} /> : <EmptyContent
                icon={<TruckEmptyIcon />}
                titleBtn="Dạo một vòng xem nào!"
                content1="Không có đơn hàng nào!"
                content2="Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dẫn chỉ dành riêng cho bạn."
            />,
        },
    ];
    return (
        <div>
            {pathname === config.routes.order ? (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <TabContent contents={tabHeaders} />
                    </div>
                    {dataOrder.length === 0 && (
                        <div className={cx('empty-order')}>
                            <RecommendedProduct slideShow={2.5} slideScroll={2} small noMargin />
                        </div>
                    )}
                </div>
            ) : (
                <OrderDetail orderID={orderID} />
            )}
        </div>
    );
};

export default Order;
