import { ReactNode } from 'react';

export interface ITabContent {
  _id: string;
  title: string;
  content: string | ReactNode;
}
