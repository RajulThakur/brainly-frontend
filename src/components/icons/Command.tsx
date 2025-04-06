import { IconProps, size } from './Types';

export default function Command({ varient }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${size(varient)}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
      />
    </svg>
  );
}
