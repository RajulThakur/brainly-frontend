// Use this interface in all icon components
export interface IconProps {
  varient?: 'sm' | 'md' | 'xl';
}

// Size utility function to be used in all components
export const size = (varient?: 'sm' | 'md' | 'xl') => {
  switch (varient) {
    case 'sm':
      return 'size-3';
    case 'md':
      return 'size-5';
    case 'xl':
      return 'size-6';
    default:
      return 'size-7';
  }
};
