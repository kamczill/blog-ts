export interface onImageLoadProps {
    onImageLoad?: () => void;
}

export interface viewAllButtonProps {
    classes: string;
    text?: string;
}

export interface headingProps {
  title: string;
  description: string;
  showButton?: boolean;
}

export interface featureArticleProps {
  title: string;
  avatarImg: string;
  author: string;
  date: string;
  coverImage?: string;
  showBadge?: boolean;
  badgeText?: string;
  small?: boolean;
}
interface TextNode {
  data: {};
  marks: any[];
  value: string;
  nodeType: string;
}

interface Content {
  data: {};
  content: TextNode[];
  nodeType: string;
  value?: string;
}

interface Document {
  data: {};
  content: Content[];
  nodeType: string;
}

interface ApiResponse {
  json: {
    data: {};
    content: Document[];
    nodeType: string;
  };
}


export interface featurePostProps {
  onImageLoad?: () => void;
  title: string;
  avatarImg: string;
  author: string;
  date: string;
  coverImage?: string;
  content?: ApiResponse;
}