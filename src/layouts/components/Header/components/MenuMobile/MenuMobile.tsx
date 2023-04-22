import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuMobile.module.scss';
import { TfiClose } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';

import { IoIosArrowBack, IoIosArrowForward, IoMdSettings } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { LogoIcon } from '../../../../../components/Icons';
import { headerLinks } from '../../../../../assets/headerLinks';
const cx = classNames.bind(styles);

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}
const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div className={cx('modal-menu', !isOpen && 'closed')}>
        <div className={cx('modal-content')}>
          <div className={cx('modal-header')}>
            <div className={cx('modal-logo')}>
              <LogoIcon height="40" />
            </div>
            <div onClick={() => onClose()} className={cx('modal-icon')}>
              <TfiClose />
            </div>
          </div>
          <div className={cx('modal-body')}>
            <div className={cx('content')}>
              {headerLinks.map((link, i) => (
                <div className={cx(link.class)}>
                  <Link to={link.to}>{link.title}</Link>
                </div>
              ))}
              <div className={cx('link')}>
                <div className={cx('nav-link', 'setting')}>
                  <div className={cx('nav-link__icons')}>
                    <IoMdSettings />
                  </div>
                  <div className={cx('nav-link__title')}>Cài đặt</div>
                  <div className={cx('nav-link__icons', 'setting-icon')}>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className={cx('social-share')}>
                <h3>Tìm với chúng tôi</h3>
                <ul className={cx('social-icon')}>
                  <li>
                    <span>
                      <FiFacebook />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FiTwitter />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FiInstagram />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FiLinkedin />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MenuMobile);
