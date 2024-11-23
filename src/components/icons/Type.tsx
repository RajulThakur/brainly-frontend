import Document from './Document';
import Video from './Video';
import Links from './Links';
import Tags from './Tags';
import Tweet from './Tweet';
import { ReactNode } from 'react';
import { IdeaType } from '../../interface/Interface';
export interface TypeProps {
  type: IdeaType;
}
export default function Type(props: TypeProps): ReactNode {
  switch (props.type) {
    case 'documents':
      return <Document />;
    case 'videos':
      return <Video />;
    case 'tweets':
      return <Tweet />;
    case 'links':
      return <Links />;
    case 'tags':
      return <Tags />;
  }
}
