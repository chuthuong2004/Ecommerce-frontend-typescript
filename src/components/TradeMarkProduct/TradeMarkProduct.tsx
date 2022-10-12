import styles from './TradeMarkProduct.module.scss';
import classNames from 'classnames/bind';
import SlideProduct from '../SlideProduct';
import { IBrand } from '../../models/brand';
const cx = classNames.bind(styles);
type Props = {
    trademarkProduct: IBrand;
    banner?: boolean;
}
const TradeMarkProduct: React.FC<Props> = ({ trademarkProduct, banner = true }) => {
    console.log(trademarkProduct.products);
    return (
        <div className={cx('container')}>
            {banner && <img src={process.env.REACT_APP_API_URL + trademarkProduct.logo} alt="" className={cx('trademark-img')} />}
            <div className={cx('products-container')}>
                <SlideProduct products={trademarkProduct.products} />
            </div>
        </div>
    );
};

export default TradeMarkProduct;
