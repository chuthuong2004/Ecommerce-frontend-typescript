import { IToken } from '../interfaces';
import { IUser } from '../models';

export interface AuthState {
  user: IUser | null;
  token: IToken | null;
}
