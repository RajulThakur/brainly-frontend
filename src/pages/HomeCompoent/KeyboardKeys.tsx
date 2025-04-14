import {CSSProperties, ReactNode} from 'react';
import {KeyConfig} from './Keyboard';
import {baseKeyStyles, glowingStyles} from './BaseKeystyle';

interface KeyboardKeyProps extends KeyConfig {
  icon?: ReactNode;
}

export default function KeyboardKey({
  primary,
  alt,
  fontSize,
  isGlowing,
  width,
  delay = '0s',
  position,
  icon,
}: KeyboardKeyProps) {
  return (
    <div
      className={` ${baseKeyStyles} ${isGlowing && glowingStyles} `}
      style={
        {
          fontSize: fontSize,
          width: width,
          '--delay': delay,
          '--key-bg-start-color': isGlowing ? '#161616' : '#ffffff',
          '--key-bg-end-color': isGlowing ? '#222222' : '#f5f5f5',
        } as CSSProperties
      }>
      <div
        className={`flex h-full ${position === 'bottom-left' ? 'items-end justify-start' : ''} ${position === 'bottom-right' ? 'items-end justify-end' : ''} items-center justify-center ${isGlowing ? 'text-accent-200' : 'text-gray-800'} `}>
        {icon ? (
          <div
            className={`${isGlowing ? 'text-accent-200' : 'text-gray-600'} flex h-full flex-1 flex-col justify-between`}>
            <span>{icon}</span>
            <span>{primary}</span>
          </div>
        ) : (
          <div className="flex flex-col">
            {alt && <span>{alt}</span>}
            {primary && <span>{primary}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
