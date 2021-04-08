import { combineReducers } from "redux";
import {
  addItemDataReducer,
  fetchItemsReducer,
  SearchProductsReducer,
  //filteredProductsReducer,
} from "./productsReducer";

const combinedreducers = combineReducers({
  addItemDataReducer,
  fetchItemsReducer,
  SearchProductsReducer,
  //filteredProductsReducer,
});

export default combinedreducers;
