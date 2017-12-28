import { store } from "../store";
import { call, put, takeLatest } from "redux-saga/effects";

export function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

function addCommonHeaders(options = {}) {
  // Include JWT Token
  if (!options.headers) {
    options.headers = {};
  }

  //TODO: Get authentication token from react-native-storage
  let authData = {};

  // TODO: set language
  return options;
}

function fetch2(url, options) {
  if (options.params) {
    url = `${url}?${queryParams(options.params)}`;
  }
  return fetch(url, addCommonHeaders(options));
}

export const fetchJSON = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    return fetch2(url, options)
      .then(response => {
        if (response) {
          return response
            .json()
            .then(body => {
              if (response.ok) {
                resolve(body);
              } else {
                reject({ body, status: response.status });
              }
            })
            .catch(err => {
              if (response.ok) {
                resolve({});
              } else {
                reject({ body: {}, status: response.status });
              }
            });
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const handleError = status => {
  let message = "";
  switch (status) {
    case 500:
      message = "Internal Server Error";
      break;
    case 401:
      message = "Invalid credentials";
      break;
    case 403:
      message = "Invalid credentials";
      break;
    default:
      console.log("Error ", status);
      message = "Something went wrong";
  }
  return message;
};
