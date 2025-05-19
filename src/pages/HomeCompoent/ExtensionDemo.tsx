import Document from '../../components/icons/Document';
import Links from '../../components/icons/Links';
import Login from '../../components/icons/Login';
import Tweet from '../../components/icons/Tweet';
import Video from '../../components/icons/Video';

const categories = [
  {label: 'Tweets', icon: <Tweet />},
  {label: 'Links', icon: <Links />},
  {label: 'Videos', icon: <Video />},
  {label: 'Documents', icon: <Document />},
];

export default function ExtensionDemo() {
  return (
    <div
      className="w-[370px] rounded-2xl p-5 shadow-xl"
      style={{background: 'linear-gradient(135deg, #e9e4f7 0%, #d1c4e9 100%)'}}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/image.svg"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold text-gray-900">Linkcaddy</span>
        </div>
        <Login />
      </div>

      {/* Input */}
      <div className="mb-7 flex items-center rounded-xl border gap-2.5 border-gray-200 bg-white px-4 py-3 shadow-sm">
        <Links varient='xl'/>
        <span className="text-base text-gray-700 select-all">
          linkcaddy.vercel.app
        </span>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex flex-col items-center gap-1">
            {cat.icon}
            <span className="mt-1 text-sm font-medium text-gray-900">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
