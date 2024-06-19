'use client';

import { uploadFileData } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useForm } from 'react-hook-form';

export default function Settings() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();
  const save = (data: any) => {
    console.log(data);

    const { img } = data;
    if (img && img.length) {
      const formData = new FormData();
      formData.append('file', data.img[0]);
      dispatch(uploadFileData(formData))
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch(console.warn);
    }

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <input
          type="file"
          placeholder="select your image..."
          {...register('img')}
        />
        <button>upload</button>
      </form>
    </div>
  );
}
