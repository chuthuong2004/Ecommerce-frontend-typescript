export interface ISizeGuideSize {
  sizeNumber: number;
  sizeChar: string;
}
export interface ISizeParam {
  name: string;
  value: number[];
}
export interface IGuideSize {
  name: string;
  title: string;
  sizes: ISizeGuideSize[];
  sizeParameters: ISizeParam[];
}
