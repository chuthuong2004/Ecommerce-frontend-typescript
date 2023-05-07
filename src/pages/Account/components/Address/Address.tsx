import React, { useCallback, useEffect, useState } from 'react';
import styles from './Address.module.scss';
import classNames from 'classnames/bind';
import { EditIcon, LocationEmptyIcon, PlusStrongIcon } from '../../../../components/Icons';
import { useAppSelector } from '../../../../app/hooks';
import { selectAuth } from '../../../../redux/slices/authSlice';
import { Button, EmptyContent, FormEdit, Helmet, PopUp } from '../../../../components';
import { IAddressUser } from '../../../../interfaces';
const cx = classNames.bind(styles);
type Props = {};
const Address: React.FC<Props> = ({}) => {
  const { user } = useAppSelector(selectAuth);
  const [openPopup, setOpenPopup] = useState<'edit' | 'address' | ''>('');
  const [addressEdit, setAddressEdit] = useState<IAddressUser | undefined>(undefined);

  useEffect(() => {
    openPopup !== 'edit' && setAddressEdit(undefined);
  }, [openPopup]);
  const handleClickEdit = (address: IAddressUser) => {
    setAddressEdit(address);
    setOpenPopup('edit');
  };
  const handleOpenPopupAddress = useCallback(() => setOpenPopup('address'), []);
  const handleClosePopup = useCallback(() => setOpenPopup(''), []);
  return (
    <Helmet title="Địa chỉ www.kogaclothes.shop">
      <div className={cx('account-address')}>
        <PopUp
          trigger={<></>}
          isOpen={openPopup ? true : false}
          handleClose={handleClosePopup}
          position="center"
        >
          {openPopup === 'address' && (
            <FormEdit
              title="Thêm địa chỉ"
              isOpen={openPopup === 'address'}
              handleClosePopUp={handleClosePopup}
              action="address"
            />
          )}
          {openPopup === 'edit' && (
            <FormEdit
              address={addressEdit}
              isOpen={openPopup === 'edit'}
              title="Cập nhật địa chỉ"
              handleClosePopUp={handleClosePopup}
              action="address"
            />
          )}
        </PopUp>
        {user?.addresses && user.addresses.length > 0 ? (
          <>
            <div className={cx('add-address')}>
              <Button
                className={cx('btn-add-address')}
                leftIcon={<PlusStrongIcon color="#ffffff" />}
                primary
                onClick={handleOpenPopupAddress}
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
          </>
        ) : (
          <EmptyContent
            icon={<LocationEmptyIcon />}
            titleBtn="Thêm địa chỉ"
            content1="Không có địa chỉ lưu sẵn"
            content2="Lưu sẵn địa chỉ ở đây để rút ngắn thời gian đặt hàng."
            iconBtn={<PlusStrongIcon color="#ffffff" />}
            onClickButton={handleOpenPopupAddress}
          />
        )}
      </div>
    </Helmet>
  );
};

export default Address;
