import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { CloseIcon, LogoIcon, SearchIcon, SearchIconLarge } from '../../../../../components/Icons';
import config from '../../../../../config';
import Input from '../../../../../components/Input';
import SearchInput from '../../../../../components/SearchInput';
import OrderItemProduct from '../../../../../pages/Account/components/Order/components/OrderItemProduct';
import EmptyContent from '../../../../../components/EmptyContent';

const cx = classNames.bind(styles);
type Props = {
  handleClose: any;
};
const product = [
  {
    name: 'Balo unisex phom chữ nhật Classic Monogram',
    price: 4890000,
    discount: 0,
    quantity: 1,
    size: 'F',
    color: 'brown dark',
    image: '/public/products/5582e891-0668-4d89-900e-34704b42c0bd-43brd_3abkm102n_1_large.jpeg',
    brandName: 'MLB',
    product: '63444ca633ba42245738faf9',
    _id: '635e83276bed70a462a93dc7',
  },
  {
    name: 'Giày thể thao Bigball Chunky Monogram',
    price: 3490000,
    discount: 0,
    quantity: 1,
    size: '230',
    color: 'yellow',
    image: '/public/products/d308af7f-95c7-461a-aa78-5a9c2fdda85b-43bgd_3ashcm11n_2_large.jpg',
    brandName: 'MLB',
    product: '6336ad3b0a0af98dcd7d23aa',
    _id: '635e83276bed70a462a93dc8',
  },
  {
    name: 'Giày Sneakers Chunky Low',
    price: 2590000,
    discount: 0,
    quantity: 1,
    size: '230',
    color: 'black',
    image: '/public/products/a88d95b8-ad1d-48ed-a8b7-77d44562b90b-50l_32shu2111_1_large.jpg',
    brandName: 'MLB',
    product: '6336a18e0a0af98dcd7d21be',
    _id: '635e83276bed70a462a93dc9',
  },
];
const Search: React.FC<Props> = ({ handleClose }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(config.routes.search + `?q=${searchValue}`);
    handleClose();
  };
  // const []
  return (
    <div className={cx('container')}>
      <div className={cx('nav-logo')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <LogoIcon height="40" />
        </Link>
      </div>
      <div className={cx('wrapper')}>
        <div className={cx('search-header')}>
          <form onSubmit={handleSubmit} className={cx('nav-input')}>
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              handleClearInput={() => setSearchValue('')}
              loading={false}
            />
          </form>
          <div className={cx('nav-close')}>
            <div onClick={handleClose} className={cx('close')}>
              ĐÓNG
              <CloseIcon width="2rem" height="2rem" />
            </div>
          </div>
        </div>
        <div className={cx('search-bar-result')}>
          <div className={cx('search-bar-result-wrapper', 'hasHistory', 'topSearch')}>
            <div className={cx('search-bar-result-left')}>
              <div className={cx('history')}>
                <div className={cx('header')}>
                  <h5>Tìm kiếm gần đây</h5>
                  <span className={cx('clear-all-search')}>Xóa tất cả</span>
                </div>
                <div className={cx('list-key-search')}>
                  <div className={cx('item-key-search')}>
                    <span>áo đen</span>
                    <span>
                      <CloseIcon />
                    </span>
                  </div>
                  <div className={cx('item-key-search')}>
                    <span>MLB</span>{' '}
                    <span>
                      <CloseIcon />
                    </span>
                  </div>
                  <div className={cx('item-key-search')}>
                    <span>áo hoodie</span>{' '}
                    <span>
                      <CloseIcon />
                    </span>
                  </div>
                  <div className={cx('item-key-search')}>
                    <span>giày tây</span>{' '}
                    <span>
                      <CloseIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className={cx('top-search')}>
                <h5>Được tìm kiếm nhiều</h5>
                <div className={cx('active')}>
                  <span>Quần jogger </span>
                  <span>Áo Hoodie</span>
                  <span>Nón bóng chày</span>
                  <span>Áo thun</span>
                  <span>Giày Chunky</span>
                </div>
              </div>
              {/* <div className={cx('empty-result')}>
                <EmptyContent
                  icon={<SearchIconLarge />}
                  content1="Không có kết quả phù hợp"
                  content2="Hãy thử lại với từ khóa khác hoặc tham khảo các gợi ý nhé."
                  titleBtn=""
                />
              </div> */}
            </div>
            <div className={cx('search-bar-result-right')}>
              <h5>Gợi ý cho bạn</h5>
              <div className={cx('search-bar-product-item')}>
                {product.map((item) => (
                  <div className={cx('product-loop-suggest')}>
                    <img
                      className={cx('product-img')}
                      src={process.env.REACT_APP_API_URL + item.image}
                      alt=""
                    />
                    <div className={cx('product-info')}>
                      <p className={cx('product-brand')}>{item.brandName}</p>
                      <p className={cx('product-title')}>{item.name}</p>
                      <div className={cx('product-price')}>
                        <span className={cx('price')}>
                          {(item.price - item.price * (item.discount / 100)).toLocaleString(
                            'vn-VN',
                          )}
                          ₫
                        </span>
                        <del>{item.price.toLocaleString('vn-VN')}₫</del>
                      </div>
                    </div>
                  </div>
                ))}
                {product.map((item) => (
                  <div className={cx('product-loop-suggest')}>
                    <img
                      className={cx('product-img')}
                      src={process.env.REACT_APP_API_URL + item.image}
                      alt=""
                    />
                    <div className={cx('product-info')}>
                      <p className={cx('product-brand')}>{item.brandName}</p>
                      <p className={cx('product-title')}>{item.name}</p>
                      <div className={cx('product-price')}>
                        <span className={cx('price')}>
                          {(item.price - item.price * (item.discount / 100)).toLocaleString(
                            'vn-VN',
                          )}
                          ₫
                        </span>
                        <del>{item.price.toLocaleString('vn-VN')}₫</del>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
