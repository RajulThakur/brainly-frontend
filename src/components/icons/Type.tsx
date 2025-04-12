import Document from './Document';
import Video from './Video';
import Links from './Links';
import Tags from './Tags';
import Tweet from './Tweet';
import { ReactNode } from 'react';
import { IdeaType } from '../../interface/Interface';
import Image from './Image';
import Globe from './Globe';
import Play from './Play';
export interface TypeProps {
  type: IdeaType;
}
export default function Type(props: TypeProps): ReactNode {
  switch (props.type) {
    case 'documents':
      return <Document varient='md' />;
    case 'videos':
      return <Video />;
    case 'tweets':
      return <Tweet />;
    case 'links':
      return <Links varient='md'/>;
    case 'tags':
      return <Tags />;
    case 'images':
      return <Image varient='md'/>;
    case 'youtube':
      return <Play varient='md'/>;
    case 'other':
      return <Globe varient='md' />;
  }
}
