import { axiosClient } from '@/api';
import { IResponseUpload } from '@/interfaces';

const uploadApi = {
  avatar: (formData: FormData): Promise<IResponseUpload> => {
    const url = 'upload/avatar';
    return axiosClient.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  },
  message: (formData: FormData) => {
    const url = 'upload/messages';
    return axiosClient.post(url, formData);
  },
};
export default uploadApi;
