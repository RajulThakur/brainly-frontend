import {ReactNode} from 'react';
import ArrowKeys from './ArrowKeys';
import {rowStyle} from './BaseKeystyle';
import IconRenderer from './IconRenderer';
import KeyboardKey from './KeyboardKeys';

export interface KeyConfig {
  primary?: string;
  alt?: string;
  fontSize?: string;
  isGlowing?: boolean;
  width?:string;
  delay?: string;
  position?: KeyPosition;
  icon?: ReactNode;
}
type KeyPosition = 'bottom-right' | 'bottom-left';
const functionRow: KeyConfig[] = [
  {primary: 'esc', fontSize: '23.75px'},
  {primary: 'F1'},
  {primary: 'F2'},
  {primary: 'F3'},
  {primary: 'F4'},
  {primary: 'F5'},
  {primary: 'F6'},
  {primary: 'F7'},
  {primary: 'F8'},
  {primary: 'F9'},
  {primary: 'F10'},
  {primary: 'F11'},
  {primary: 'F12'},
];

const numberRow: KeyConfig[] = [
  {primary: '`', alt: '~'},
  {primary: '1', alt: '!'},
  {primary: '2', alt: '@'},
  {primary: '3', alt: '#'},
  {primary: '4', alt: '$'},
  {primary: '5', alt: '%'},
  {primary: '6', alt: '^'},
  {primary: '7', alt: '&'},
  {primary: '8', alt: '*'},
  {primary: '9', alt: '('},
  {primary: '0', alt: ')'},
  {primary: '-', alt: '_'},
  {primary: '=', alt: '+'},
  {primary: 'delete', position: 'bottom-right'},
];
const topRow: KeyConfig[] = [
  {primary: 'tab', position: 'bottom-left'},
  {primary: 'Q'},
  {primary: 'W'},
  {primary: 'E'},
  {primary: 'R'},
  {primary: 'T'},
  {primary: 'Y'},
  {primary: 'U'},
  {primary: 'I'},
  {primary: 'O'},
  {primary: 'P'},
  {primary: '[', alt: '{'},
  {primary: ']', alt: '}'},
  {primary: '\\', alt: '|'},
];
const homeRow: KeyConfig[] = [
  {primary: 'caps lock', position: 'bottom-left'},
  {primary: 'A'},
  {primary: 'S'},
  {primary: 'D'},
  {primary: 'F'},
  {primary: 'G'},
  {primary: 'H'},
  {primary: 'J'},
  {primary: 'K'},
  {primary: 'L'},
  {primary: ';', alt: ':'},
  {primary: "'", alt: '"'},
  {primary: 'return', position: 'bottom-right'},
];
const bottomRow: KeyConfig[] = [
  {primary: 'shift', position: 'bottom-left'},
  {primary: 'Z'},
  {primary: 'X'},
  {primary: 'C'},
  {primary: 'V'},
  {primary: 'B', isGlowing: true},
  {primary: 'N'},
  {primary: 'M'},
  {primary: ',', alt: '<'},
  {primary: '.', alt: '>'},
  {primary: '/', alt: '?'},
  {primary: 'shift', position: 'bottom-right'},
];

const commandRow: KeyConfig[] = [
  {primary: 'fn'},
  {
    primary: 'control',
    icon: (
      <IconRenderer
        name="control"
        position="right"
      />
    ),
  },
  {
    primary: 'option',
    icon: (
      <IconRenderer
        name="option"
        position="right"
      />
    ),
  },
  {
    primary: 'command',

    isGlowing: true,
    icon: (
      <IconRenderer
        name="command"
        position="right"
      />
    ),
  },
  {delay: '0.125s'}, // Space
  {
    primary: 'command',
    icon: (
      <IconRenderer
        name="command"
        position="left"
      />
    ),
  },
  {
    primary: 'option',
    icon: (
      <IconRenderer
        name="option"
        position="left"
      />
    ),
  },
];

export default function Keyboard() {
  return (
    <div className="clip-mask py-1 inset-0 mt-10 hidden h-[calc(100dvw/2.7317073171)] text-[calc(100dvw/75)] max-w-dvw grid-rows-[.8fr_repeat(5,1.6fr)] gap-[calc(100dvw/136)] sm:grid ">
      <div className={`${rowStyle} opacity-40" grid-cols-[repeat(13,1.75fr)]`}>
        {functionRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
      </div>
      <div className={`${rowStyle} grid-cols-[repeat(13,1.6fr)_2.5fr]`}>
        {numberRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
      </div>
      <div className={`${rowStyle} grid-cols-[2.5fr_repeat(13,1.6fr)]`}>
        {topRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
      </div>
      <div className={`${rowStyle} grid-cols-[3fr_repeat(11,1.6fr)_3fr]`}>
        {homeRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
      </div>
      <div className={`${rowStyle} grid-cols-[4fr_repeat(10,1.6fr)_4fr]`}>
        {bottomRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
      </div>
      <div
        className={`${rowStyle} grid-cols-[repeat(3,1.6fr)_2.1fr_9.2fr_2.1fr_1.6fr_5.5fr]`}>
        {commandRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
        <ArrowKeys />
      </div>
    </div>
  );
}
