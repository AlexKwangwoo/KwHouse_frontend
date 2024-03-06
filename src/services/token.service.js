const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("kwhouse_user"));
  return user?.refreshToken;
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("kwhouse_user"));

  return user?.token;
};

const updateLocalAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("kwhouse_user"));
  user.token = token;
  localStorage.setItem("kwhouse_user", JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("kwhouse_user")).user;
};

const setUser = (user) => {
  localStorage.setItem("kwhouse_user", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("kwhouse_user");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
