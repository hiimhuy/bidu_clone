// responseHome
export interface Banners {
  data: {
    data: {
      system_banner: {
        _id: string;
        name: string;
        image: string;
      }[];
      system_category: {
        _id: string;
        name: string;
        avatar: string;
        priority: number;
        type: string;
      }[];
    };
  };
}

export interface Banner {
  image: string;
}

export interface Categories {
  system_category: {
    _id: string;
    name: string;
    avatar: string;
  }[];
}
