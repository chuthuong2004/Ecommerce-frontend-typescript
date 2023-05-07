import styles from './AccountInfo.module.scss';
import classNames from 'classnames/bind';
import React, { memo, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { selectAuth } from '../../../../redux/slices/authSlice';
import moment from 'moment';
import { Button, FormEdit, Input, PopUp } from '../../../../components';
const cx = classNames.bind(styles);
type Props = {};

const AccountInfo: React.FC<Props> = ({}) => {
  const { user } = useAppSelector(selectAuth);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <div className={cx('form')}>
      <div>
        <Input disabled label="tên" value={user?.lastName} />
      </div>
      <div>
        <Input disabled label="họ" value={user?.firstName} />
      </div>
      <div>
        <Input
          disabled
          label="sinh nhật"
          placeholder="Nhập ngày tháng năm"
          value={user?.dateOfBirth ? moment(user.dateOfBirth).format('DD/MM/YYYY') : ''}
        />
      </div>
      <div>
        <Input disabled label="giới tính" placeholder="Chọn giới tính" value={user?.gender} />
      </div>
      <div>
        <Input disabled label="số điện thoại" value={user?.phone} />
      </div>
      <div>
        <Input disabled type="email" value={user?.email} label="Email" />
      </div>
      <div className={cx('action')}>
        <PopUp
          trigger={
            <Button onClick={() => setIsOpenPopup(true)} className={cx('btn')} primary large>
              Cập nhật thông tin
            </Button>
          }
          isOpen={isOpenPopup}
          handleClose={() => setIsOpenPopup(false)}
          position="center"
        >
          <FormEdit
            isOpen={isOpenPopup}
            title="Cập nhật thông tin"
            handleClosePopUp={() => setIsOpenPopup(false)}
            action="account"
          />
        </PopUp>
      </div>
    </div>
  );
};

export default memo(AccountInfo);
