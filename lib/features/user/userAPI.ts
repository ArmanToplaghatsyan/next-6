import { ILogin, IUser } from '@/type/type';
import axios from 'axios';

export const getUserAPI = async () => {
  const { data } = await axios.get('https://api.escuelajs.co/api/v1/users');
  return data;
};

export const getUserByIdAPI = async (id: number) => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/users/' + id,
  );
  return data;
};

export const createUserAPI = async (user: IUser) => {
  const { data } = await axios.post(
    ' https://api.escuelajs.co/api/v1/users/',
    user,
  );
  return data;
};

export const updateUserAPI = async (id: number, user: IUser) => {
  const { data } = await axios.put(
    'https://api.escuelajs.co/api/v1/users/' + id,
    user,
  );
  return data;
};

export const loginAPI = async (user: ILogin) => {
  const { data } = await axios.post(
    ' https://api.escuelajs.co/api/v1/auth/login',
    user,
  );

  return data;
};

export const profileAPI = async () => {
  const token = localStorage.token;
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/auth/profile',
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return data;
};

export const uploadFile = async (file: FormData) => {
  const { data } = await axios.post(
    'https://api.escuelajs.co/api/v1/files/upload', file
  );

  return data;
};
