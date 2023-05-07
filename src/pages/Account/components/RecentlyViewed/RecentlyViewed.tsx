import React, { memo } from 'react';
import styles from './RecentlyViewed.module.scss';
import classNames from 'classnames/bind';
import { products } from './dummyData';
import { IProduct } from '@/models';
import { ProductItem } from '@/components';
const cx = classNames.bind(styles);

const RecentlyViewed = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {products.map((product: IProduct) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default memo(RecentlyViewed);
