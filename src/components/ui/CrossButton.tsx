import Cross from '../icons/Cross';

interface CrossButtonProps {
  onClick: () => void;
}

export default function CrossButton({ onClick }: CrossButtonProps) {
  return (
    <div
      className="absolute top-0 right-0 flex translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 p-1"
      onClick={onClick}
    >
      <Cross />
    </div>
  );
}
