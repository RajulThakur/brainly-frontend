import { ReactNode } from 'react';
import { KeyConfig } from './Keyboard';

interface KeyboardKeyProps extends KeyConfig {
  icon?: ReactNode;
}
export const baseKeyStyles = `
  bg-gradient-radial from-[--key-bg-start-color] from-75% to-[--key-bg-end-color] to-75%
  flex-shrink-0 select-none
  rounded-xl border border-gray-200
  p-2 
  transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]
  hover:translate-y-[2px]
  relative
  after:absolute after:inset-[-2px] after:rounded-xl after:transition-all after:duration-500
  after:opacity-0 hover:after:opacity-100
`;

export default function KeyboardKey({
  primary,
  alt,
  width = '104px',
  fontSize = '23.75px',
  isGlowing,
  delay = '0s',
  position,
  icon,
}: KeyboardKeyProps) {
  return (
    <div
      className={` ${baseKeyStyles} ${isGlowing ? 'animate-glow ring-accent-0/50 shadow-[0_0_20px_rgba(81,71,228,0.4)] ring-1' : 'shadow-md'} `}
      style={
        {
          width,
          fontSize,
          '--delay': delay,
          '--key-bg-start-color': isGlowing ? '#161616' : '#ffffff',
          '--key-bg-end-color': isGlowing ? '#222222' : '#f5f5f5',
        } as React.CSSProperties
      }>
      <div
        className={`flex h-full flex-col ${position === 'bottom-left' ? 'items-start justify-end' : ''} ${position === 'bottom-right' ? 'items-end justify-end' : ''} ${icon ? 'justify-between' : 'justify-center'} ${isGlowing ? 'text-accent-200' : 'text-gray-800'} font-light`}>
        {icon && (
          <div className={isGlowing ? 'text-accent-200' : 'text-gray-600'}>
            {icon}
          </div>
        )}
        {alt && <div className="text-center">{alt}</div>}
        {primary && <div className="text-center">{primary}</div>}
      </div>
    </div>
  );
}
