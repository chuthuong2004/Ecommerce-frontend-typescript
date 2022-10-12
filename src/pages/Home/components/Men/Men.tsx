import classNames from 'classnames/bind';
import styles from './Men.module.scss';
import Slide from '../../../../components/Slide';
import BlockTitle from '../../../../components/BlockTitle';
import Feature from '../../../../components/Feature';
import { catalogs, ICatalog, slides, trademarkProducts } from './dataMen';
import TradeMarkProduct from '../../../../components/TradeMarkProduct';
import CategoryContainer from '../../../../components/CategoryContainer';
import { features } from '../Kids/dataKids';
const cx = classNames.bind(styles);
const Men = () => {
    const categoriesMen = catalogs.map((catalog: ICatalog) => {
        return {
            ...catalog,
            type: catalog.type.filter(item => item.productType === 'Nam')
        }
    })
    console.log(categoriesMen);

    return (
        <div>
            <Slide slides={slides} />
            <BlockTitle title={"This week's"} strong="highlight" />
            <Feature features={features} />
            <BlockTitle title={'Handpicked'} strong="trends" />
            {trademarkProducts.map((trademarkProduct) => (
                <TradeMarkProduct key={trademarkProduct._id} trademarkProduct={trademarkProduct} />
            ))}
            <CategoryContainer categories={categoriesMen} />
        </div>
    );
};

export default Men;
