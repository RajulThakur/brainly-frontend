export interface ButtonProps {
  varient: 'primary' | 'secondary' | 'none';
  size: 'sm' | 'md' | 'lg';
  text?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
}

const size = (size: string) => {
  switch (size) {
    case 'sm':
      return 'text-xs py-1 rounded-xs gap-1';
    case 'md':
      return 'py-1 px-2 text-xs gap-2 rounded-md lg:text-base lg:py-2 lg:px-3';
    case 'lg':
      return 'text-lg py-2 px-4 gap-2 rounded-lg lg:text-xl lg:py-3 lg:px-4';
  }
};

const varient = (varient: string) => {
  switch (varient) {
    case 'primary':
      return 'bg-white/20 backdrop-blur-xs border border-white/20 text-slate-800 hover:bg-white/30 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]';
    case 'secondary':
      return 'bg-slate-800/20 backdrop-blur-xs border border-white/10 text-slate-200 hover:bg-slate-800/30 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]';
    case 'none':
      return 'bg-transparent text-slate-800 hover:text-accent-100';
  }
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center tracking-wide ${size(props.size)} transition-all duration-200 ease-out ${varient(props.varient)}`}
      onClick={props.onClick}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
}
