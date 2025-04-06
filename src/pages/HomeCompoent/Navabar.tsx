import { Link } from 'react-router-dom';

function Navabar() {
  return (
    <nav className="fixed top-7 right-2/12 left-2/12 flex h-16 items-center justify-between rounded-md bg-slate-800/5 px-7 shadow-sm backdrop-blur-md">
      <Link
        to="/"
        className="flex items-center gap-2">
        <div className="h-8 w-8 overflow-hidden">
          <img
            src="/image.png"
            alt="Brainly"
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="font-bold text-gray-900">Brainly</h1>
      </Link>

      <div className="flex items-center gap-6">
        <a
          href="#features"
          className="text-gray-600 transition-colors hover:text-gray-900">
          Features
        </a>
        <a
          href="#pricing"
          className="text-gray-600 transition-colors hover:text-gray-900">
          Pricing
        </a>
        <a
          href="#extension"
          className="text-gray-600 transition-colors hover:text-gray-900">
          Extension
        </a>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/auth/signin"
          className="rounded-md px-4 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900">
          Login
        </Link>
        <Link
          to="/auth/signup"
          className="rounded-md bg-gray-900 px-4 py-2 font-medium text-white transition-all hover:bg-gray-800">
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Navabar;
