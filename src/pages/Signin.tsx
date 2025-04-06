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
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const resData = await res.json();
    console.log(resData);
    if (resData.success) {
      setUser(resData.token);
      localStorage.setItem('token', resData.token);
      navigate('/');
    }
  };
  return (
    <div className="from-accent-700 to-accent-900 flex h-dvh items-center justify-center bg-linear-to-b">
      <form
        className="flex w-80 flex-col gap-4 rounded-lg border border-white/20 bg-white/30 p-6 shadow-lg backdrop-blur-md"
        onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-shadow-0 mb-6 text-5xl font-semibold tracking-wide">
          Sign In
        </h1>
        <input
          placeholder="Username"
          className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-hidden backdrop-blur-xs focus:shadow-xs"
          {...register('userName', { required: true })}
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-hidden backdrop-blur-xs focus:shadow-xs"
            {...register('password', { required: true })}
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}>
            <Eye isOpen={showPassword} />
          </button>
        </div>

        <Button
          varient="primary"
          text="Sign in"
          size="lg"
        />

        <p className="text-center text-sm">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/auth/signup')}
            className="text-blue-600 hover:underline">
            Create new account
          </button>
        </p>
      </form>
    </div>
  );
}
