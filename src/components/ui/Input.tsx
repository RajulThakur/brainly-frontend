import { InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

export default function Input({
  name,
  placeholder,
  type,
}: InputHTMLAttributes<HTMLInputElement>) {
  const { register } = useForm();
  return (
    <input
      {...register(name ?? '')}
      type={type}
      id={name}
      placeholder={placeholder}
      className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-none backdrop-blur-sm focus:shadow-sm"
    />
  );
}
