import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_REQUEST,
  ADD_ITEM_FAILURE,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_FAILURE,
  SEARCH_SKU_SUCCESS,
  SEARCH_SKU_REQUEST,
  SEARCH_SKU_FAILURE,
  FILTER_PRODUCT_SUCCESS,
  FILTER_PRODUCT_REQUEST,
  FILTER_PRODUCT_FAILURE,
} from "../Constants/constants";

const initialState = {
  addItemData: {
    data: [],
  },
  fetchedItems: {
    data: [],
  },
  SKUItems: {
    data: [],
  },
  filteredItems: {
    data: [],
  },
};

export const addItemDataReducer = (
  state = initialState.addItemData,
  action
) => {
  switch (action.type) {
    case ADD_ITEM_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        data: [],
        errorMsg: null,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        status: action.status,
        errorMsg: action.error,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        addAPIStatus: action.status,
        data: action.payload,
      };

    default:
      return state;
  }
};

export const fetchItemsReducer = (
  state = initialState.fetchedItems,
  action
) => {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        data: [],
        errorMsg: null,
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        status: action.status,
        errorMsg: action.error,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        addAPIStatus: action.status,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const SearchProductsReducer = (
  state = initialState.SKUItems,
  action
) => {
  switch (action.type) {
    case SEARCH_SKU_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        data: [],
        errorMsg: null,
      };
    case SEARCH_SKU_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        status: action.status,
        errorMsg: action.error,
      };
    case SEARCH_SKU_SUCCESS:
      const arr = [];
      arr.push(action.payload);
      return {
        ...state,
        isFetching: action.isFetching,
        addAPIStatus: action.status,
        data: arr,
      };
    case FILTER_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        data: [],
        errorMsg: null,
      };
    case FILTER_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        status: action.status,
        errorMsg: action.error,
      };
    case FILTER_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        addAPIStatus: action.status,
        data: action.payload,
      };
    default:
      return state;
  }
};
