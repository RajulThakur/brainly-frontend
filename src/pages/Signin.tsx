import { useForm } from 'react-hook-form';
import Eye from '../components/icons/Eye';
import Button from '../components/ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface SigninForm {
  userName: string;
  password: string;
}

export default function Signin() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<SigninForm>();

  const onSubmit = async (data: SigninForm) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const resData = await res.json();
    if (resData.success) {
      setUser(resData.id);
      navigate('/');
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-accent-700 to-accent-900">
      <form
        className="flex w-80 flex-col gap-4 rounded-lg border border-white/20 bg-white/30 p-6 shadow-lg backdrop-blur-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-6 text-5xl font-semibold tracking-wide text-shadow-0">
          Sign In
        </h1>
        <input
          placeholder="Username"
          className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
          {...register('userName', { required: true })}
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
            {...register('password', { required: true })}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Eye isOpen={showPassword} />
          </button>
        </div>

        <Button varient="primary" text="Sign in" size="lg" />
      </form>
    </div>
  );
}