import { IDistrict } from '../interfaces';

export interface IProvince {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  phone_code: string;
  districts: IDistrict[];
}
