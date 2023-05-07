import classNames from 'classnames/bind';
import styles from './Men.module.scss';
import { catalogs, slides, brandsMen } from './dataMen';
import { features } from '../Kids/dataKids';
import { IBrand, ICatalog } from '@/models';
import { BlockTitle, CategoryContainer, Feature, Slide, TradeMarkProduct } from '@/components';
import { memo } from 'react';
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

export default memo(Men);
