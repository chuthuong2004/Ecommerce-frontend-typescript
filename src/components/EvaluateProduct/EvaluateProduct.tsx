import React, { ChangeEvent, useState } from 'react';
import styles from './EvaluateProduct.module.scss';
import classNames from 'classnames/bind';
import { Rating } from 'react-simple-star-rating';
import { IOrderItem } from '../../models/order.model';
import Button from '../Button';
import reviewApi from '../../api/reviewApi';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';

const cx = classNames.bind(styles);
type Props = {
  handleClose: () => void;
  orderItems?: IOrderItem[];
};
export interface IInputReview {
  orderItemId: string;
  content: string;
  star: number;
}
const EvaluateProduct: React.FC<Props> = ({ orderItems, handleClose }) => {
  const [dataReview, setDataReview] = useState<IInputReview[]>(
    orderItems && orderItems.length > 0
      ? orderItems.map((orderItem) => {
          return {
            orderItemId: orderItem._id,
            star: 5,
            content: '',
          };
        })
      : [],
  );
  const [loading, setLoading] = useState(false);
  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>, orderItem: IOrderItem) => {
    setDataReview((prev) => {
      const index = prev.findIndex((item) => item.orderItemId === orderItem._id);
      prev[index].content = e.target.value;
      console.log(prev);

      return prev;
    });
  };
  const handleRating = (rate: number, orderItem: IOrderItem) => {
    setDataReview((prev) => {
      const index = prev.findIndex((item) => item.orderItemId === orderItem._id);
      prev[index].star = rate;
      console.log(prev);
      return prev;
    });
  };
  const handleEvaluation = async () => {
    try {
      setLoading(true);
      const res = await reviewApi.create(dataReview);
      setLoading(false);
      toast.success(res.message);
      handleClose();
    } catch (error) {
      toast.error((error as any).response.data.message);
      setLoading(false);
    }
  };
  console.log(dataReview);

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        {orderItems &&
          orderItems.length > 0 &&
          orderItems.map((orderItem) => (
            <div key={orderItem._id} className={cx('content')}>
              <div className={cx('product')}>
                <img src={process.env.REACT_APP_API_URL + orderItem.image} alt="" />
                <div className={cx('product-info')}>
                  <p className={cx('product-name')}>
                    {orderItem.brandName + ' - ' + orderItem.name}
                  </p>
                  <p className={cx('product-type')}>
                    Phân loại: {orderItem.color}, {orderItem.size}
                  </p>
                </div>
              </div>
              <div className={cx('rating')}>
                <span>Chất lượng sản phẩm</span>
                <div>
                  <Rating
                    showTooltip
                    fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
                    tooltipArray={['Tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Tuyệt vời']}
                    onClick={(rate: number) => handleRating(rate, orderItem)}
                    initialValue={5}
                    transition
                    titleSeparator="trên"
                    // allowFraction
                    size={30}
                  />
                </div>
              </div>
              <textarea
                name=""
                id={orderItem._id}
                cols={30}
                rows={5}
                className={cx('input-evaluate')}
                onChange={(e) => handleChangeInput(e, orderItem)}
                placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này với những người mua khác."
              ></textarea>
            </div>
          ))}
      </div>

      <div className={cx('action')}>
        <div>
          <Button onClick={handleClose} border>
            Trở về
          </Button>
        </div>
        <div>
          <Button onClick={handleEvaluation} primary>
            {loading ? (
              <ReactLoading type="spinningBubbles" color="#ffffff" width={20} height={15} />
            ) : (
              'Hoàn thành'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvaluateProduct;
