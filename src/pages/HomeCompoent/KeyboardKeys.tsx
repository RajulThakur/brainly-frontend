import {CSSProperties, ReactNode} from 'react';
import {KeyConfig} from './Keyboard';
import {baseKeyStyles, glowingStyles} from './BaseKeystyle';

interface KeyboardKeyProps extends KeyConfig {
  icon?: ReactNode;
}

export default function KeyboardKey({
  primary,
  alt,
  isGlowing,
  delay = '0s',
  position,
  icon,
}: KeyboardKeyProps) {
  return (
    <div
      className={` ${baseKeyStyles} text-xs sm:text-sm md:text-base lg:text-xl ${isGlowing && glowingStyles} `}
      style={
        {
          '--delay': delay,
          '--key-bg-start-color': isGlowing ? '#161616' : '#ffffff',
          '--key-bg-end-color': isGlowing ? '#222222' : '#f5f5f5',
        } as CSSProperties
      }>
      <div
        className={`flex h-full flex-col ${position === 'bottom-left' ? 'items-start justify-end' : ''} ${position === 'bottom-right' ? 'items-end justify-end' : ''} ${icon ? 'justify-between' : 'justify-center'} ${isGlowing ? 'text-accent-200' : 'text-gray-800'} `}>
        {icon && (
          <span className={isGlowing ? 'text-accent-200' : 'text-gray-600'}>
            {icon}
          </span>
        )}
        <div className="flex flex-col items-center justify-between">
          {alt && <span>{alt}</span>}
          {primary && <span>{primary}</span>}
        </div>
      </div>
    </div>
  );
}
