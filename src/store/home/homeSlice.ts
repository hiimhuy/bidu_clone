import { Banners } from "@/src/declares/models/Banners";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  system_banner: any;
  system_categories: any;
  loading: boolean;
}

const initialState: HomeState = {
  system_banner: {},
  system_categories: {},
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
      state.system_banner = action.payload;
      state.loading = false;
    },
    getListFailed(state: any, action: PayloadAction<string>) {
      // state.system_categories = action.system_categories
      // state.loading = false;
    },
  },
});

// Actions
export const homeActions = homeSlice.actions;

// Selectors
//   export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
//   export const selectIsLogging = (state: RootState) => state.auth.logging;

// Reducer
export const homeReducer = homeSlice.reducer;
