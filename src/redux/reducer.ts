import {
  FETCH_NEWEST_PRODUCT_REQUEST,
  FETCH_NEWEST_PRODUCT_SUCCESS,
  FETCH_NEWEST_PRODUCT_FAILURE,
} from "../type";
import { ProductActionTypes } from "./action";

interface ProductState {
  data: any | null; // Loại dữ liệu phải được chỉ định phù hợp
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

const productReducer = (
  state = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case FETCH_NEWEST_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NEWEST_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_NEWEST_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
