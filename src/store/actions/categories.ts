import { category } from '../api/api';
import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS } from '../selectors/shops';

export const getCategories: any = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_CATEGORY_REQUEST });
    try {
      const categories = await category();
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: categories.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
