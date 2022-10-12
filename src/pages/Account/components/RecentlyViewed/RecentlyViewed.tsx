import React from 'react';
import styles from './RecentlyViewed.module.scss';
import classNames from 'classnames/bind';
import { products } from '../../../Collection/dataCollections';
import { IProduct } from '../../../../models/product';
import ProductItem from '../../../../components/ProductItem';




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

export default RecentlyViewed;
