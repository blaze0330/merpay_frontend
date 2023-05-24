import { getItem, getItemsList } from '../api/api';
import {
  GET_SHOPBYCATEGORY_REQUEST,
  GET_SHOPBYCATEGORY_SUCCESS,
  GET_SHOPBYID_REQUEST,
  GET_SHOPBYID_SUCCESS,
  GET_SHOP_REQUEST,
  GET_SHOP_SUCCESS
} from '../selectors/shops';

export const getShops: any = (filterKey: string) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_SHOP_REQUEST });
    try {
      const shops = await getItemsList();

      dispatch({
        type: GET_SHOP_SUCCESS,
        payload: shops.data.data,
        filterKey: filterKey
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getShopById: any = (id?: number) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_SHOPBYID_REQUEST });
    try {
      const shop = await getItem(id);

      dispatch({
        type: GET_SHOPBYID_SUCCESS,
        payload: shop.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getShopsByCategory: any = (id: number | null) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_SHOPBYCATEGORY_REQUEST });
    try {
      dispatch({
        type: GET_SHOPBYCATEGORY_SUCCESS,
        payload: id
      });
    } catch (error) {
      console.log(error);
    }
  };
};
