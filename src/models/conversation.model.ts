import { IUser } from '@/models';

export interface IConversation {
  _id: string;
  members: IUser[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
