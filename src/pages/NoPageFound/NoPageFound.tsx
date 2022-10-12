import classNames from 'classnames/bind';
import React from 'react'
import { Link } from 'react-router-dom';
import config from '../../config';
import RecommendedProduct from './../../components/RecommendedProduct/RecommendedProduct';
import styles from './NoPageFound.module.scss'
const cx = classNames.bind(styles);
const NoPageFound = () => {
  return (
    <>
      <div className={cx('no-page')}>
        <p>Opps, trang bạn đang tìm kiếm không tồn tại !</p>
        <p>Nhấn vào <Link to={config.routes.home}>đây</Link> để tiếp tục mua hàng</p>
      </div>
      <RecommendedProduct />
    </>
  )
}

export default NoPageFound
