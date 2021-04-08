import { ADD_LOG_DATA } from "./Constants/constants";
import Axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) => {
  const { xhr, types, logData } = action;
  if (xhr === undefined) {
    return next(action);
  } else {
    const [REQUEST, SUCCESS, FAILURE] = types;
    next({
      isFetching: true,
      status: null,
      type: REQUEST,
      requestData: xhr && xhr.hasOwnProperty("data") ? xhr.data : {},
    });
    next({
      type: ADD_LOG_DATA,
      message: { time: new Date(), action: `REQUEST:${logData}` },
    });
    return Axios(xhr)
      .then((res) => {
        next({
          isFetching: false,
          status: res.status,
          header: res.headers,
          payload: res.data,
          type: SUCCESS,
          requestData: xhr && xhr.hasOwnProperty("data") ? xhr.data : {},
        });
        next({
          type: ADD_LOG_DATA,
          message: {
            time: new Date(),
            action: `SUCCESS ${logData}`,
            returnCode: res.status,
          },
        });
      })
      .catch((error) => {
        let errorRespone = error.response;
        console.log("error", errorRespone);
        next({
          isFetching: false,
          status:
            errorRespone && errorRespone.hasOwnProperty("status")
              ? errorRespone.status
              : "",
          erro:
            errorRespone && errorRespone.hasOwnProperty("statusText")
              ? errorRespone.statusText
              : "",
          type: FAILURE,
          payload: errorRespone && errorRespone.data,
          requestData: xhr && xhr.hasOwnProperty("data") ? xhr.data : {},
        });
        next({
          type: ADD_LOG_DATA,
          message: {
            time: new Date(),
            action: `FAILURE ${logData}`,
            returnCode:
              errorRespone && errorRespone.hasOwnProperty("status")
                ? errorRespone.status
                : "",
            errorMessage:
              errorRespone && errorRespone.hasOwnProperty("statusText")
                ? errorRespone.statusText
                : "",
          },
        });
      });
  }
};
