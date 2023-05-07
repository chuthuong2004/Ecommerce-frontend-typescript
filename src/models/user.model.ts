import { IAddressUser, IFavorite } from '../interfaces';

export interface IUser {
  _id: string;
  email: string;
  username: string;
  phone?: string;
  isAdmin: boolean;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: string;
  orders?: string[];
  reviews?: string[];
  favorites?: IFavorite[];
  addresses?: IAddressUser[];
  cart?: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
  loggedOut?: boolean;
  loggedOutAt?: string;
}
