import { IProduct } from '../models';

export interface ICartItem {
  product: IProduct;
  quantity: number;
  size: string | number;
  color: string;
  image: string;
  _id?: string;
}
