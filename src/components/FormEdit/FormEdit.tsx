import classNames from 'classnames/bind';
import styles from './FormEdit.module.scss';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { CloseIcon } from '../Icons';
import { toast } from 'react-toastify';
import { IAddressUser, IDistrict, IProvince, IWard } from '../../models/user.model';
import { useAppSelector } from '../../app/hooks';
import { memo } from 'react';
import { selectAuth } from '../../features/authSlice';
import { useAddAddressMutation, useUpdateAddressMutation } from '../../services/authApi';
import ReactLoading from 'react-loading';
import EditInformation from '../EditInformation';
import EditAddress from '../EditAddress';
const cx = classNames.bind(styles);

type Props = {
  isOpen: boolean;
  title: string;
  address?: IAddressUser;
  handleClosePopUp: () => void;
  editAccount?: boolean;
};

const FormEdit: React.FC<Props> = ({
  address,
  isOpen,
  title,
  editAccount = false,
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
          {editAccount ? (
            <EditInformation handleClosePopup={handleClosePopUp} />
          ) : (
            <EditAddress address={address} handleClosePopUp={handleClosePopUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(FormEdit);
