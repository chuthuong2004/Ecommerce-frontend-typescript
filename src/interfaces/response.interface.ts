import { IProduct } from '@/models';

export interface IResponseData<Type> {
  message: string;
  data: Type;
}
export interface FileResponse {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface IResponseUpload {
  message: string;
  file: FileResponse;
}

export interface IResponseProducts {
  countDocument: number;
  resultPerPage: number;
  data: IProduct[];
}
