export interface Banners {
  system_banner: {
    _id: string;
    name: string;
    image: string;
  };
  system_categories: {
    _id: string;
    name: string;
    avatar: string;
    priority: number;
    type: string;
  };
}
