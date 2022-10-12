import { IProduct } from '../models/product';
import axiosClient from './axiosClient';

const productApi = {
    getAll: (params: any) => {
        console.log(params);

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
};
export default productApi;
