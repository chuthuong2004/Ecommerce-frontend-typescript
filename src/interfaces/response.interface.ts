export interface IResponseData<T> {
  message: string;
  data: T;
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

export interface IResponsePaginating<T> {
  countDocument: number;
  resultPerPage: number;
  data: T;
}
