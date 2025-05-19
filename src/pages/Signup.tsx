import {useForm} from 'react-hook-form';
import Eye from '../components/icons/Eye';
import Button from '../components/ui/Button';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import AuthLayout from '../components/layouts/AuthLayout';

interface SignupForm {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      const resData = await response.json();

      if (resData.success) {
        navigate('/auth/signin');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join us and start building your second brain today">
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              {...register('firstName', {
                required: 'First name is required',
                minLength: {
                  value: 2,
                  message: 'First name must be at least 2 characters',
                },
              })}
              placeholder="Enter your first name"
              className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
            {errors.firstName && (
              <span className="text-sm text-red-500">{errors.firstName.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
              {...register('lastName', {
                required: 'Last name is required',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters',
                },
              })}
              placeholder="Enter your last name"
              className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
            {errors.lastName && (
              <span className="text-sm text-red-500">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Username</label>
          <input
            {...register('userName', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
            })}
            placeholder="Choose a username"
            className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
          {errors.userName && (
            <span className="text-sm text-red-500">{errors.userName.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
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
          text={isLoading ? 'Creating account...' : 'Create account'}
          size="lg"
        />

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/auth/signin')}
            className="font-medium text-accent-600 hover:text-accent-700">
            Sign in
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}
