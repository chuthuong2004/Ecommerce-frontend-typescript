import styles from './SocialFooter.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
  FacebookLiteIcon,
  InstagramIcon,
  LogoIcon,
  MomoIcon,
  ReePayIcon,
  ShopeePayIcon,
  VNPayIcon,
  YoutubeIcon,
  ZaloIcon,
} from '@/components/Icons';
import { memo } from 'react';
const cx = classNames.bind(styles);
const socialList = [
  {
    to: '#',
    icon: <FacebookLiteIcon />,
  },
  {
    to: '#',
    icon: <InstagramIcon />,
  },
  {
    to: '#',
    icon: <YoutubeIcon />,
  },
  {
    to: '#',
    icon: <div className={cx('line')}></div>,
  },
  {
    to: '#',
    icon: <MomoIcon />,
  },
  {
    to: '#',
    icon: <ZaloIcon />,
  },
  {
    to: '#',
    icon: <ShopeePayIcon />,
  },
  {
    to: '#',
    icon: <VNPayIcon />,
  },
  {
    to: '#',
    icon: <ReePayIcon />,
  },
];
function SocialFooter() {
  return (
    <div className={cx('social-footer')}>
      <div className={cx('container-fluid')}>
        <div className={cx('logo')}>
          <LogoIcon width="100" height="40" />
        </div>
        <ul className={cx('social-links')}>
          {socialList.map((social, i) => (
            <li key={i}>
              <Link to={social.to}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(SocialFooter);
