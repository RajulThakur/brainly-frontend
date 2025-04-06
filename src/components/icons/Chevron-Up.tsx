import { IconProps, size } from './Types';

export default function ChevronUp({ varient }: IconProps) {
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
        d="m18 15-6-6-6 6"
      />
    </svg>
  );
}
