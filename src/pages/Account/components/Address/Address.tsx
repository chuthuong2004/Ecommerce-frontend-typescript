import React, { useCallback, useEffect, useState } from 'react';
import styles from './Address.module.scss';
import classNames from 'classnames/bind';
import { EditIcon, LocationEmptyIcon, PlusStrongIcon } from '../../../../components/Icons';
import Button from '../../../../components/Button';
import EmptyContent from '../../../../components/EmptyContent';
import { IAddress, IAddressUser } from '../../../../models/user.model';
import PopUp from '../../../../components/PopUp';
import FormAddress from '../../../../components/FormEdit';
import { useAppSelector } from '../../../../app/hooks';
import { selectAuth } from '../../../../features/authSlice';
import { useAddAddressMutation } from '../../../../services/authApi';
import FormEdit from '../../../../components/FormEdit';
const cx = classNames.bind(styles);
type Props = {};
const Address: React.FC<Props> = ({}) => {
  const { user } = useAppSelector(selectAuth);
  const [isOpenAddAddress, setIsOpenAddAddress] = useState(false);
  const [isOpenEditAddress, setIsOpenEditAddress] = useState(false);
  const [addressEdit, setAddressEdit] = useState<IAddressUser | undefined>(undefined);

  useEffect(() => {
    !isOpenEditAddress && setAddressEdit(undefined);
  }, [isOpenEditAddress]);
  useEffect(() => {
    document.title = 'Địa chỉ - Koga-clothes.shop';
  }, []);
  const handleClickEdit = (address: IAddressUser) => {
    setAddressEdit(address);
    setIsOpenEditAddress(true);
  };

  const handleClosePopupEdit = useCallback(() => setIsOpenEditAddress(false), []);
  const handleClosePopupAdd = useCallback(() => setIsOpenAddAddress(false), []);
  return (
    <div className={cx('account-address')}>
      <PopUp
        trigger={<></>}
        isOpen={isOpenAddAddress}
        handleClose={() => setIsOpenAddAddress(false)}
        position="center"
      >
        <FormEdit
          title="Thêm địa chỉ"
          isOpen={isOpenAddAddress}
          handleClosePopUp={handleClosePopupAdd}
          action="address"
        />
      </PopUp>
      {user?.addresses && user.addresses.length > 0 ? (
        <>
          <div className={cx('add-address')}>
            <Button
              className={cx('btn-add-address')}
              leftIcon={<PlusStrongIcon color="#ffffff" />}
              primary
              onClick={() => setIsOpenAddAddress(true)}
            >
              Thêm Địa chỉ
            </Button>
          </div>
          <div className={cx('addresses')}>
            {user.addresses.map((item: IAddressUser) => (
              <div key={item._id} className={cx('address')}>
                <div className={cx('address-name', item.isDefault && 'default-address')}>
                  <div className={cx('name')}>
                    <span>{`${item.firstName} ${item.lastName}`}</span>
                    <div onClick={() => handleClickEdit(item)} className={cx('edit-icon')}>
                      <EditIcon />
                    </div>
                  </div>
                  <div className={cx('btn-default')}>
                    <Button primary className={cx('btn')}>
                      Địa chỉ mặc định
                    </Button>
                  </div>
                </div>
                <p className={cx('phone')}>{item.phone}</p>
                <p className={cx('delivery-address')}>
                  {`${item.address}, ${item.ward}, ${item.district}, ${item.province}`}
                </p>
              </div>
            ))}
          </div>
          <PopUp
            trigger={<></>}
            isOpen={isOpenEditAddress}
            handleClose={() => setIsOpenEditAddress(false)}
            position="center"
          >
            <FormEdit
              address={addressEdit}
              isOpen={isOpenEditAddress}
              title="Cập nhật địa chỉ"
              handleClosePopUp={handleClosePopupEdit}
              action="address"
            />
          </PopUp>
        </>
      ) : (
        <EmptyContent
          icon={<LocationEmptyIcon />}
          titleBtn="Thêm địa chỉ"
          content1="Không có địa chỉ lưu sẵn"
          content2="Lưu sẵn địa chỉ ở đây để rút ngắn thời gian đặt hàng."
          iconBtn={<PlusStrongIcon color="#ffffff" />}
          onClickButton={() => setIsOpenAddAddress(true)}
        />
      )}
    </div>
  );
};

export default Address;
