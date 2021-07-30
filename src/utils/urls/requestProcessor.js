import axios from "axios";
import { BASE_URL } from "./config";

axios.defaults.baseURL = BASE_URL;

export const requestProcessor = async({
  method,
  url,
  payload,
  dispatch,
}) => {
    try {
        const result = await axios ({
            method, url, data:payload, dispatch
        })
        return { status:result.status, ...result.data };
    } catch (error) {
        if (error?.response){
            throw new Error({status: error.response.status, ...error.response.data})
        }       
        throw new Error({message:error.message})
    }
};
