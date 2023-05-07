import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MenuSub.module.scss';
import { ISubLink } from '@/assets/headerLinks';
import { memo } from 'react';
const cx = classNames.bind(styles);
type Props = {
  subLinks: ISubLink[];
};
const MenuSub: React.FC<Props> = ({ subLinks }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('menu-sub')}>
        <div className={cx('menu-sub-lv2')}>
          {subLinks.map((subLink: ISubLink) => (
            <ul key={subLink._id}>
              <h3 className={cx('title')}>{subLink.title}</h3>
              {subLink.links.map((link) => (
                <li key={link._id}>
                  <Link to={link.to}>{link.content}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MenuSub);
