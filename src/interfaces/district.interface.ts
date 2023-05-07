import { IWard } from '@/interfaces';

export interface IDistrict {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  wards: IWard[];
}
