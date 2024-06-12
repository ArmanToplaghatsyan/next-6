'use client';

import { getUsersData, selelctUsers } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Users() {
  const users = useAppSelector(selelctUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <table border={3}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elm) => {
            return (
              <tr>
                <td>{elm.name}</td>
                <td>{elm.email}</td>
                <td>{elm.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
