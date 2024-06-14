import { ICategory } from '@/type/type';
import axios from 'axios';

export const getCategoriesAPI = async () => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/categories',
  );
  return data;
};

export const getSingleCategoryAPI = async (id: number) => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/categories/' + id,
  );
  return data;
};

export const createCategoryAPI = async (obj: ICategory) => {
  const { data } = await axios.post(
    'https://api.escuelajs.co/api/v1/categories',
    obj,
  );
  return data;
};

export const updateCategoryByIdAPI = async (
  id: number,
  obj: { name: string },
) => {
  const { data } = await axios.put(
    'https://api.escuelajs.co/api/v1/categories/' + id,
    obj,
  );
  return data;
};

export const deleteCategoryAPI = async (id: number) => {
  const { data } = await axios.delete(
    'https://api.escuelajs.co/api/v1/categories/' + id,
  );
  return data;
};

