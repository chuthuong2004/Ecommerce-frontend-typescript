import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewItem.module.scss';
import ReactStars from 'react-stars';
import { IReview } from '@/models';
const cx = classNames.bind(styles);

interface Props {
  review: IReview;
}
const ReviewItem: React.FC<Props> = ({ review }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('avatar')}>
        <img
          src="http://localhost:1337/public/avatars/20230422103207cdf3152f2c9340c0a9d03be6f0b1e580.jpg"
          alt=""
        />
      </div>
      <div className={cx('info')}>
        <p className={cx('name')}>Đào Văn Thương</p>
        <div className={cx('star')}>
          <ReactStars
            count={5}
            edit={false}
            size={24}
            color2={'#ffbc0b'}
            half
            value={review.star}
          />
        </div>
        <div className={cx('date')}>10/05/2023 20:25</div>
        <div className={cx('desc')}>
          <span>
            Màu sắc: <p>{review.orderedProductDetail.color}</p>
          </span>
          <span>
            Kích cỡ: <p>{review.orderedProductDetail.size}</p>
          </span>
          <span>
            Số lượng: <p>{review.orderedProductDetail.quantity}</p>
          </span>
        </div>
        <p className={cx('review')}>{review.content}</p>
      </div>
    </div>
  );
};

export default memo(ReviewItem);
