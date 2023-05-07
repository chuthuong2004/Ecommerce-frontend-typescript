export interface IAddress {
  firstName: string;
  lastName?: string;
  phone?: string;
  province?: string;
  district?: string;
  ward?: string;
  address?: string;
  _id?: string;
}
export interface IAddressUser extends IAddress {
  isDefault: boolean;
}
