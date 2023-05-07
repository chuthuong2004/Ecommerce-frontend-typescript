import { ICartItem } from '@/interfaces';
import { IUser } from '@/models';

export interface ICart {
  _id: string;
  user: IUser;
  cartItems: ICartItem[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
