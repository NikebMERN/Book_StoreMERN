import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

// Save JWT token to local storage
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Get JWT token from local storage
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove JWT token from local storage
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  return token && jwtDecode(token).exp > Date.now() / 1000;
};
