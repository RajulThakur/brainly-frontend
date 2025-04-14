import {baseKeyStyles} from './BaseKeystyle';
import IconRenderer from './IconRenderer';

export default function ArrowKeys() {
  const baseArrowKeyStyles = `
  ${baseKeyStyles}
  h-auto
  flex items-center justify-center
`;
  return (
    <div className="flex items-end justify-between text-gray-800">
      <div className={`${baseArrowKeyStyles} rounded-md`}>
        <IconRenderer
          name="chevron-left"
          varient="xl"
          position="center"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className={`${baseArrowKeyStyles} rounded-t-md`}>
          <IconRenderer
            name="chevron-up"
            varient="xl"
            position="center"
          />
        </div>
        <div className={`${baseArrowKeyStyles} rounded-b-md`}>
          <IconRenderer
            name="chevron-down"
            varient="xl"
            position="center"
          />
        </div>
      </div>
      <div className={`${baseArrowKeyStyles} rounded-md`}>
        <IconRenderer
          name="chevron-right"
          varient="xl"
          position="center"
        />
      </div>
    </div>
  );
}
