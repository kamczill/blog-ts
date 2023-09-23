import { StringValueNode } from "graphql";

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
  slug: string;
  avatarImg: string;
  author: string;
  date: string;
  coverImage?: string;
  content?: ApiResponse;
}

// export interface Author{
//   avatar: {
//     url: string;
//     __typename?: string;
//   }
//   name: string;
//   surname: string;
//   __typename: string;
// }

export interface CoverImage {
  contentType: string;
    description: string;
    fileName: string;
    height: number;
    size: number;
    title: string;
    url: string;
    width: number;
    __typename?: string;
}

export interface RecentArticle {
  author: Author;
  contentfulMetadata?:{
    tags?: {
      id: string;
      __typename: string;
    }[];
  coverImage: CoverImage;
  date: string;
  title: string;
    __typename?: string;
  };
  __typename?:string;
}

interface Asset {
  __typename: string;
  url: string;
}

interface Author {
  avatar: Asset;
  name: string;
  surname: string;
  __typename: string;
}

interface ContentfulTag {
  __typename: string;
  id: string;
}

interface ContentfulMetadata {
  tags: ContentfulTag[];
  __typename: string;
}

interface AssetCoverImage {
  contentType: string;
  description: string;
  fileName: string;
  height: number;
  size: number;
  title: string;
  url: string;
  width: number;
  __typename: string;
}

export interface BlogPost {
  author: Author;
  contentfulMetadata: ContentfulMetadata;
  coverImage: AssetCoverImage;
  date?: string;
  title: string;
  __typename: string;
}