import {useForm} from 'react-hook-form';
import Eye from '../components/icons/Eye';
import Button from '../components/ui/Button';
import {useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router';
import AuthLayout from '../components/layouts/AuthLayout';

interface SigninForm {
  userName: string;
  password: string;
}

export default function Signin() {
  const {setUser} = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm<SigninForm>();

  const onSubmit = async (data: SigninForm) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/signin`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      const resData = await res.json();
      if (resData.success) {
        setUser(resData.token);
        localStorage.setItem('token', resData.token);
        navigate('/');
      }
    } catch (error) {
      console.error('Signin failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to your account and explore your second brain">
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
              {...register('userName', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
              })}
            />
            {errors.userName && (
              <span className="text-sm text-red-500">{errors.userName.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}>
                <Eye isOpen={showPassword} />
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          <Button
            varient="primary"
            text={isLoading ? 'Signing in...' : 'Sign in'}
            size="lg"
          />

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/auth/signup')}
              className="font-medium text-accent-600 hover:text-accent-700">
              Create new account
            </button>
          </p>
        </form>
    </AuthLayout>
  );
}
