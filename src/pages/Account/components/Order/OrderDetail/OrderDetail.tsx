import React, { useState, useEffect, useRef } from 'react';
import styles from './OrderDetail.module.scss';
import classNames from 'classnames/bind';
import { useCancelOrderMutation, useGetOrderByIdQuery } from '../../../../../services/ordersApi';
import Loading from '../../../../../components/Loading';
import { BagIcon, CopyIcon, MessageIcon } from '../../../../../components/Icons';
import { EOrderStatus, IOrder, IOrderItem } from '../../../../../models/order.model';
import OrderItemProduct from '../OrderItemProduct';
import Button from '../../../../../components/Button';
import PopUp from '../../../../../components/PopUp';
import Input from '../../../../../components/Input';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useSockets } from '../../../../../context/socket.context';
const cx = classNames.bind(styles);
type Props = {
  orderId: string;
};
const OrderDetail: React.FC<Props> = ({ orderId }) => {
  const [order, setOrder] = useState<IOrder | null>(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [cancelValueError, setCancelValueError] = useState<{ cancelReason: string }>({
    cancelReason: '',
  });
  const orderIDRef = useRef<HTMLDivElement>(null);
  const { data, refetch, isLoading, isSuccess, isError, isFetching, error } = useGetOrderByIdQuery({
    orderId,
  });
  const [
    cancelOrder,
    {
      data: dataCancel,
      isLoading: isLoadingCancel,
      isError: isErrorCancel,
      error: errorCancel,
      isSuccess: isSuccessCancel,
    },
  ] = useCancelOrderMutation();
  useEffect(() => {
    if (isSuccess) {
      setOrder(data);
    }
  }, [isLoading, isFetching]);

  useEffect(() => {
    if (isSuccessCancel) {
      refetch();
      toast.success(dataCancel?.message);
    }
    if (isErrorCancel) {
      toast.error((error as any).data.message);
    }
  }, [isLoadingCancel]);

  const handleCopyOrderID = (text: string) => {
    navigator.clipboard.writeText(text);
    orderIDRef.current?.classList.add(cx('isCopied'));
    setTimeout(() => {
      orderIDRef.current?.classList.remove(cx('isCopied'));
    }, 1000);
  };
  const handleCancelOrder = async () => {
    if (!cancelReason) {
      setCancelValueError({ cancelReason: 'Trường này là bắt buộc' });
      return;
    }
    await cancelOrder({ orderId, canceledReason: cancelReason });
  };

  const handleBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCancelValueError({
      ...cancelValueError,
      [e.target.name]: e.target.value ? '' : 'Trường này là bắt buộc !',
    });
  };
  console.log({ data, isLoading, isSuccess, isError, isFetching, error });
  const handleOpenContact = () => {
    const btn = document.getElementById('messenger');
    btn?.click();
  };
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
                <PopUp
                  trigger={
                    <Button onClick={() => setOpenPopUp(true)} className={cx('btn')} primary>
                      Hủy đơn hàng
                    </Button>
                  }
                  position="center"
                  isOpen={openPopUp}
                  handleClose={() => setOpenPopUp(false)}
                >
                  <div className={cx('cancel-order', !openPopUp && 'closed')}>
                    <h2>Thông tin hủy đơn hàng</h2>
                    <div className={cx('form-cancel')}>
                      <div className={cx('cancel-input')}>
                        <Input
                          value={cancelReason}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setCancelReason(e.target.value)
                          }
                          onBlur={handleBlurInput}
                          error={cancelValueError}
                          label="lý do hủy đơn hàng"
                          name="cancelReason"
                        />
                      </div>
                      <div className={cx('cancel-btn')}>
                        <Button onClick={handleCancelOrder} primary>
                          {isLoadingCancel ? (
                            <ReactLoading
                              type="spinningBubbles"
                              color="#ffffff"
                              width={20}
                              height={20}
                            />
                          ) : (
                            'Xác nhận hủy đơn'
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopUp>
              </div>
            )}
            <div className={cx('btn-contract')}>
              <Button onClick={handleOpenContact} leftIcon={<MessageIcon />} primary>
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
