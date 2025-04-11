import { Link } from 'react-router-dom';

function Navabar() {
  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Extension', href: '#extension' },
  ];

  const authLinks = [
    {
      name: 'Login',
      href: '/auth/signin',
      className: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
    },
    {
      name: 'Sign up',
      href: '/auth/signup',
      className: 'bg-gray-900 font-medium text-white hover:bg-gray-800',
    },
  ];

  return (
    <nav className="fixed top-7 nav:right-2/12 nav:left-2/12 right-1/12 left-1/12 z-50 flex h-16 items-center justify-between rounded-md bg-slate-800/5 px-7 shadow-sm backdrop-blur-md">
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

      <div className="md:flex items-center gap-6 hidden">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-600 transition-colors hover:text-gray-900">
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {authLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`rounded-md px-4 py-2 transition-all ${link.className}`}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navabar;
