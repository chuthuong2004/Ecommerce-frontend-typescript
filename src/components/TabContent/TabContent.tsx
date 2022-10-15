import React, { useState, ReactNode, memo } from 'react';
import styles from './TabContent.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon } from '../Icons';
const cx = classNames.bind(styles);
type Props = {
    contents: ITabContent[];
}
export interface ITabContent {
    _id: string;
    title: string;
    content: string | ReactNode;
}
const TabContent: React.FC<Props> = ({ contents }) => {
    const [tabSelected, setTabSelected] = useState(contents[0]);
    // console.log(tabSelected);
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
                <div>{tabSelected.content}</div>
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
