'use client';

import { loginData } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { ILogin } from '@/type/type';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILogin>();

  const dispatch = useAppDispatch();

  const router = useRouter();

  const save = (data: ILogin) => {
    console.log(data);
    dispatch(loginData(data))
      .unwrap()
      .then((res) => {
        console.log(res);
        localStorage.token = res.access_token;
        router.push(`profile`);
      })
      .catch((e: any) => {
        console.warn(e);

        setError('password', { message: 'Invalid email or  password!' });
      });

    reset();
  };

  return (
    <div>
      <h2>Login </h2>

      <form onSubmit={handleSubmit(save)}>
        <label>Email</label>
        <input
          placeholder="email"
          {...register('email', { required: 'enter email' })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          {...register('password', { required: 'enter password' })}
        />
        {errors.password && <p >{errors.password.message}</p>}
        <button>save</button>
      </form>
    </div>
  );
}
