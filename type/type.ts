export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  categoryId: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IProductUpdate {
  title: string;
  price: number;
}

export interface IFilter {
  title: string;
  price_min: number;
  price_max: number;
  categoryId: number;
  offset: number;
  limit: number;
}
