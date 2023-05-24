import { combineReducers } from "redux";
import shops from "./shops";
import categories from "./categories";

const rootReducer = combineReducers({
  shops,
  categories,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
