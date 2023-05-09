import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // replace with your API base URL
  timeout: 5000, // request timeout in milliseconds
});

// add an interceptor for handling errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // log the error
    console.error(error);

    // display a friendly error message to the user
    if (error.response) {
      // server responded with an error status code
      const status = error.response.status;
      if (status === 401) {
        // handle unauthorized access errors
        // example: redirect to login page
      } else if (status === 404) {
        // handle resource not found errors
        // example: display a "not found" message to the user
      } else {
        // handle other errors
        // example: display a "something went wrong" message to the user
      }
    } else if (error.request) {
      // server didn't respond
      // example: display a "network error" message to the user
    } else {
      // something else went wrong
      // example: display a "something went wrong" message to the user
    }

    return Promise.reject(error);
  }
);

export default api;
