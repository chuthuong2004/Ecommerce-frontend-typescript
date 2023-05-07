import { IColor } from '@/interfaces';
import { IProduct } from '@/models';

export interface IFavorite {
  product: IProduct;
  size: string | number;
  color: string;
  colorId: IColor['_id'];
  quantity: number;
  _id: string;
}
