import ArrowKeys from './ArrowKeys';
import IconRenderer from './IconRenderer';
import KeyboardKey from './KeyboardKeys';

export interface KeyConfig {
  primary?: string;
  alt?: string;
  width?: string;
  fontSize?: string;
  isGlowing?: boolean;
  delay?: string;
  position?: 'bottom-right' | 'bottom-left';
  icon?: React.ReactNode;
}

const functionRow = [
  { primary: 'esc', width: '167px', fontSize: '23.75px' },
  { primary: 'F1' },
  { primary: 'F2' },
  { primary: 'F3' },
  { primary: 'F4' },
  { primary: 'F5' },
  { primary: 'F6' },
  { primary: 'F7' },
  { primary: 'F8' },
  { primary: 'F9' },
  { primary: 'F10' },
  { primary: 'F11' },
  { primary: 'F12' },
];
const KEYS = {
  numberRow: [
    { primary: '`', alt: '~' },
    { primary: '1', alt: '!' },
    { primary: '2', alt: '@' },
    { primary: '3', alt: '#' },
    { primary: '4', alt: '$' },
    { primary: '5', alt: '%' },
    { primary: '6', alt: '^' },
    { primary: '7', alt: '&' },
    { primary: '8', alt: '*' },
    { primary: '9', alt: '(' },
    { primary: '0', alt: ')' },
    { primary: '-', alt: '_' },
    { primary: '=', alt: '+' },
    { primary: 'delete', width: '167.5px', position: 'bottom-right' },
  ],
  topRow: [
    { primary: 'tab', width: '167.5px', position: 'bottom-left' },
    { primary: 'Q' },
    { primary: 'W' },
    { primary: 'E' },
    { primary: 'R' },
    { primary: 'T' },
    { primary: 'Y' },
    { primary: 'U' },
    { primary: 'I' },
    { primary: 'O' },
    { primary: 'P' },
    { primary: '[', alt: '{' },
    { primary: ']', alt: '}' },
    { primary: '\\', alt: '|' },
  ],
  homeRow: [
    { primary: 'caps lock', width: '197.5px', position: 'bottom-left' },
    { primary: 'A' },
    { primary: 'S' },
    { primary: 'D' },
    { primary: 'F' },
    { primary: 'G' },
    { primary: 'H' },
    { primary: 'J' },
    { primary: 'K' },
    { primary: 'L' },
    { primary: ';', alt: ':' },
    { primary: "'", alt: '"' },
    { primary: 'return', width: '197.5px', position: 'bottom-right' },
  ],
  bottomRow: [
    { primary: 'shift', width: '257.5px', position: 'bottom-left' },
    { primary: 'Z' },
    { primary: 'X' },
    { primary: 'C' },
    { primary: 'V' },
    { primary: 'B' },
    { primary: 'N' },
    { primary: 'M' },
    { primary: ',', alt: '<' },
    { primary: '.', alt: '>' },
    { primary: '/', alt: '?' },
    { primary: 'shift', width: '257.5px', position: 'bottom-right' },
  ],
} as const;

const commandRow = [
  { primary: 'fn' },
  {
    primary: 'control',
    icon: (
      <IconRenderer
        varient="xl"
        name="control"
        position="right"
      />
    ),
  },
  {
    primary: 'option',
    icon: (
      <IconRenderer
        varient="xl"
        name="option"
        position="right"
      />
    ),
  },
  {
    primary: 'command',
    width: '138.5px',
    // isGlowing: true,
    icon: (
      <IconRenderer
        varient="xl"
        name="command"
        position="right"
      />
    ),
  },
  { width: '587.5px', delay: '0.125s' }, // Space
  {
    primary: 'command',
    width: '138.5px',
    // isGlowing: true,
    icon: (
      <IconRenderer
        varient="xl"
        name="command"
        position="left"
      />
    ),
  },
  {
    primary: 'option',
    icon: (
      <IconRenderer
        varient="xl"
        name="option"
        position="left"
      />
    ),
  },
];

export default function Keyboard() {
  return (
    <div className="relative mt-50 grid gap-3 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-gray-200/50 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-10 transform-gpu bg-slate-50/90 overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5147e4] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="flex justify-between opacity-40">
        {functionRow.map((keyConfig, index) => (
          <KeyboardKey
            key={index}
            {...keyConfig}
          />
        ))}
      </div>

      {Object.entries(KEYS).map(([rowName, keys], index) => (
        <div
          key={rowName}
          className={`flex justify-between ${index === 0 ? 'opacity-60' : ''}`}>
          {keys.map((keyConfig, index) => (
            <KeyboardKey
              key={index}
              {...keyConfig}
            />
          ))}
        </div>
      ))}

      <div className="flex justify-between">
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
