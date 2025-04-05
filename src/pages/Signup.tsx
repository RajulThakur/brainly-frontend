import { useForm } from 'react-hook-form';
import Eye from '../components/icons/Eye';
import Button from '../components/ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupForm {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const resData = await response.json();

      if (resData.success) {
        navigate('/auth/signin');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex h-dvh items-center justify-center bg-gradient-to-b from-accent-700 to-accent-900">
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

        <p className="text-center text-sm">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/auth/signin')}
            className="text-blue-600 hover:underline"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
}
