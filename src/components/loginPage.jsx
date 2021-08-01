import React from "react";
import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import pic from "../components/images/fruits.jpg";
import loginAction from "./reduxStore/action/loginAction";

const LoginPage = ({loginAction}) => {
  const[loginDetails, setLoginDetails] = useState({
      email: "",
      password:"",
  })
  const history = useHistory();
  const auth = useSelector(state => state.auth);

  const handleChange=(e)=>{
    setLoginDetails({...loginDetails, [e.target.id]: e.target.value})
  }
  
  useEffect(() => {
    if(auth?.profile?.authToken){
      history.replace("/users")
    }
  }, [auth, history])

  const handleSignIn = (e) => {
    e.preventDefault();
      loginAction(loginDetails);
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
      <form action="submit" className="loginForm">
        <h1 className="header"><span className="eva">Eva</span><span>Kitchen</span></h1>
        <div className="emailDiv">
          <input
            type="email"
            name="email"
            value={loginDetails.email}
            id="email"
            className="email"
            placeholder="email"
            required
            onChange={handleChange}
          />
          <label htmlFor="email" className="emailLabel">
            email
          </label>
        </div>
        <div className="passwordDiv">
          <input
            type="password"
            name="password"
            value={loginDetails.password}
            id="password"
            className="password"
            placeholder="password"
            required
            onChange={handleChange}
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

export default connect(null, {loginAction})(LoginPage);
