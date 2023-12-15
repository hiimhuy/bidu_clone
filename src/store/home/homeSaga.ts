import { all, fork, put, takeLatest } from "redux-saga/effects";
import { homeActions } from "./homeSlice";

function* getBanners() {
  console.log("getBanners");

  //   try {
  //     const response: any = "user";
  //     yield put(authActions.loginSuccess(response.data as UserModel));
  //   } catch (error: ErrorModel | any) {
  //     yield put(authActions.loginFailed("Fail"));
  //   }
}

function* watchHomeFlow() {
  yield all([takeLatest(homeActions.getList.type, getBanners)]);
}

export function* homeSaga() {
  yield fork(watchHomeFlow);
}
