import { useNavigate } from 'react-router-dom';

function Extension() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (!token) navigate('/auth/signin');
  return (
    <div className="from-accent-700 to-accent-900 flex h-dvh items-center justify-center bg-gradient-to-b">
      <div className="flex w-80 flex-col items-center gap-4 rounded-lg border border-white/20 bg-white/30 p-6 text-center shadow-lg backdrop-blur-md">
        <img
          src="/image.png"
          alt="Brainly"
          className="size-16"
        />
        <h1 className="text-shadow-accent-0 text-3xl font-semibold tracking-wide">
          Successfully Verified!
        </h1>
        <p className="text-base font-light text-slate-700">
          Redirecting to home page...
        </p>
        <p className="text-sm font-light text-slate-600">
          You can close this tab now
        </p>
      </div>
    </div>
  );
}

export default Extension;
