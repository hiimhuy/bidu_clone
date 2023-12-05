import { Dispatch } from "redux";
import axiosClient from "../api/axiosClient";

export const FETCH_NEWEST_PRODUCT_REQUEST = "FETCH_NEWEST_PRODUCT_REQUEST";
export const FETCH_NEWEST_PRODUCT_SUCCESS = "FETCH_NEWEST_PRODUCT_SUCCESS";
export const FETCH_NEWEST_PRODUCT_FAILURE = "FETCH_NEWEST_PRODUCT_FAILURE";

interface FetchNewestProductRequestAction {
  type: typeof FETCH_NEWEST_PRODUCT_REQUEST;
}

interface FetchNewestProductSuccessAction {
  type: typeof FETCH_NEWEST_PRODUCT_SUCCESS;
  payload: any; // Type your data appropriately
}

interface FetchNewestProductFailureAction {
  type: typeof FETCH_NEWEST_PRODUCT_FAILURE;
  payload: string;
}

export type ProductActionTypes =
  | FetchNewestProductRequestAction
  | FetchNewestProductSuccessAction
  | FetchNewestProductFailureAction;

export const fetchNewestProduct =
  () => async (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({ type: FETCH_NEWEST_PRODUCT_REQUEST });

    try {
      const response = await axiosClient.get(
        "api/v2/mobile/home/newest-product"
      );
      dispatch({ type: FETCH_NEWEST_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_NEWEST_PRODUCT_FAILURE, payload: error.message });
    }
  };

// const [data, setData] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axiosClient.get(
//         "api/v2/mobile/home/newest-product"
//       );
//       console.log("res", response.data);
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);
