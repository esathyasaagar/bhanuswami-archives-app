// Shared types used by both web and mobile

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ContentItem = {
  id: string;
  title: string;
  href: string;
  category: string;
  description: string;
  date?: string;
  color?: string;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  audioUrl: string;
  duration?: string;
  date?: string;
  description?: string;
};
