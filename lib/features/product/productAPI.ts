import { IFilter, IProduct, IProductUpdate } from '@/type/type';
import axios from 'axios';

export const getProductsAPI = async () => {
  const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
  return data;
};

export const getSingleProductAPI = async (id: number) => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/products/' + id,
  );
  return data;
};

export const createProductAPI = async (obj: IProduct) => {
  const { data } = await axios.post(
    'https://api.escuelajs.co/api/v1/products',
    obj,
  );
  return data;
};

export const updateProductByIdAPI = async (id: number, obj: IProductUpdate) => {
  const { data } = await axios.put(
    'https://api.escuelajs.co/api/v1/products/' + id,
    obj,
  );
  return data;
};

export const deleteProductAPI = async (id: number) => {
  const { data } = await axios.delete(
    'https://api.escuelajs.co/api/v1/products/' + id,
  );
  return data;
};

export const filterProductAPI = async (obj: IFilter | any) => {
  let str = '';
  for (let key in obj) {
    if (obj[key] || obj[key] == 0) {
      str += `${key}=${obj[key]}&`;
    }
  }

  str = str.slice(0, -1);
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/products/?' + str,
  );
  return data;
};
