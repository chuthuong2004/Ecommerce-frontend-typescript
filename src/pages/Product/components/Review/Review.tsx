import { ReviewItem } from '@/components';
import React, { memo, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { reviewApi } from '@/services';
import { IReview } from '@/models';
const cx = classNames.bind(styles);
interface Props {
  productId: string;
  rate: number;
}
const Review: React.FC<Props> = ({ productId, rate }) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  useEffect(() => {
    async function getReviewByProduct(productId: string) {
      const response = await reviewApi.getReviewsByProduct(productId);
      console.log(response);
      setReviews(response.data);
    }
    getReviewByProduct(productId);
  }, [productId]);
  console.log(reviews);

  return (
    <div className={cx('container')}>
      <div className={cx('review')}>
        <div className={cx('rating-box')}>
          <p>Đánh giá sản phẩm</p>
          <span className={cx('rating-number')}>{rate.toFixed(1)}</span>
          <div>
            <Rating
              readonly
              initialValue={rate}
              size={30}
              allowHover={false}
              allowFraction={false}
            />
          </div>
        </div>
        <div className={cx('progress-bar-container')}>
          <div className={cx('progress-bar-rating')}>
            <div>
              <Rating
                readonly
                initialValue={5}
                size={30}
                allowHover={false}
                allowFraction={false}
              />
            </div>
            <div className={cx('progress')}>
              <div className={cx('progress-bar')} style={{ width: '63%' }}></div>
            </div>
            <span className={cx('value-text')}>63%</span>
          </div>
          <div className={cx('progress-bar-rating')}>
            <div>
              <Rating
                readonly
                initialValue={4}
                size={30}
                allowHover={false}
                allowFraction={false}
              />
            </div>
            <div className={cx('progress')}>
              <div className={cx('progress-bar')} style={{ width: '29%' }}></div>
            </div>
            <span className={cx('value-text')}>29%</span>
          </div>
          <div className={cx('progress-bar-rating')}>
            <div>
              <Rating
                readonly
                initialValue={3}
                size={30}
                allowHover={false}
                allowFraction={false}
              />
            </div>
            <div className={cx('progress')}>
              <div className={cx('progress-bar')} style={{ width: '6%' }}></div>
            </div>
            <span className={cx('value-text')}>6%</span>
          </div>
          <div className={cx('progress-bar-rating')}>
            <div>
              <Rating
                readonly
                initialValue={2}
                size={30}
                allowHover={false}
                allowFraction={false}
              />
            </div>
            <div className={cx('progress')}>
              <div className={cx('progress-bar')} style={{ width: '3%' }}></div>
            </div>
            <span className={cx('value-text')}>3%</span>
          </div>
          <div className={cx('progress-bar-rating')}>
            <div>
              <Rating
                readonly
                initialValue={1}
                size={30}
                allowHover={false}
                allowFraction={false}
              />
            </div>
            <div className={cx('progress')}>
              <div className={cx('progress-bar')} style={{ width: '1%' }}></div>
            </div>
            <span className={cx('value-text')}>7%</span>
          </div>
        </div>
      </div>
      <div className={cx('list-review')}>
        {reviews.length > 0 ? (
          reviews.map((review) => <ReviewItem key={review._id} review={review} />)
        ) : (
          <div>Chưa có đánh giá nào !</div>
        )}
      </div>
    </div>
  );
};

export default memo(Review);
