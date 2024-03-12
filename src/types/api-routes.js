//* Swagger: https://api.staging.luxedujour.vogdevelopment.com/swagger/index.html
export const apiRoutes = {
  //* AUTH
  LOGIN: "api/v1/users/login",

  //*WISHLIST
  WISHLIST: "api/v1/users/me/wishlist",
  UPDATE_WISHLIST: "api/v1/users/me/wishlist",

  //* ROOM
  GET_ROOM_LIST: "api/v1/rooms",
  GET_ROOM_LIST_BY_CATEGORY: "api/v1/rooms/category",

  // FORGOT_PASSWORD: "api/v1/account/password/forgot",

  //* CATEGORY
  GET_CATEGORY_LIST: "api/v1/categories",
};
