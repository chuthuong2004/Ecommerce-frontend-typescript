import React, { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EditAddress.module.scss';
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
import provinceApi from '../../api/provinceApi';

const cx = classNames.bind(styles);

const initialAddress: IAddressUser = {
  firstName: '',
  lastName: '',
  address: '',
  ward: '',
  district: '',
  province: '',
  phone: '',
  isDefault: false,
};
type Props = {
  address?: IAddressUser;
  handleClosePopUp: () => void;
};
const EditAddress: React.FC<Props> = ({ address, handleClosePopUp }) => {
  const [errorsInput, setErrorsInput] = useState<IAddressUser>(initialAddress);
  const [currentAddress, setCurrentAddress] = useState<IAddressUser>(address || initialAddress);
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [wards, setWards] = useState<IWard[]>([]);
  const { user } = useAppSelector(selectAuth);

  const [
    addAddress,
    {
      data: dataAddAddress,
      isLoading: isLoadingAddAddress,
      isSuccess: isSuccessAddAddress,
      isError: isErrorAddAddress,
      error: errorAddAddress,
    },
  ] = useAddAddressMutation();
  const [
    updateAddress,
    {
      data: dataUpdateAddress,
      isLoading: isLoadingUpdateAddress,
      isSuccess: isSuccessUpdateAddress,
      isError: isErrorUpdateAddress,
      error: errorUpdateAddress,
    },
  ] = useUpdateAddressMutation();

  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const res = await provinceApi.getAll();
        const dataProvinces = res.data as IProvince[];
        const districts: IDistrict[] | undefined = dataProvinces.find(
          (province: IProvince) => province.name === currentAddress.province,
        )?.districts;
        const wards = districts?.find(
          (district: IDistrict) => district.name === currentAddress.district,
        )?.wards;
        setProvinces(dataProvinces);
        setDistricts(districts || []);
        setWards(wards || []);
      } catch (error) {}
    };
    fetchProvince();
  }, []);
  useEffect(() => {
    address && setCurrentAddress(address);
  }, [address]);
  useEffect(() => {
    if (isSuccessAddAddress) {
      handleClosePopUp();
      setCurrentAddress(initialAddress);
      toast.success(dataAddAddress?.message);
    }
    if (isErrorAddAddress) {
      toast.error((errorAddAddress as any).data.message);
    }
  }, [isLoadingAddAddress]);
  useEffect(() => {
    if (isSuccessUpdateAddress) {
      handleClosePopUp();
      setCurrentAddress(initialAddress);
      toast.success(dataUpdateAddress?.message);
    }
    if (isErrorUpdateAddress) {
      toast.error((errorUpdateAddress as any).data.message);
    }
  }, [isLoadingUpdateAddress]);

  useEffect(() => {
    if (currentAddress.province) {
      const districts: IDistrict[] | undefined = provinces.find(
        (province: IProvince) => province.name === currentAddress.province,
      )?.districts;
      const wards = districts?.find(
        (district: IDistrict) => district.name === currentAddress.district,
      )?.wards;
      setDistricts(districts || []);
      setWards(wards || []);
    }
  }, [currentAddress]);

  const handleBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorsInput({
      ...errorsInput,
      [e.target.name]: e.target.value ? '' : 'Trường này là bắt buộc !',
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCurrentAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveAddress = async () => {
    if (address) {
      await updateAddress({ address: currentAddress, addressId: currentAddress._id || '' });
    } else {
      await addAddress(currentAddress);
    }
  };
  console.log(currentAddress);
  return (
    <div>
      <div>
        <Input
          label="tên"
          error={errorsInput}
          name="lastName"
          value={currentAddress.lastName}
          onBlur={handleBlurInput}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          label="họ"
          error={errorsInput}
          name="firstName"
          value={currentAddress.firstName}
          onBlur={handleBlurInput}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          label="số điện thoại"
          name="phone"
          value={currentAddress.phone}
          onBlur={handleBlurInput}
          onChange={handleChange}
          error={errorsInput}
        />
      </div>
      <div>
        <Input
          label="địa chỉ"
          name="address"
          value={currentAddress.address}
          onBlur={handleBlurInput}
          onChange={handleChange}
          error={errorsInput}
        />
      </div>
      <div>
        <Select label="Tỉnh / thành" name="province" onChangeSelected={handleChange}>
          <option value="">Chọn tỉnh / thành</option>
          {provinces.map((province: IProvince) => (
            <option
              key={province.code}
              value={province.name}
              selected={province.name === currentAddress.province}
            >
              {province.name}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Select label="Quận / huyện" name="district" onChangeSelected={handleChange}>
          <option value="">Chọn quận / huyện</option>
          {districts.map((district: IDistrict) => (
            <option
              key={district.code}
              value={district.name}
              selected={district.name === currentAddress.district}
            >
              {district.name}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Select label="Phường / xã" name="ward" onChangeSelected={handleChange}>
          <option value="">Chọn phường / xã</option>
          {wards.map((ward: IWard) => (
            <option key={ward.code} value={ward.name} selected={ward.name === currentAddress.ward}>
              {ward.name}
            </option>
          ))}
        </Select>
      </div>
      <div className={cx('toggle-switch')}>
        <input
          type="checkbox"
          className={cx('toggle-switch-checkbox')}
          name="isDefault"
          id={currentAddress._id || 'isDefault'}
          checked={currentAddress.isDefault}
          onChange={(e) => setCurrentAddress((prev) => ({ ...prev, isDefault: e.target.checked }))}
        />
        <label
          htmlFor={currentAddress._id || 'isDefault'}
          className={cx('toggle-switch-label')}
        ></label>
        <label htmlFor={currentAddress._id || 'isDefault'}>Địa chỉ mặc định</label>
      </div>
      <div className={cx('form-btn')}>
        <Button onClick={handleSaveAddress} primary>
          {isLoadingUpdateAddress || isLoadingAddAddress ? (
            <ReactLoading type="spinningBubbles" color="#ffffff" width={20} height={20} />
          ) : (
            'Lưu địa chỉ'
          )}
        </Button>
      </div>
    </div>
  );
};

export default EditAddress;
