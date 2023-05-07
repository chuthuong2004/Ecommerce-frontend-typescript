import React, { useState, useEffect, memo, useCallback } from 'react';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';

import classNames from 'classnames/bind';
import styles from './EditInformation.module.scss';

import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../features/slices/authSlice';
import { useUpdateProfileMutation } from '../../services/authApi';
import { Button, Input, Select } from '..';
import { EGender } from '../../interfaces';

const cx = classNames.bind(styles);

type Props = {
  handleClosePopup: () => void;
};
const EditInformation: React.FC<Props> = ({ handleClosePopup }) => {
  const { user } = useAppSelector(selectAuth);
  const [updateValue, setUpdateValue] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    dateOfBirth: user?.dateOfBirth || '',
    gender: user?.gender || '',
    phone: user?.phone,
    email: user?.email,
  });
  const [errorValue, setErrorValue] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
  });
  const [updateProfile, { isSuccess, isError, isLoading, error }] = useUpdateProfileMutation();

  useEffect(() => {
    if (isSuccess) {
      handleClosePopup();
      toast.success('Cập nhật thông tin cá nhân thành công !');
    }
    if (isError) {
      toast.error((error as any).data.message);
    }
  }, [isLoading]);

  const handleOnChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setUpdateValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleOnBlurInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value ? '' : 'Trường này là bắt buộc !',
    }));
  }, []);

  const handleSubmit = async () => {
    await updateProfile(updateValue);
  };

  return (
    <div className={cx('form')}>
      <div>
        <Input
          label="tên"
          name="lastName"
          value={updateValue?.lastName}
          error={errorValue}
          onChange={handleOnChangeInput}
          onBlur={handleOnBlurInput}
        />
      </div>
      <div>
        <Input
          label="họ"
          name="firstName"
          value={updateValue?.firstName}
          error={errorValue}
          onChange={handleOnChangeInput}
          onBlur={handleOnBlurInput}
        />
      </div>
      <div>
        <Input
          label="sinh nhật"
          name="dateOfBirth"
          type="date"
          placeholder="Nhập ngày tháng năm"
          value={updateValue?.dateOfBirth}
          error={errorValue}
          onChange={handleOnChangeInput}
          onBlur={handleOnBlurInput}
        />
      </div>
      <div>
        <Select name="gender" label="giới tính" onChangeSelected={handleOnChangeInput}>
          <option value="">Chọn giới tính</option>
          <option selected={user?.gender === EGender.Male} value={EGender.Male}>
            Nam
          </option>
          <option selected={user?.gender === EGender.Female} value={EGender.Female}>
            Nữ
          </option>
        </Select>
      </div>
      <div>
        <Input
          disabled
          label="số điện thoại"
          name="phone"
          value={updateValue?.phone}
          error={errorValue}
          onChange={handleOnChangeInput}
          onBlur={handleOnBlurInput}
        />
      </div>
      <div>
        <Input
          disabled
          type="email"
          name="email"
          value={updateValue?.email}
          error={errorValue}
          label="Email"
          onChange={handleOnChangeInput}
          onBlur={handleOnBlurInput}
        />
      </div>
      <div className={cx('action')}>
        <Button onClick={handleSubmit} primary>
          {isLoading ? (
            <ReactLoading type="spinningBubbles" color="#ffffff" width={20} height={20} />
          ) : (
            'Lưu'
          )}
        </Button>
      </div>
    </div>
  );
};

export default memo(EditInformation);
