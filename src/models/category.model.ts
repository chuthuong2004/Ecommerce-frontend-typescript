import { ICatalog, IProduct } from '../models';

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  products: IProduct['_id'][];
  catalog: ICatalog['_id'];
  gender: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
