import axios from "axios";
import { BASE_URL } from "./config";

axios.defaults.baseURL = BASE_URL;

export const requestProcessor = async({
  method,
  url,
  payload,
}) => {
    try {
        const result = await axios ({
            method, url, data:payload,
        })
        return { status:result.status, ...result.data };
    } catch (error) {
        if (error?.response){
            throw{status: error.response.status, ...eror.response.data}
        }       
        throw{message:error.message}
    }
};
