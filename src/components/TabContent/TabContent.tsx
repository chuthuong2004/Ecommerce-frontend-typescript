import React, { useState, ReactNode, memo, useEffect } from 'react';
import styles from './TabContent.module.scss';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import { ArrowDownIcon } from '../Icons';
import { ITabContent } from '../../interfaces';
const cx = classNames.bind(styles);

type Props = {
  contents: ITabContent[];
};

const TabContent: React.FC<Props> = ({ contents }) => {
  const [tabSelected, setTabSelected] = useState(contents[0]);
  useEffect(() => {
    setTabSelected(contents[0]);
  }, [contents]);

  return (
    <div>
      <div className={cx('tab-header')}>
        <div className={cx('nav-tabs')}>
          {contents.map((navItem) => (
            <div
              key={navItem._id}
              onClick={() => setTabSelected(navItem)}
              className={cx('nav-item', tabSelected.content === navItem.content && 'active')}
            >
              {navItem.title}
            </div>
          ))}
          <div className={cx('nav-line')}></div>
        </div>
      </div>
      <div className={cx('tab-content')}>
        {typeof tabSelected.content === 'string' ? (
          <div>{parse(tabSelected.content)}</div>
        ) : (
          <div>{tabSelected.content}</div>
        )}
      </div>
      <div className={cx('product-desc__show-more', 'd-none')}>
        <span>
          Xem toàn bộ <ArrowDownIcon />
        </span>
      </div>
    </div>
  );
};

export default memo(TabContent);
