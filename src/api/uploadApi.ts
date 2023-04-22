import { IResponseUpload } from '../models/user.model';
import axiosClient from './axiosClient';

const uploadApi = {
  avatar: (formData: FormData): Promise<IResponseUpload> => {
    const url = 'upload/avatar';
    return axiosClient.post(url, { formData });
  },
  message: (formData: FormData) => {
    const url = 'upload/messages';
    return axiosClient.post(url, { formData });
  },
};
export default uploadApi;
