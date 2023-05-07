import { IInputReview } from '../interfaces';
import axiosClient from './axiosClient';

const reviewApi = {
  create: (reviews: IInputReview[]): Promise<{ message: string }> => {
    const url = 'review/new';
    return axiosClient.post(url, { reviews });
  },
};
export default reviewApi;
