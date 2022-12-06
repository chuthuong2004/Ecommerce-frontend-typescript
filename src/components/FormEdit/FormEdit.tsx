import classNames from 'classnames/bind';
import styles from './FormEdit.module.scss';
import React from 'react';
import { CloseIcon } from '../Icons';
import { IAddressUser } from '../../models/user.model';
import { memo } from 'react';
import EditInformation from '../EditInformation';
import EditAddress from '../EditAddress';
import EvaluateProduct from '../EvaluateProduct';
import { IOrderItem } from '../../models/order.model';
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
