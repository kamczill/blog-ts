export interface onImageLoadProps {
    onImageLoad: () => void;
}

export interface viewAllButtonProps {
    classes: string
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
  showBadge?: boolean;
  badgeText?: string;
}