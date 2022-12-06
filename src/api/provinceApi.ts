import axios from 'axios';

const provinceApi = {
  getAll: (): Promise<any> => {
    const url = 'https://provinces.open-api.vn/api/?depth=3';
    return axios.get(url);
  },
};
export default provinceApi;
