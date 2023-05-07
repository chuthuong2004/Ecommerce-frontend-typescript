import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import { CloseIcon, FilterIcon, MinusIcon, PlusIcon } from '@/components/Icons';
import { useEffect, useState, useRef, memo } from 'react';
import { IBrand, ICategory, IProduct } from '@/models';
import { EGenderType, ESort, IActionFilter } from '@/interfaces';
import { brandApi, categoryApi, productApi } from '@/services';
import { Button, Loading, ProductItem } from '@/components';
const cx = classNames.bind(styles);

interface IFilter {
  sort: boolean;
  gender: boolean;
  brand: boolean;
  category: boolean;
  color: boolean;
  size: boolean;
  price: boolean;
}
const initialActionFilter = {
  sort: '',
  filter: undefined,
};
let scrollTop = 0;
const Collection = () => {
  let { slugCollection } = useParams();
  const [activeFilter, setActiveFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState<IFilter>({
    sort: false,
    gender: false,
    brand: false,
    category: false,
    color: false,
    size: false,
    price: false,
  });
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [actionFilter, setActionFilter] = useState<IActionFilter>(initialActionFilter);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const collectionProductsRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll: EventListener = (e: any) => {
      setIsScrollUp(e.target.documentElement.scrollTop < scrollTop);
      scrollTop = e.target.documentElement.scrollTop;
    };
    const fetchListCategory = async () => {
      try {
        const params = {
          limit: 0,
          page: 1,
          sort: 'name',
        };
        const res = await categoryApi.getAll(params);
        console.log(res);
        if (res) {
          setCategories(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchListBrand = async () => {
      try {
        const params = {
          limit: 0,
          page: 1,
          sort: 'name',
        };
        const res = await brandApi.getAll(params);
        console.log(res);
        if (res) {
          setBrands(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchListCategory();
    fetchListBrand();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const fetchListProduct = async () => {
      try {
        const params = {
          limit: 0,
          page: 1,
          sort: actionFilter.sort,
          ['gender[regex]']: actionFilter.filter?.gender,
        };
        setLoading(true);
        collectionProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
        const res = await productApi.getAll(params);
        console.log(res);
        if (res) {
          let data: IProduct[] = res.data;
          if (actionFilter?.filter?.category && actionFilter.filter.category.length > 0) {
            data = data.filter((product: IProduct) =>
              actionFilter?.filter?.category.includes(product.category._id),
            );
          }
          if (actionFilter.filter?.brand && actionFilter.filter?.brand.length > 0) {
            data = data.filter((product: IProduct) =>
              actionFilter?.filter?.brand.includes(product.brand._id),
            );
          }
          setProducts(data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListProduct();
  }, [actionFilter]);
  useEffect(() => {
    if (openFilter.category) {
      const heightItems = categories.length * 50 + 21; // 80: heigh của 1 item, 30 là phần margin 1 item
      categoryRef.current!.style.height = String(heightItems + 'px');
    } else {
      categoryRef.current!.style.height = '61px';
    }
  }, [openFilter.category]);
  useEffect(() => {
    if (openFilter.brand) {
      const heightItems = Math.ceil(brands.length / 3) * (10 + 50) + 21; // 80: heigh của 1 item, 30 là phần margin 1 item
      brandRef.current!.style.height = String(heightItems + 'px');
    } else {
      brandRef.current!.style.height = '61px';
    }
  }, [openFilter.brand]);
  const handleClearFilter = () => {
    setActionFilter(initialActionFilter);
  };
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
    setActionFilter((prev: IActionFilter) => {
      let newActionFilter: string[] | undefined =
        prev.filter?.[e.target.name === 'category' ? 'category' : 'brand'];
      if (e.target.checked) {
        if (!newActionFilter) newActionFilter = [inputId];
        else {
          newActionFilter?.push(inputId);
        }
      } else {
        newActionFilter = newActionFilter?.filter((item) => item !== inputId);
      }
      return {
        ...prev,
        filter: {
          ...prev.filter,
          [e.target.name === 'category' ? 'category' : 'brand']: newActionFilter,
        },
      } as IActionFilter;
    });
  };
  console.log(actionFilter);
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <img
          src="https://file.hstatic.net/1000284478/collection/col_2e69bd4cd74642d8ab271075aaa8cbe3.png"
          alt=""
          className={cx('collection-banner')}
        />
        <h1 className={cx('collection-title')}>{slugCollection}</h1>
        <div className={cx('collection-desc')}>
          <strong>Teacher's Day</strong>
          <div>18.11 - 20.11</div>
          {/* <div>&nbsp;</div>
          <div>Mai sơn Online tặng bạn</div>
          <div>&nbsp;</div> */}

          <div>
            <strong style={{ fontSize: 18, textTransform: 'uppercase' }}>
              Dành tặng giftset SVR trị giá 499K
            </strong>
          </div>
          <div>&nbsp;</div>
          <div>cho đơn hàng bất kỳ từ 1.590K</div>
          <div>&nbsp;</div>
          <div className={cx('note')}>
            <div>
              <span>Lưu ý:</span>
            </div>
            <div>
              <span>Số lượng quà tặng có hạn</span>
            </div>
            {/* <div>
              <span>Quà tặng sẽ được chuyển tới quý khách sau khi đơn hàng hoàn tất</span>
            </div> */}
            <div>
              <span>Ưu đãi không áp dụng đồng thời với chương trình khác tại Koga Clothes</span>
            </div>
          </div>
        </div>
        <div ref={collectionProductsRef} className={cx('content')}>
          <div className={cx('collection-sidebar', activeFilter && 'active')}>
            {(actionFilter.sort || actionFilter.filter) && (
              <div onClick={handleClearFilter} className={cx('btn-clear-filter')}>
                <Button leftIcon={<CloseIcon height="16" />}>
                  <span className={cx('hide-btn')}>Xóa Lọc</span>
                </Button>
              </div>
            )}
            <div className={cx('sort-by-filter', openFilter.sort && 'open')}>
              <div
                onClick={() => setOpenFilter((prev) => ({ ...prev, sort: !prev.sort }))}
                className={cx(
                  'title-filter',
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                )}
              >
                <span>Sếp xếp</span>
                {openFilter.sort ? <MinusIcon /> : <PlusIcon />}
              </div>
              <div className={cx('content-filter', openFilter.sort && 'open')}>
                <ul className={cx('sort-list', 'd-flex', 'fd-column')}>
                  <li>
                    <input
                      type="radio"
                      name="sort"
                      id="popular"
                      value={ESort.MOST_POPULAR}
                      checked={actionFilter.sort === ESort.MOST_POPULAR}
                      onChange={(e) =>
                        setActionFilter((prev) => ({ ...prev, sort: e.target.value }))
                      }
                    />
                    <label htmlFor="popular">phổ biến nhất</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="sort"
                      id="new"
                      value={ESort.LATEST}
                      checked={actionFilter.sort === ESort.LATEST}
                      onChange={(e) =>
                        setActionFilter((prev) => ({ ...prev, sort: e.target.value }))
                      }
                    />
                    <label htmlFor="new">mới cập nhật</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="sort"
                      id="bestseller"
                      value={ESort.BEST_SELLER}
                      checked={actionFilter.sort === ESort.BEST_SELLER}
                      onChange={(e) =>
                        setActionFilter((prev) => ({ ...prev, sort: e.target.value }))
                      }
                    />
                    <label htmlFor="bestseller">bán chạy nhất</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="sort"
                      id="price-decrease"
                      value={ESort.PRICE_DECREASE}
                      checked={actionFilter.sort === ESort.PRICE_DECREASE}
                      onChange={(e) =>
                        setActionFilter((prev) => ({ ...prev, sort: e.target.value }))
                      }
                    />
                    <label htmlFor="price-decrease">Giá (cao - thấp)</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="sort"
                      id="price-increase"
                      value={ESort.PRICE_INCREASE}
                      checked={actionFilter.sort === ESort.PRICE_INCREASE}
                      onChange={(e) =>
                        setActionFilter((prev) => ({ ...prev, sort: e.target.value }))
                      }
                    />
                    <label htmlFor="price-increase">Giá (thấp - cao)</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx('filter-collection-item-list')}>
              <div className={cx('title-filter')}>
                <span>Bộ lọc</span>
              </div>
              <div
                className={cx(
                  'filter-collection-item',
                  'gender-filter',
                  openFilter.gender && 'open',
                )}
              >
                <div
                  onClick={() => setOpenFilter((prev) => ({ ...prev, gender: !prev.gender }))}
                  className={cx('d-flex', 'justify-content-between', 'align-items-center')}
                >
                  <span>Giới tính</span>
                  {openFilter.gender ? <MinusIcon /> : <PlusIcon />}
                </div>
                <div className={cx('content-filter', openFilter.gender && 'open')}>
                  <div className={cx('filter-container')}>
                    <div className={cx('gender')}>
                      <input
                        type="radio"
                        className={cx('d-none')}
                        value={EGenderType.Woman}
                        id={EGenderType.Woman}
                        name="gender"
                        checked={actionFilter.filter?.gender === EGenderType.Woman}
                        onChange={(e) =>
                          setActionFilter(
                            (prev: IActionFilter) =>
                              ({
                                ...prev,
                                filter: {
                                  ...prev.filter,
                                  gender: e.target.value,
                                },
                              } as IActionFilter),
                          )
                        }
                      />
                      <label htmlFor={EGenderType.Woman} className={cx('gender-sw')}>
                        Nữ
                      </label>
                    </div>
                    <div className={cx('gender')}>
                      <input
                        type="radio"
                        className={cx('d-none')}
                        value={EGenderType.Man}
                        id={EGenderType.Man}
                        name="gender"
                        checked={actionFilter.filter?.gender === EGenderType.Man}
                        onChange={(e) =>
                          setActionFilter(
                            (prev: IActionFilter) =>
                              ({
                                ...prev,
                                filter: { ...prev.filter, gender: e.target.value },
                              } as IActionFilter),
                          )
                        }
                      />
                      <label htmlFor={EGenderType.Man} className={cx('gender-sw')}>
                        Nam
                      </label>
                    </div>
                    <div className={cx('gender')}>
                      <input
                        type="radio"
                        className={cx('d-none')}
                        value={EGenderType.Unisex}
                        id={EGenderType.Unisex}
                        name="gender"
                        checked={actionFilter.filter?.gender === EGenderType.Unisex}
                        onChange={(e) =>
                          setActionFilter(
                            (prev: IActionFilter) =>
                              ({
                                ...prev,
                                filter: { ...prev.filter, gender: e.target.value },
                              } as IActionFilter),
                          )
                        }
                      />
                      <label htmlFor={EGenderType.Unisex} className={cx('gender-sw')}>
                        Unisex
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={brandRef}
                className={cx('filter-collection-item', 'brand-filter', openFilter.brand && 'open')}
              >
                <div
                  onClick={() => setOpenFilter((prev) => ({ ...prev, brand: !prev.brand }))}
                  className={cx('d-flex', 'justify-content-between', 'align-items-center')}
                >
                  <span>Thương hiệu</span>
                  {openFilter.brand ? <MinusIcon /> : <PlusIcon />}
                </div>
                <div className={cx('content-filter', openFilter.brand && 'open')}>
                  <div className={cx('filter-container')}>
                    {brands.map((brand: IBrand) => (
                      <div key={brand._id} className={cx('brand')}>
                        <input
                          type="checkbox"
                          className={cx('d-none')}
                          checked={actionFilter.filter?.brand?.includes(brand._id)}
                          value={brand._id}
                          id={brand._id}
                          name="brand"
                          onChange={(e) => handleChangeCheckbox(e, brand._id)}
                        />
                        <label htmlFor={brand._id} className={cx('brand-label')}>
                          {brand.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                ref={categoryRef}
                className={cx(
                  'filter-collection-item',
                  'type-filter',
                  openFilter.category && 'open',
                )}
              >
                <div
                  onClick={() => setOpenFilter((prev) => ({ ...prev, category: !prev.category }))}
                  className={cx('d-flex', 'justify-content-between', 'align-items-center')}
                >
                  <span>Sản phẩm</span>
                  {openFilter.category ? <MinusIcon /> : <PlusIcon />}
                </div>

                <div className={cx('content-filter', openFilter.category && 'open')}>
                  {categories.map((category: ICategory) => (
                    <div key={category._id} className={cx('type-filter-item')}>
                      <input
                        type="checkbox"
                        checked={actionFilter?.filter?.category?.includes(category._id)}
                        onChange={(e) => handleChangeCheckbox(e, category._id)}
                        id={category._id}
                        name="category"
                      />
                      <label htmlFor={category._id}>{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx('filter-collection-item', 'color-filter')}>
                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                  <span>Màu sắc</span>
                  <PlusIcon />
                </div>
              </div>
              <div className={cx('filter-collection-item', 'size-filter')}>
                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                  <span>Kích cỡ</span>
                  <PlusIcon />
                </div>
              </div>
              <div className={cx('filter-collection-item', 'material-filter')}>
                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                  <span>Giá</span>
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={cx('collection-right', activeFilter && 'active')}>
            <div className={cx('collection-outer-heading', isScrollUp && 'active')}>
              <div className={cx('collection-inner-heading')}>
                <div className={cx('filter-count-total')}>{products.length} sản phẩm</div>
                <div className={cx('btn-filter-collection')}>
                  <Button onClick={() => setActiveFilter(!activeFilter)} leftIcon={<FilterIcon />}>
                    <span className={cx('hide-btn')}>{activeFilter ? 'Hiện' : 'Ẩn'}</span>
                  </Button>
                </div>
              </div>
            </div>
            {loading ? (
              <Loading />
            ) : (
              <div className={cx('collection-list')}>
                {products.length > 0 ? (
                  products.map((product) => <ProductItem key={product._id} product={product} />)
                ) : (
                  <div>Không có sản phẩm nào !</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Collection);
