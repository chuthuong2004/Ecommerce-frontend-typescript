import styles from './FooterMain.module.scss';
import classNames from 'classnames/bind';
import { AppStoreImage, GooglePlayImage } from '@/components/Icons';
import { Link } from 'react-router-dom';
import { colLinks } from '@/assets/colLinks';
import { memo } from 'react';
const cx = classNames.bind(styles);
function FooterMain() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('footer-main_left')}>
            {colLinks.map((colLink, i) => (
              <div key={i} className={cx('col-3')}>
                <h4 className={cx('footer-main__menu-title')}>{colLink.title}</h4>
                <ul className={cx('footer-main__menu-links')}>
                  {colLink.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.to}>
                        {link.srcImg ? <img src={link.srcImg} alt={link.content} /> : link.content}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={cx('footer-main_copy-right')}>
            <p>
              © Copyright 2022 KOGA RETAIL MANAGEMENT INTERNATIONAL CORPORATION. All rights
              reserved.
            </p>
            <p>
              Địa chỉ: 520/90/19, QL13, Phường Hiệp Bình Phước, Thành phố Thủ Đức, TP.Hồ Chí Minh |
              MST: 0923175103 | Hotline: 1900 252 538
            </p>
          </div>
        </div>
      </div>
      <div className={cx('footer-main-right')}>
        <h4>Tải ứng dụng tại đây</h4>
        <div className={cx('download-app')}>
          <AppStoreImage className={cx('app')} />
          <GooglePlayImage className={cx('app')} />
        </div>
      </div>
    </>
  );
}

export default memo(FooterMain);
