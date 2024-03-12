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
export interface Product {
  _id: string;
  name: string;
  images: string[];
  before_saleprice: string;
  bidu_air: boolean;
  discount_percent: number;
  sale_price: string;
  shop: {
    country: string;
    // user: {
    //   id: string;
    //   userName: string;
    //   avatar: string;
    //   email: string;
    // };
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

export interface DetailProduct {
  data: {
    before_sale_price: number;
    category_id: string;
    delivery_information: string;
    description: string;
    duration_refund: number;
    images: string[];
    is_approved: string;
    is_bookmarked: boolean;
    is_genuine_item: boolean;
    is_guaranteed_item: boolean;
    is_pre_order: boolean;
    is_sold_out: boolean;
    name: string;
    option_types: {
      name: string;
      option_values: {
        image: string;
        name: string;
        _id: string;
      }[];
    }[];
    price_min_max: {
      min: number;
      max: number;
    };
    quantity: number;
    refund_conditions: {
      active: boolean;
      code: number;
      en_name: string;
      ko_name: string;
      vn_name: string;
    }[];
    sale_price: number;
    shop_id: string;
    shop: {
      allow_show_on_top: boolean;
      avg_rating: number;
      avg_time_delivery: number;
      avg_time_prepare_order: number;
      biggest_price: number;
      country: string;
      description: string;
      rank_policy: {
        data: {
          chatResponseByPercent: number;
          lateDelivery: number;
          numberOfBuyers: number;
          penaltyOrderByPercent: number;
          preOrderByPercent: number;
          shopRating: number;
          successOrderByPercent: number;
          totalOrders: number;
          unSuccessOrderByPercent: number;
        };
      };
      shipping_methods: {
        _id: string;
        name: string;
        is_active: boolean;
      }[];
      user: {
        avatar: string;
        email: string;
        followCount: number;
        followingCount: number;
        is_newbie: boolean;
        userName: string;
      };
    };
  };
}

export interface FeedBacks {
  data: {
    feedbacks: {
      _id: string;
      buyer_feedback: null;
      content: string;
      feedback_optional: null;
      is_approved: boolean;
      is_public: boolean;
      is_show_body_shape: boolean;
      order_id: string;
      user: {
        avatar: string;
        birthday: string;
        bodyMeasurement: {
          bustSize: number;
          height: number;
          highHipSize: number;
          hipSize: number;
          waistSize: number;
          weight: number;
        };
        email: string;
        nameOrganizer: {
          unsigneduserName: string;
          userName: string;
        };
        phoneNumber: string;
        userName: string;
      };
    }[];

    generalFeedbackInfo: {
      averageFeedbackRate: number;
      satisfactionRate: number;
      totalByComment: number;
      totalByMedia: number;
      totalByStar: {
        total: number;
        vote_star: number;
      }[];
      totalFeedback: number;
    };
  };
}
