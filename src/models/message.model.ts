import { IUser } from '@/models';

export interface IMessage {
  _id: string;
  conversation: string;
  sender: IUser;
  text: string;
  images?: string[];
  seen: boolean;
  createdAt: string;
  updatedAt: string;
  seenAt?: string;
  __v: number;
  isLoading?: boolean;
}
