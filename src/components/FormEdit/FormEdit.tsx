import { memo } from 'react';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './FormEdit.module.scss';
import { CloseIcon } from '../Icons';
import { EvaluateProduct, EditAddress, EditInformation } from '../';
import { IAddressUser, IOrderItem } from '../../interfaces';
const cx = classNames.bind(styles);

type Props = {
  isOpen: boolean;
  title: string;
  action: 'account' | 'address' | 'evaluate';
  address?: IAddressUser;
  orderItems?: IOrderItem[];
  handleClosePopUp: () => void;
};

const FormEdit: React.FC<Props> = ({
  address,
  isOpen,
  title,
  action = 'address',
  orderItems,
  handleClosePopUp = () => {},
}) => {
  return (
    <div className={cx('container', !isOpen && 'closed')}>
      <div className={cx('form-address')}>
        <div className={cx('form-header')}>
          <h5>{title}</h5>
          <div onClick={handleClosePopUp} className={cx('icon-close')}>
            <CloseIcon />
          </div>
        </div>
        <div className={cx('form-body')}>
          {action === 'address' && (
            <EditAddress address={address} handleClosePopUp={handleClosePopUp} />
          )}
          {action === 'account' && <EditInformation handleClosePopup={handleClosePopUp} />}
          {action === 'evaluate' && (
            <EvaluateProduct orderItems={orderItems} handleClose={handleClosePopUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(FormEdit);
