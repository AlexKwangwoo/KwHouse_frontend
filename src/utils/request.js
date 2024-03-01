import axios from "axios";
// import { tostifyError } from "../components/TostifyAlert/TostifyAlert";
import TokenService from "../services/token.service";
// import { baseURL } from "./config";
// import store from "../store/store";
// import { Logout } from "../store/actionCreators/accounts";
// import { apiRoutes } from "../types/api-routes";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
// create an axios instance
const service = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  //withCredentials: true, // default
});

service.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => response.data
  // async (error) => {
  //   const originalConfig = error.config;
  //   if (originalConfig.url !== "api/v1/signin" && error.response) {
  //     // Access Token was expired
  //     console.log(
  //       "localStorage.getItem(isRetry)",
  //       localStorage.getItem("isRetry")
  //     );
  //     if (
  //       error.response.status === 401 &&
  //       (localStorage.getItem("isRetry") === "false" ||
  //         localStorage.getItem("isRetry") === null)
  //     ) {
  //       localStorage.setItem("isRetry", true); // prevent to call multiple times
  //       console.log(
  //         "TokenService.getLocalRefreshToken() exist",
  //         TokenService.getLocalRefreshToken()
  //       );
  //       try {
  //         const rs = await service.post(apiRoutes.REFRESH_TOKEN, {
  //           refreshToken: TokenService.getLocalRefreshToken(),
  //         });

  //         console.log("refresh result!!!!", rs);
  //         const { accessToken } = rs.data;

  //         TokenService.updateLocalAccessToken(accessToken);

  //         if (!accessToken) {
  //           // tostifyError("Your session is expired, please log in again.");
  //           // localStorage.removeItem("accessToken");
  //           // localStorage.removeItem("refreshToken");
  //           // localStorage.removeItem("user");

  //           store.dispatch(Logout());
  //           window.location.href = "/signin";
  //           // localStorage.clear();
  //           localStorage.removeItem("user");
  //         }

  //         // store.dispatch(updateAcyarncessToken(accessToken));
  //         // TokenService.updateLocalAccessToken(accessToken)

  //         localStorage.setItem("isRetry", false);
  //         location?.reload();
  //         return service(originalConfig);
  //       } catch (err) {
  //         store.dispatch(Logout());
  //         window.location.href = "/signin";
  //         // localStorage.clear();
  //         localStorage.removeItem("user");

  //         return Promise.reject(err);
  //       }
  //     } else if (
  //       (error.response.status === 401 &&
  //         localStorage.getItem("isRetry") === "true") ||
  //       TokenService.getLocalRefreshToken() === null
  //     ) {
  //       // Swal.fire(
  //       //   "Error",
  //       //   "Your session is expired, please log in agin",
  //       //   "error"
  //       // );
  //       // console.log(
  //       //   " TokenService.getLocalRefreshToken()",
  //       //   TokenService.getLocalRefreshToken()
  //       // );
  //       // tostifyError("Your session is expired, please log in again. 22222");
  //       // store.dispatch(Logout());
  //       window.location.href = "/signin";
  //       // localStorage.clear();
  //       localStorage.removeItem("user");
  //     }
  //   }
  //   console.log("Error from Requst.js", error);
  //   return Promise.reject(error);
  // }
);

export default service;
