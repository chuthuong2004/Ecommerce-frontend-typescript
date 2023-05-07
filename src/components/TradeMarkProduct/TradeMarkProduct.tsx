import styles from './TradeMarkProduct.module.scss';
import classNames from 'classnames/bind';
import SlideProduct from '../SlideProduct';
import { memo } from 'react';
import { IBrand } from '@/models';
const cx = classNames.bind(styles);
type Props = {
  data: IBrand;
  banner?: boolean;
};
const TradeMarkProduct: React.FC<Props> = ({ data, banner = true }) => {
  return (
    <div className={cx('container')}>
      {banner && (
        <img
          src={data.image && process.env.REACT_APP_API_URL + data.image}
          alt=""
          className={cx('trademark-img')}
        />
      )}
      <div className={cx('products-container')}>
        <SlideProduct products={data.products.slice(0, 12)} />
      </div>
    </div>
  );
};

export default memo(TradeMarkProduct);
