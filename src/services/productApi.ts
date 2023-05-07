import { IResponseData } from '../interfaces';
import { IProduct } from '../models';
import axiosClient from './axiosClient';

const productApi = {
  getAll: (params: any) => {
    const url = 'products';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<IProduct> => {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },
  getBySlug: (slug: string): Promise<IProduct> => {
    const url = `product/slug/${slug}`;
    return axiosClient.get(url);
  },
  addFavorite: (productId: string): Promise<IResponseData<IProduct>> => {
    const url = `products/favorite/add/${productId}`;
    return axiosClient.put(url);
  },
  removeFavorite: (productId: string): Promise<IResponseData<IProduct>> => {
    const url = `products/favorite/remove/${productId}`;
    return axiosClient.put(url);
  },
  search: (search: string | null, params: any): Promise<{ data: IProduct[] }> => {
    const url = `products/search?search=${search}`;
    return axiosClient.get(url, { params });
  },
};
export default productApi;
