import { IconProps, size } from './Types';

export default function ChevronRight({ varient }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${size(varient)}`}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
