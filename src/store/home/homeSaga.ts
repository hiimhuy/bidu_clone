import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { homeActions } from "./homeSlice";
import bannerApi from "@/src/api/bannerApi";
import { Banners } from "@/src/declares/models/home/Banners";

function* getBanners() {
  try {
    const response: Banners = yield call(bannerApi.fetchList);
    yield put(homeActions.getListSuccess(response));
  } catch (error) {
    yield put(homeActions.getListFailed);
  }

  //   try {
  //     const response: any = "user";
  //     yield put(authActions.loginSuccess(response.data as UserModel));
  //   } catch (error: ErrorModel | any) {
  //     yield put(authActions.loginFailed("Fail"));
  //   }
}

// function* getCategories(){
//   try{

//   }
// }

function* watchHomeFlow() {
  yield all([takeLatest(homeActions.getList.type, getBanners)]);
}

export function* homeSaga() {
  yield fork(watchHomeFlow);
}
