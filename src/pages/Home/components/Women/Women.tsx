import classNames from 'classnames/bind';
import styles from './Women.module.scss';
import { brandsWomen, slides } from './dataWomen';
import { catalogs } from '../Men/dataMen';
import { features } from '../Kids/dataKids';
import { IBrand, ICatalog } from '@/models';
import { BlockTitle, CategoryContainer, Feature, Slide, TradeMarkProduct } from '@/components';
import { memo } from 'react';
const cx = classNames.bind(styles);
const Women = () => {
  const categoriesWomen = catalogs.map((catalog: ICatalog) => {
    return {
      ...catalog,
      type: catalog.type.filter((item) => item.productType === 'Nữ'),
    };
  });
  return (
    <div className={cx('container')}>
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
export default memo(Women);
