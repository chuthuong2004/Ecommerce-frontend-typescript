import { axiosClient } from '@/api';
import { ICategory } from '@/models';

const categoryApi = {
  getAll: (params: any) => {
    const url = 'categories';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<ICategory> => {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },
};
export default categoryApi;
