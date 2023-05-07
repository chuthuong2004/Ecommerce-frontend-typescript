import { IUser } from '../models';
import { IAddress, IOrderItem } from '../interfaces';

export interface IOrder {
  _id: string;
  orderId: string;
  user: IUser;
  orderItems: IOrderItem[];
  deliveryInformation: IAddress;
  taxPrice: number;
  shippingPrice: number;
  orderStatus: string;
  totalPrice: number;
  provisionalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  shippingAt?: string;
  deliveryAt?: string;
  deliveredAt?: string;
  canceledAt?: string;
  canceledReason?: string;
  isEvaluated: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
