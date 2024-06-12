'use client';

import { profileData, selelctUser } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const user = useAppSelector(selelctUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(profileData()).unwrap().catch((e) => router.push('/'));
  }, []);

  console.log(user);

  return (
    <div>
      <h2>Profile </h2>

      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
      <p>{user.role}</p>
      <img src={user.avatar} width={200}/>
    </div>
  );
}
