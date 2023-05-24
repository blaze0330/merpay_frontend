import { CardItems } from '../../types';
import {
  GET_SHOPBYCATEGORY_FAILURE,
  GET_SHOPBYCATEGORY_REQUEST,
  GET_SHOPBYCATEGORY_SUCCESS,
  GET_SHOPBYID_FAILURE,
  GET_SHOPBYID_REQUEST,
  GET_SHOPBYID_SUCCESS,
  GET_SHOP_FAILURE,
  GET_SHOP_REQUEST,
  GET_SHOP_SUCCESS
} from '../selectors/shops';

export type State = {
  loading: boolean;
  shops: CardItems[] | [];
  filteredShops: CardItems[] | [];
  shop: CardItems | null;
  // id: number | null;
};

export const initialState = {
  loading: false,
  shops: [],
  shop: null,
  // id: null,
  filteredShops: []
} as State;

type ActionType = {
  type: string;
  payload: any;
  filterKey?: string;
  // id: number | null;
  filteredShops: CardItems[];
};

export default function shops(state: State = initialState, action: ActionType) {
  switch (action.type) {
    case GET_SHOP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload,
        filteredShops: action.payload.filter((res: CardItems) =>
          res.name?.toLowerCase().includes((action.filterKey || '').toLowerCase())
        )
      };
    case GET_SHOP_FAILURE:
      return {
        ...state,
        loading: false
      };

    case GET_SHOPBYID_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_SHOPBYID_SUCCESS:
      return {
        ...state,
        shop: action.payload,
        loading: false
      };

    case GET_SHOPBYID_FAILURE:
      return {
        ...state,
        loading: false
      };

    case GET_SHOPBYCATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_SHOPBYCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredShops: action.payload.id
          ? state.shops.filter((shop) => shop.category_id === Number(action.payload.id))
          : state.shops
      };
    case GET_SHOPBYCATEGORY_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
