import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BlockTitle.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
const cx = classNames.bind(styles);


export type Props = {
    title: string;
    strong: string;
}
const BlockTitle: React.FC<Props> = ({ title, strong }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('block-title')}>{title}</div>
            <strong>{strong}</strong>
        </div>
    );
};
export default BlockTitle;
