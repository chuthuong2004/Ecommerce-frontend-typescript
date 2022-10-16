import { IColor, IProduct } from './product.model';

export interface IToken {
  accessToken: string;
  refreshToken: string;
}
export interface IFavorite {
  product: IProduct;
  size: string | number;
  color: string;
  colorId: IColor['_id'];
  quantity: number;
  _id: string;
}
enum EGender {
  Male = 'Nam',
  Female = 'Nữ',
  Other = 'Other',
}
export interface IUser {
  _id: string;
  email: string;
  username: string;
  phone?: string;
  isAdmin: boolean;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  gender?: EGender;
  dateOfBirth?: string;
  orders?: string[];
  reviews?: string[];
  favorites?: IFavorite[];
  addresses?: IAddressUser[];
  cart?: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAddress {
  firstName: string;
  lastName?: string;
  phone?: string;
  province?: string;
  district?: string;
  ward?: string;
  address?: string;
  isDefault?: boolean;
  _id?: string;
}
export interface IAddressUser extends IAddress {
  isDefault: boolean;
}
