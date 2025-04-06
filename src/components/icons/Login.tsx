export default function Login(props: { varient?: 'sm' | 'md' }) {
  const size = () => {
    switch (props.varient) {
      case 'sm':
        return 'size-3';
      case 'md':
        return 'size-5';
      default:
        return 'size-7';
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${size()}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 17L15 12L10 7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H3"
      />
    </svg>
  );
}
