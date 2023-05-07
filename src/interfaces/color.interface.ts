import { ISize } from '@/interfaces';

export interface IColor {
  images: string[];
  imageSmall: string;
  imageMedium: string;
  colorName: string;
  sizes: ISize[];
  _id: string;
}
