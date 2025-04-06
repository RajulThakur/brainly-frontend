import IconRenderer from './IconRenderer';
import { baseKeyStyles } from './KeyboardKeys';

export default function ArrowKeys() {
  const baseArrowKeyStyles = `
  ${baseKeyStyles}
  size-26 h-12 w-24
  flex items-center justify-center
`;
  return (
    <div className="flex h-24 w-xs items-end justify-between text-gray-800">
      <div className={`${baseArrowKeyStyles} rounded-md`}>
        <IconRenderer
          name="chevron-left"
          position="center"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className={`${baseArrowKeyStyles} rounded-t-md`}>
          <IconRenderer
            name="chevron-up"
            position="center"
          />
        </div>
        <div className={`${baseArrowKeyStyles} rounded-b-md`}>
          <IconRenderer
            name="chevron-down"
            position="center"
          />
        </div>
      </div>
      <div className={`${baseArrowKeyStyles} rounded-md`}>
        <IconRenderer
          name="chevron-right"
          position="center"
        />
      </div>
    </div>
  );
}
