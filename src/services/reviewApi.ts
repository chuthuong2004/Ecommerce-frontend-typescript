import { axiosClient } from '@/api';
import { IInputReview, IResponsePaginating } from '@/interfaces';
import { IReview } from '@/models';

const reviewApi = {
  create: (reviews: IInputReview[]): Promise<{ message: string }> => {
    const url = 'review/new';
    return axiosClient.post(url, { reviews });
  },
  getReviewsByProduct: (productId: string): Promise<IResponsePaginating<IReview[]>> => {
    const url = `reviews/${productId}`;
    return axiosClient.get(url);
  },
};
export default reviewApi;
