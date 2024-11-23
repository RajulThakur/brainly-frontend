import { useForm } from 'react-hook-form';
import Eye from '../components/icons/Eye';
import Button from '../components/ui/Button';
import { useState } from 'react';

interface SignupForm {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<SignupForm>();
  const onSubmit = async (data: SignupForm) => {
    console.log(data);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        password: data.password,
      }),
    });
    const resData = await response.json();
    console.log(resData);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-accent-700 to-accent-900">
      <form
        className="flex w-80 flex-col gap-4 rounded-lg border border-white/20 bg-white/30 p-6 shadow-lg backdrop-blur-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-6 text-5xl font-semibold tracking-wide text-shadow-0">
          Sign Up
        </h1>
        <div className="flex gap-2">
          <input
            {...register('firstName', { required: true })}
            placeholder="First Name"
            className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
          />
          <input
            {...register('lastName', { required: true })}
            placeholder="Last Name"
            className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
          />
        </div>
        <input
          {...register('userName', { required: true })}
          type="username"
          placeholder="Username"
          className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
        />

        <div className="relative">
          <input
            {...register('password', { required: true })}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Eye isOpen={showPassword} />
          </button>
        </div>

        <Button varient="primary" text="Sign up" size="lg" />
      </form>
    </div>
  );
}
