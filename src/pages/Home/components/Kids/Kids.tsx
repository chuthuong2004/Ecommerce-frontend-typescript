import React from 'react';
import Slide from '../../../../components/Slide/Slide';
import BlockTitle from '../../../../components/BlockTitle/BlockTitle';
import Feature from '../../../../components/Feature/Feature';
import TradeMarkProduct from '../../../../components/TradeMarkProduct/TradeMarkProduct';
import CategoryContainer from '../../../../components/CategoryContainer/CategoryContainer';
import { features, slides, brandsKid } from './dataKids';
import classNames from 'classnames/bind';
import styles from './Kids.module.scss';
import { catalogs } from '../Men/dataMen';
import { ICatalog } from '../../../../models/catalog.model';
import { IBrand } from '../../../../models/brand.model';
const cx = classNames.bind(styles);
const Kids: React.FC = () => {
  const categoriesKids = catalogs.map((catalog: ICatalog) => {
    return {
      ...catalog,
      type: catalog.type.filter((item) => item.productType === 'Trẻ em'),
    };
  });
  return (
    <div>
      <img
        className={cx('img-intro-kid')}
        src="https://file.hstatic.net/1000284478/file/main_10da49a4066343c5ab6d1e0e6fbba2ac.png"
        alt=""
      />
      <BlockTitle title={"This week's"} strong="highlight" />
      <Feature features={features} />
      <BlockTitle title={'Handpicked'} strong="trends" />
      {brandsKid.map((brand: IBrand) => (
        <TradeMarkProduct key={brand._id} data={brand} />
      ))}
      <CategoryContainer categories={categoriesKids} />
    </div>
  );
};

export default Kids;
