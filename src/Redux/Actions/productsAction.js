import {
  ADD_ITEM_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  SEARCH_SKU_FAILURE,
  SEARCH_SKU_REQUEST,
  SEARCH_SKU_SUCCESS,
  FILTER_PRODUCT_FAILURE,
  FILTER_PRODUCT_REQUEST,
  FILTER_PRODUCT_SUCCESS,
} from "../Constants/constants";

export const addItemData = (data) => {
  return {
    xhr: {
      method: "post",
      url: "http://127.0.0.1:8000/api/products/",
      dataType: "json",
      data: data,
    },
    types: [ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE],
  };
};

export const fetchProducts = () => {
  return {
    xhr: {
      method: "get",
      url: "http://127.0.0.1:8000/api/products/",
      dataType: "json",
    },
    types: [FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE],
  };
};

export const retrieveDataForSKU = (sku) => {
  return {
    xhr: {
      method: "get",
      url: `http://127.0.0.1:8000/api/products/SKU/${sku}/`,
      dataType: "json",
    },
    types: [SEARCH_SKU_REQUEST, SEARCH_SKU_SUCCESS, SEARCH_SKU_FAILURE],
  };
};

export const filterProducts = (fil) => {
  return {
    xhr: {
      method: "get",
      url: `http://127.0.0.1:8000/api/products/${fil}/`,
      dataType: "json",
    },
    types: [
      FILTER_PRODUCT_REQUEST,
      FILTER_PRODUCT_SUCCESS,
      FILTER_PRODUCT_FAILURE,
    ],
  };
};
