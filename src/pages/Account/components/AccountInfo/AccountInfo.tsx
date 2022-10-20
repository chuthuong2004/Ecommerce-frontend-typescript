import Input from '../../../../components/Input';
import styles from './AccountInfo.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../../components/Button';
import React from 'react';
import { IAddress } from '../../../../models/user.model';
const cx = classNames.bind(styles);
type Props = {
    data: IAddress & { email: string, phone: string },
}

const AccountInfo: React.FC<Props> = ({ data }) => {
    console.log(data);

    return (
        <div className={cx('form')}>
            <div>
                <Input disabled label="Tên" value={data.lastName} />
            </div>
            <div>
                <Input disabled label="Họ" value={data.firstName} />
            </div>
            <div>
                <Input disabled label="Sinh nhật" placeholder="Nhập ngày tháng năm" />
            </div>
            <div>
                <Input disabled label="Giới tính" value="" />
            </div>
            <div>
                <Input disabled label="Số điện thoại" value={data.phone} />
            </div>
            <div>
                <Input disabled type="email" value={data.email} label="Email" />
            </div>
            <div className={cx('action')}>
                <Button className={cx('btn')} primary large>
                    Cập nhật thông tin
                </Button>
            </div>
        </div>
    );
};

export default AccountInfo;
