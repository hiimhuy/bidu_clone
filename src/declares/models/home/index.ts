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

export interface NewestProduct {
  data: Product[];
}
interface Product {
  _id: string;
  name: string;
  images: string[];
  before_saleprice: string;
  bidu_air: boolean;
  discount_percent: number;
  sale_price: string;
  shop: {
    country: string;
  };
}

export interface SuggestProduct {
  success: boolean;
  message: string;
  data: {
    before_sale_price: number;
    images: string[];
    name: string;
    _id: string;
    bidu_air: null;
    sale_price: number;
  }[];
}

export interface TopSeller {
  success: boolean;
  message: string;
  data: {
    _id: string;
    ranking_today: number;
    avg_rating: number;
    avg_time_delivery: number;
    avg_time_prepare_order: number;
    chat_response_rate: number;
    country: string;
    name: string;
    system_banner: {
      images: {
        vi?: string;
        en?: string;
        ko?: string;
      };
      name: string;
    };
    user: {
      _id: string;
      avatar: string;
      followCount: number;
      userName: string;
    };
  }[];
}
