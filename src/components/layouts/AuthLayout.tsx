import {ReactNode} from 'react';
import Logo from '../icons/Logo';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({children, title, subtitle}: AuthLayoutProps) => {
  return (
    <div className="from-accent-50 from-accent-600 to-accent-800 relative inset-0 flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-to-br">
      {/* Background Elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="from-accent-300 to-accent-600 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="from-accent-300 to-accent-600 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl backdrop-blur-xl">
        {/* Left side - Logo and Welcome */}
        <div className="relative flex w-1/2 flex-col items-center justify-center gap-20 px-12 text-white">
          <div className="absolute top-10 flex items-center gap-3 self-start">
            <Logo varient="lg" />
            <h2 className="text-3xl font-bold">Linkcaddy</h2>
          </div>
          <div className="relative self-start">
            <h1 className="mb-4 text-4xl font-bold">{title}</h1>
            <p className="text-start text-white/80 text-sm select-none">{subtitle}</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex w-1/2 flex-col justify-center bg-white p-12">
          <style>
            {`
              input:focus {
                outline: none;
                border-color: transparent;
                box-shadow: 0 0 0 2px rgba(105, 105, 218, 0.2);
              }
            `}
          </style>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
