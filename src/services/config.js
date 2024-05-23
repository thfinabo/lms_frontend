import axios from 'axios';

export class APIEndPoint{
    request;
    apiEndpoint = process.env.REACT_APP_BASE_URL;
    requestHeader;
    thirdPartyRequest;
    accessToken;
  
    constructor() {
      // Creates an axios instance
      this.request = axios.create({
        // withCredentials: true,
        baseURL: this.apiEndpoint,
        headers: {
          "Cache-Control": "no-cache",
          'Content-Type': 'application/json',
        }
      });
      this.request.defaults.headers.common["Content-Type"] = "application/json";
  
      this.request.interceptors.request.use(
        function (request) {
          try {
            
          } catch (e) {
             
          }
          return request;
        },
  
        function (error) {
          return Promise.reject(error);
        }
      );
      // intercepts every calls made using the axios instance
      this.request.interceptors.response.use(
        function (response) {
          return response;
        },
  
        function (error) {
          return Promise.reject(error);
        }
      );
  
    }
}

export const BaseURL = process.env.REACT_APP_BASE_URL;

export class BaseController {
  accessToken;
}