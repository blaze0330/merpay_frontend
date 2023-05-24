import { CategoryItems } from "../../types";
import {
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_REQUEST,
} from "../selectors/shops";

export type State = {
  loading: boolean;
  categories: CategoryItems[] | [];
};

export const initialState = {
  loading: false,
  categories: [],
} as State;

export default function categories(state: State = initialState, action: any) {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
