import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPopup = () => {
  // const navigate = useNavigate();

  // const onRectangleClick = useCallback(() => {
  //   navigate("/savings-account");
  // }, [navigate]);

  return (
    <div className="login-popup">
      {/* <div className="login-popup-child" onClick={onRectangleClick} /> */}
      
      <input className="login-popup-item" />
      <div className="account-no4">
        <div className="account-no5">Account No:</div>
        <div className="account-no-child1" />
      </div>
      <div className="password3">Password:</div>
      <b className="login2">Login</b>
      <div className="login-popup-child">
      <div className="login3">Login</div>
      </div>
      
      
      <button  className="dont-have-an">Don't have an account? Register
      
      </button>
    </div>
  );
};

export default LoginPopup;
