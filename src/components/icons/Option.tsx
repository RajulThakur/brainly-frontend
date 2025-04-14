import {IconProps, size} from './Types';

export default function Option({varient}: IconProps) {
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
        d="M3 3h6l6 18h6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3h7"
      />
    </svg>
  );
}
