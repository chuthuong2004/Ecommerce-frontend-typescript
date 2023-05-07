import { IGenderCatalog } from '@/interfaces';

export interface ICatalog {
  _id: string;
  name: string;
  categories: string[];
  type: IGenderCatalog[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
