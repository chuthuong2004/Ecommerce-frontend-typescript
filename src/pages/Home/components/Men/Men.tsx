import classNames from 'classnames/bind';
import styles from './Men.module.scss';
import Slide from '../../../../components/Slide';
import BlockTitle from '../../../../components/BlockTitle';
import Feature from '../../../../components/Feature';
import { catalogs, slides, brandsMen } from './dataMen';
import TradeMarkProduct from '../../../../components/TradeMarkProduct';
import CategoryContainer from '../../../../components/CategoryContainer';
import { features } from '../Kids/dataKids';
import { IBrand } from '../../../../models/brand.model';
import { ICatalog } from '../../../../models/catalog.model';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../../models/product.model';
import productApi from '../../../../api/productApi';
const cx = classNames.bind(styles);
const Men = () => {
  // const [productOfMlb, setProductOfMlb] = useState<IProduct[]>([])
  // useEffect(() =>{
  //   const fetchProducts = async() => {
  //     try {
  //       const res = await productApi.getAll({})
  //       if(res.data.length > 0) {
  //         setProductOfMlb(res.data.filter((product: IProduct) => product.brand.name === 'MLB'));
  //       }
  //     } catch (error) {

  //     }
  //   }
  //   fetchProducts()
  // }, [])
  const categoriesMen = catalogs.map((catalog: ICatalog) => {
    return {
      ...catalog,
      type: catalog.type.filter((item) => item.productType === 'Nam'),
    };
  });
  console.log(categoriesMen);

  return (
    <div>
      <Slide slides={slides} />
      <BlockTitle title={"This week's"} strong="highlight" />
      <Feature features={features} />
      <BlockTitle title={'Handpicked'} strong="trends" />
      {brandsMen.map((brand: IBrand) => (
        <TradeMarkProduct key={brand._id} data={brand} />
      ))}
      <CategoryContainer categories={categoriesMen} />
    </div>
  );
};

export default Men;
