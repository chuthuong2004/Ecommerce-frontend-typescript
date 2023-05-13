import { axiosClient } from '@/api';
import { IResponsePaginating } from '@/interfaces';
import { IBrand } from '@/models';

const brandApi = {
  getAll: (params: any): Promise<IResponsePaginating<IBrand[]>> => {
    console.log(params);

    const url = 'brands';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<IBrand> => {
    const url = `brand/${id}`;
    return axiosClient.get(url);
  },
};
export default brandApi;
