import { ReactNode } from 'react';
import {
    HelpIcon,
    LocationActiveIcon,
    LocationIcon,
    LogoutIcon,
    MailIcon,
    RoundedIcon,
    TruckActiveIcon,
    TruckIcon,
    UserActiveIcon,
    UserIcon,
    ValiIcon,
} from '../components/Icons';
import config from '../config';

export type SideBarItem = {
    icon: ReactNode;
    iconActive: ReactNode;
    title: string;
    to: string;
    endPath?: boolean;
};
export const sidebars: Array<SideBarItem> = [
    {
        icon: <UserIcon />,
        iconActive: <UserActiveIcon />,
        title: 'Thông tin cá nhân',
        to: config.routes.account,
        endPath: true,
    },
    {
        icon: <TruckIcon />,
        iconActive: <TruckActiveIcon />,
        title: 'Đơn hàng',
        to: config.routes.order,
        endPath: false,
    },
    {
        icon: <LocationIcon />,
        iconActive: <LocationActiveIcon />,
        title: 'Địa chỉ',
        to: config.routes.address,
        endPath: true,
    },
    {
        icon: <RoundedIcon />,
        iconActive: <RoundedIcon />,
        title: 'Đã xem gần đây',
        to: config.routes.recentlyViewed,
        endPath: true,
    },
    {
        icon: <MailIcon />,
        iconActive: <MailIcon />,
        title: 'Đăng kí nhận thông báo',
        to: config.routes.receiveNotify,
        endPath: true,
    },
    {
        icon: <HelpIcon />,
        iconActive: <HelpIcon />,
        title: 'Trợ giúp',
        to: config.routes.help,
    },
    {
        icon: <ValiIcon />,
        iconActive: <ValiIcon />,
        title: 'Trở thành đối tác B2B',
        to: config.routes.partner,
    },
    {
        icon: <LogoutIcon />,
        iconActive: <LogoutIcon />,
        title: 'Đăng xuất',
        to: '#',
    },
];
