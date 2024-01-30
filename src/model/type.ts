export interface Banner {
  data: {
    system_banner: {
      image: string;
      promo_link: string;
    }[];
    system_category: {
      name: string;
      avatar: string;
    }[];
  };
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

export interface NewestProduct {
  success: boolean;
  message: string;
  data: Product[];
  paginate: {
    limit: number;
    page: number;
    total_page: number;
    total_record: number;
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
