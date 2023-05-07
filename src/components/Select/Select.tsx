import React, { ClassAttributes, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import { ArrowDownIcon } from '../Icons';
const cx = classNames.bind(styles);

interface Props
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    ClassAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  onChangeSelected?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
}
const Select: React.FC<Props> = ({
  label,
  name,
  children,
  onChangeSelected = () => {},
  ...passProps
}) => {
  return (
    <div className={cx('container')}>
      <label className={cx('label')} htmlFor="">
        {label}
      </label>
      <div className={cx('wrapper')}>
        <select
          name={name}
          onChange={onChangeSelected}
          className={cx('stored-addresses')}
          id=""
          {...passProps}
        >
          {children}
        </select>
        <div className={cx('arrow-down')}>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default memo(Select);
