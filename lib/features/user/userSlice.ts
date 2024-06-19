import { ILogin, IUser } from '@/type/type';
import { asyncThunkCreator, createSlice } from '@reduxjs/toolkit';
import {
  createUserAPI,
  getUserAPI,
  getUserByIdAPI,
  loginAPI,
  profileAPI,
  updateUserAPI,
  uploadFile,
} from './userAPI';
import { createAppSlice } from '@/lib/createAppSlice';

const initialState: { users: IUser[]; user: IUser } = {
  users: [],
  user: {} as IUser,
};

export const userSlice = createAppSlice({
  name: 'user Slice',
  initialState,
  reducers: (create) => ({
    getUsersData: create.asyncThunk(
      async () => {
        return await getUserAPI();
      },
      {
        fulfilled: (state, action) => {
          state.users = action.payload;
        },
      },
    ),
    getUsersByIdData: create.asyncThunk(
      async (id: number) => {
        return await getUserByIdAPI(id);
      },
      {
        fulfilled: (state, action) => {
          state.user = action.payload;
        },
      },
    ),
    createUserData: create.asyncThunk(async (users: any) => {
      return await createUserAPI(users);
    }),
    updateUserData: create.asyncThunk(
      async ({ id, user }: { id: number; user: IUser }) => {
        return await updateUserAPI(id, user);
      },
      {
        fulfilled: (state, action) => {
          state.user = action.payload;
        },
      },
    ),
    loginData: create.asyncThunk(async (user: ILogin) => {
      return await loginAPI(user);
    }),
    profileData: create.asyncThunk(
      async () => {
        return await profileAPI();
      },
      {
        fulfilled: (state, action) => {
          state.user = action.payload;
        },
      },
    ),
    uploadFileData: create.asyncThunk(async (file: FormData) => {
      return await uploadFile(file);
    }),
  }),
  selectors: {
    selelctUser: (state) => state.user,
    selelctUsers: (state) => state.users,
  },
});

export const {
  getUsersByIdData,
  getUsersData,
  createUserData,
  updateUserData,
  loginData,
  profileData,
  uploadFileData,
} = userSlice.actions;
export const { selelctUser, selelctUsers } = userSlice.selectors;
