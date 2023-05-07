import { IColor } from '../interfaces';
import { IBrand, ICategory } from '../models';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  discount: number;
  category: ICategory;
  likeCount: number;
  quantitySold: number;
  favorites: string[];
  rate: number;
  keywords: string[];
  reviews: string[];
  colors: IColor[];
  brand: Omit<IBrand, 'products'>;
  gender: string;
  preserveInformation?: string;
  deliveryReturnPolicy?: string;
  slug: string;
  createdAt: string;
  deleted: boolean;
  updatedAt: string;
  _id: string;
  __v: number;
  deletedAt?: string;
}
