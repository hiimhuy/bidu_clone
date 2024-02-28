import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { homeActions } from "./homeSlice";
import {
  bannerApi,
  newestProductApi,
  topSellerApi,
  suggestProductApi,
} from "@/src/api/homeApi";
import {
  Banners,
  NewestProduct,
  TopSeller,
  SuggestProduct,
} from "@/src/declares/models/home/index";

function* getBanners() {
  try {
    const response: Banners = yield call(bannerApi.fetchList);
    yield put(homeActions.getListBannerSuccess(response));
  } catch (error) {
    yield put(homeActions.getListBannerFailed);
  }

  //   try {
  //     const response: any = "user";
  //     yield put(authActions.loginSuccess(response.data as UserModel));
  //   } catch (error: ErrorModel | any) {
  //     yield put(authActions.loginFailed("Fail"));
  //   }
}

function* getNewestProduct() {
  try {
    const response: NewestProduct = yield call(newestProductApi.fetchList);
    yield put(homeActions.getListNewestProductSuccess(response));
  } catch (error) {
    yield put(homeActions.getListNewestProductFailed);
  }
}

function* getTopSeller() {
  try {
    const response: TopSeller = yield call(topSellerApi.fetchList);
    yield put(homeActions.getListTopSellerSuccess(response));
  } catch (error) {
    yield put(homeActions.getListTopSellerFailed);
  }
}

function* getSuggestProduct() {
  try {
    const response: SuggestProduct = yield call(suggestProductApi.fetchList);
    yield put(homeActions.getListSuggestProductSuccess(response));
  } catch (error) {
    yield put(homeActions.getListSuggestProductFailed);
  }
}

function* watchHomeFlow() {
  yield all([takeLatest(homeActions.getListBanner.type, getBanners)]);
  yield all([
    takeLatest(homeActions.getListNewestProduct.type, getNewestProduct),
  ]);
  yield all([takeLatest(homeActions.getListTopSeller.type, getTopSeller)]);
  yield all([
    takeLatest(homeActions.getListSuggestProduct.type, getSuggestProduct),
  ]);
}

export function* homeSaga() {
  yield fork(watchHomeFlow);
}
