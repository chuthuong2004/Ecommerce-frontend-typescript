import classNames from 'classnames/bind';
import styles from './Women.module.scss';
import Slide from '../../../../components/Slide/Slide';
import BlockTitle from '../../../../components/BlockTitle';
import Feature from '../../../../components/Feature';
import TradeMarkProduct from '../../../../components/TradeMarkProduct';
import { brandsWomen, slides } from './dataWomen';
import CategoryContainer from '../../../../components/CategoryContainer';
import { catalogs } from '../Men/dataMen';
import { features } from '../Kids/dataKids';
import { IBrand } from '../../../../models/brand.model';
import { ICatalog } from '../../../../models/catalog.model';
const cx = classNames.bind(styles);
const Women = () => {
  const categoriesWomen = catalogs.map((catalog: ICatalog) => {
    return {
      ...catalog,
      type: catalog.type.filter((item) => item.productType === 'Nữ'),
    };
  });
  return (
    <div>
      <Slide slides={slides} />
      <img
        className={cx('img-intro-women')}
        src="https://file.hstatic.net/1000284478/file/main__5__1aa6d4e80ce24346b89d98052095556a.png"
        alt=""
      />
      <BlockTitle title={"This week's"} strong="highlight" />
      <Feature features={features} />
      <BlockTitle title={'Handpicked'} strong="trends" />
      {brandsWomen.map((brand: IBrand) => (
        <TradeMarkProduct key={brand._id} data={brand} />
      ))}
      <CategoryContainer categories={categoriesWomen} />
    </div>
  );
};
export default Women;
