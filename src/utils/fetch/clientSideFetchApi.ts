import axios, { AxiosResponse } from "axios"
const BASE_MAIN_API = process.env.NEXT_PUBLIC_MAIN_API

interface FetchProps {
    url: string;
    method: string;
    data?: Record<string, any>;
    header?: any;

  }
  
  /**
 * Interface for FetchProps.
 * @typedef {Object} FetchProps
 * @property {string} url - The URL to fetch from.
 * @property {string} method - The HTTP method to use for the request.
 * @property {Record<string, any>} [data] - Optional data to send with the request.
 */

/**
 * Fetches data from an API using axios based on the specified method.
 * Currently supports POST requests. Other methods will result in a rejected promise.
 *
 * @param {FetchProps} props - The properties for the fetch operation including url, method, and optional data.
 * @returns {Promise<AxiosResponse<any>>} A promise that resolves with the Axios response object or rejects with an error if the method is unsupported.
 */
export const fetchMainApi = ({ url, method, data, header }: FetchProps): Promise<AxiosResponse<any>> => {
  // Check if the method is 'post' and send a POST request using axios
  if (method === "post") {
    return axios.post(`${BASE_MAIN_API}${url}`, { ...data },{
      headers: header
    });
  }else if(method === "get"){
    return axios.get(`${BASE_MAIN_API}${url}`,{
      headers: header
    });
  }else if(method === "put"){
    return axios.put(`${BASE_MAIN_API}${url}`, { ...data } ,{
      headers: header
    });
  }else if(method === "delete"){
    return axios.delete(`${BASE_MAIN_API}${url}`, {
      headers: header
    });
  }

  // Handle other HTTP methods or return a default value
  return Promise.reject(new Error("Unsupported method"));
};
