import { Banners } from "@/src/declares/models/home/Banners";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface HomeState {
  system_banner: any;
  system_categories: [];
  loading: boolean;
}

const initialState: HomeState = {
  system_banner: {},
  system_categories: [],
  loading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getList(state: any) {
      state.loading = true;
    },
    getListSuccess(state: any, action: PayloadAction<Banners>) {
      state.system_banner = action.payload.data.data.system_banner[0];
      state.loading = false;
    },
    getListFailed(state: any, action: PayloadAction<string>) {
      state.system_categories = {};
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
export const selectHomeLogging = (state: RootState) => state.home.loading;

// Reducer
export const homeReducer = homeSlice.reducer;
