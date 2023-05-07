import React, { useState, useEffect, memo } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { BiSortAlt2 } from 'react-icons/bi';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Loading from 'react-loading';
import { Button, ProductItem } from '../../components';
import { ESort } from '../../interfaces';
import { IProduct } from '../../models';
import { productApi } from '../../services';
const cx = classNames.bind(styles);
const Search = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query: URLSearchParams = useQuery();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [actionSort, setActionSort] = useState<string>(ESort.LATEST);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchListProduct = async () => {
      try {
        const params = {
          limit: 0,
          page: 1,
          sort: actionSort,
        };
        setLoading(true);
        const res = await productApi.search(query.get('q'), params);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListProduct();
  }, [query.get('q'), actionSort]);

  const renderTippy = (attrs: any) => (
    <div className={cx('menu-more')} tabIndex="-1" {...attrs}>
      <div className={cx('action-more')}>
        <ul className={cx('sort-list')}>
          <li>
            <input
              type="radio"
              name="sort"
              id="popular"
              value={ESort.MOST_POPULAR}
              checked={actionSort === ESort.MOST_POPULAR}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActionSort(e.target.value)}
            />
            <label htmlFor="popular">phổ biến nhất</label>
          </li>
          <li>
            <input
              type="radio"
              name="sort"
              id="new"
              value={ESort.LATEST}
              checked={actionSort === ESort.LATEST}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActionSort(e.target.value)}
            />
            <label htmlFor="new">mới cập nhật</label>
          </li>
          <li>
            <input
              type="radio"
              name="sort"
              id="bestseller"
              value={ESort.BEST_SELLER}
              checked={actionSort === ESort.BEST_SELLER}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActionSort(e.target.value)}
            />
            <label htmlFor="bestseller">bán chạy nhất</label>
          </li>
          <li>
            <input
              type="radio"
              name="sort"
              id="price-decrease"
              value={ESort.PRICE_DECREASE}
              checked={actionSort === ESort.PRICE_DECREASE}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActionSort(e.target.value)}
            />
            <label htmlFor="price-decrease">Giá (cao - thấp)</label>
          </li>
          <li>
            <input
              type="radio"
              name="sort"
              id="price-increase"
              value={ESort.PRICE_INCREASE}
              checked={actionSort === ESort.PRICE_INCREASE}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActionSort(e.target.value)}
            />
            <label htmlFor="price-increase">Giá (thấp - cao)</label>
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <div className={cx('container-fluid')}>
      <div className={cx('title')}>
        <div className={cx('total')}>
          <strong>{products.length}</strong> sản phẩm "{query.get('q')}"
        </div>
        <div className={cx('btn-sort')}>
          <HeadlessTippy
            trigger="click"
            interactive={true}
            placement="bottom-end"
            render={renderTippy}
          >
            <div>
              <Button leftIcon={<BiSortAlt2 className={cx('icon')} />}>
                <span>Sắp xếp</span>
              </Button>
            </div>
          </HeadlessTippy>
          {/* <Tippy
            placement="bottom"
            delay={100}
            content={
              <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                Tài khoản
              </span>
            }
          >
            <Button leftIcon={<BiSortAlt2 className={cx('icon')} />}>
              <span>Sắp xếp</span>
            </Button>
          </Tippy> */}
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className={cx('products')}>
          {products.length > 0 ? (
            products.map((product) => <ProductItem key={product._id} product={product} />)
          ) : (
            <div>Không tìm thấy sản phẩm phù hợp</div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Search);
