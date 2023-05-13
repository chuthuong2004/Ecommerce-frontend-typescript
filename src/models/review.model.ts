export interface IReview {
  orderedProductDetail: IOrderedProductDetail;
  _id: string;
  user: string;
  product: string;
  content: string;
  star: number;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IOrderedProductDetail {
  size: string | number;
  color: string;
  quantity: number;
}
