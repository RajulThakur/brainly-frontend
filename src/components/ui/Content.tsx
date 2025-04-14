import {ContentType} from '../../interface/Interface';

interface ContentProps {
  type: ContentType;
  content: string | string[];
  light?: boolean;
}
export default function Content(props: ContentProps) {
  switch (props.type) {
    case 'text':
      return (
        <p
          className={`overflow-hidden text-base leading-5 font-light tracking-wide ${props.light ? 'text-slate-400' : 'text-slate-600'}`}>
          {props.content}
        </p>
      );
    case 'image':
      return (
        <div className="flex h-full w-full items-center justify-center">
          <img
            className="h-full w-full rounded-md object-cover"
            src={props.content as string}
            alt="idea"
          />
        </div>
      );
    case 'list':
      return (
        <p
          className={`overflow-hidden text-base leading-5 font-light tracking-wide ${
            props.light ? 'text-slate-400' : 'text-slate-600'
          }`}>
          {props.content}
        </p>
      );
  }
}
