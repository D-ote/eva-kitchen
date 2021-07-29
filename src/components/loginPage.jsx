import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pic from "../components/images/fruits.jpg";
import { submitDetails } from "./reduxStore/action/loginAction";
import { SIGN_UP } from "./reduxStore/constants";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(email, password);

    // const url = "https://eva-resturant.herokuapp.com/api/admin/login";
    // let res = await axios.post(url, JSON.stringify({ email, password }));

    // res = await res.json();
    
    submitDetails({ email, password })
      .then((res) => {
        console.log({ res });
        if (res?.success) {
          dispatch({
            type: SIGN_UP,
            payload: res.data,
          });

          localStorage.setItem("user_data", JSON.stringify(res.data));
          history.push("/dashboard");
        } else {
          alert(res.message)
          //  console.log(res);
        }
      })
  };

  return (
    <div
      className="formDiv"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "lighten",
      }}
    >
      <form action="submit">
        <h1 className="header"><span className="eva">Eva</span> <span>Kitchen</span></h1>
        <div className="emailDiv">
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            className="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="emailLabel">
            email
          </label>
        </div>
        <div className="passwordDiv">
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            className="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="passwordLabel">
            password
          </label>
        </div>
        <button className="formBtn" onClick={handleSignIn}>
          sign in
        </button>
        <p className="forgotPwd">Forgot Password?</p>
      </form>
    </div>
  );
};

export default LoginPage;
