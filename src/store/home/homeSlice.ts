import {
  Banners,
  SuggestProduct,
  NewestProduct,
  TopSeller,
} from "@/src/declares/models/home/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface HomeState {
  system_banner: any;
  system_categories: any;
  newest_products: any;
  top_sellers: any;
  suggest_products: any;
  loading: boolean;
}

const initialState: HomeState = {
  system_banner: {},
  system_categories: [],
  newest_products: [],
  top_sellers: [],
  suggest_products: [],
  loading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // Banner
    getListBanner(state: any) {
      state.loading = true;
    },
    getListBannerSuccess(state: any, action: PayloadAction<Banners>) {
      state.system_banner = action.payload.data.data.system_banner[0];
      state.system_categories = action.payload.data.data.system_category;
      state.loading = false;
    },
    getListBannerFailed(state: any, action: PayloadAction<string>) {
      state.system_categories = {};
      state.loading = false;
    },

    // NewestProduct
    getListNewestProduct(state: any) {
      state.loading = true;
    },
    getListNewestProductSuccess(
      state: any,
      action: PayloadAction<NewestProduct>
    ) {
      state.newest_products = action.payload.data;
      state.loading = false;
    },
    getListNewestProductFailed(state: any, action: PayloadAction<string>) {
      state.newest_products = {};
      state.loading = false;
    },

    // TopSeller
    getListTopSeller(state: any) {
      state.loading = true;
    },
    getListTopSellerSuccess(state: any, action: PayloadAction<TopSeller>) {
      state.top_sellers = action.payload.data;
      state.loading = false;
    },
    getListTopSellerFailed(state: any, action: PayloadAction<string>) {
      state.top_sellers = {};
      state.loading = false;
    },

    //SuggestProduct
    getListSuggestProduct(state: any) {
      state.loading = true;
    },
    getListSuggestProductSuccess(
      state: any,
      action: PayloadAction<SuggestProduct>
    ) {
      state.suggest_products = action.payload.data;
      state.loading = false;
    },
    getListSuggestProductFailed(state: any, action: PayloadAction<string>) {
      state.suggest_product = {};
      state.loading = false;
    },
  },
});

// Actions
export const homeActions = homeSlice.actions;

// Selectors
export const selectBanner = (state: RootState) => state.home.system_banner;
export const selectCategories = (state: RootState) =>
  state.home.system_categories;
export const selectNewestProduct = (state: RootState) =>
  state.home.newest_products;
export const selectTopSeller = (state: RootState) => state.home.top_sellers;
export const selectSuggestProduct = (state: RootState) =>
  state.home.suggest_products;
export const selectHomeLogging = (state: RootState) => state.home.loading;

// Reducer
export const homeReducer = homeSlice.reducer;
