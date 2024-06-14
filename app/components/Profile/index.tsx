'use client';

import {
  getCategoriesData,
  selectCategories,
} from '@/lib/features/category/categorySlice';
import {
  getProductsData,
  selectProduct,
  selectProducts,
} from '@/lib/features/product/productSlice';
import { profileData, selelctUser } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const user = useAppSelector(selelctUser);
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(profileData())
      .unwrap()
      .catch((e) => router.push('/'));
    dispatch(getProductsData());
    dispatch(getCategoriesData());
  }, []);

  console.log(user, products, categories);

  return (
    <div>
      <div className='user'>
        <h2>Profile </h2>

        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.password}</p>
        <p>{user.role}</p>
        <img src={user.avatar} width={200} />
      </div>

      <div className='category'>
          <select>
            {
              categories.map((elm) => {
                return(
                <option key={elm.id} value={elm.id}>
                  {elm.name}
                </option>
                )
              })
            }
          </select>
      </div>

      <div className='product'>
        {
          products.map((elm) => {
            return(
              <div key={elm.id}>
                  <p>{elm.title}</p>
                  <p>{elm.description}</p>
                  <Link href={'/product/'+elm.id}>See</Link>
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
}
