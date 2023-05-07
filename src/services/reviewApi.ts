import { axiosClient } from '@/api';
import { IInputReview } from '@/interfaces';

const reviewApi = {
  create: (reviews: IInputReview[]): Promise<{ message: string }> => {
    const url = 'review/new';
    return axiosClient.post(url, { reviews });
  },
};
export default reviewApi;
