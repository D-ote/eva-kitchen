import { requestProcessor } from "../../../utils/urls/requestProcessor"
import { PROFILE } from "../constants";
import {NotificationManager} from "react-notifications";

const loginAction = (payload) => (dispatch, getState)=>
new Promise (async(resolve, reject)=>{

  try {
    const response = await requestProcessor({
      method: 'POST',
      url: '/login',
      payload,
      dispatch,
    });
    dispatch({
      type: PROFILE,
      payload: response.data
    });
    resolve(response)
    NotificationManager.success("Successful login")          
  } catch (error) {
    NotificationManager.error(error.message)
    reject (error)
  }
})
export default loginAction;