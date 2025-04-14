import {baseKeyStyles} from './BaseKeystyle';
import IconRenderer from './IconRenderer';

export default function ArrowKeys() {
  const baseArrowKeyStyles = `
  ${baseKeyStyles}
  text-[calc(100dvw/70)]
  h-auto
  flex items-center justify-center
`;
  return (
    <div className="grid grid-cols-3 text-gray-800">
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
