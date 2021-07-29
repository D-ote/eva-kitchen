import axios from "axios";

export const submitDetails = async (data) => {
  const signUp = "https://eva-resturant.herokuapp.com/api/admin/login";

  return await axios
    .post(signUp, data)
    .then((res) => {
        console.log(res, 123);
        console.log(res.data.message, 3535);
        if (res?.data?.data) {
          return { success: true, data: res.data.data };
        } else {
          return { success: false, message: res.data.message };
        }
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message };
    });
};
 