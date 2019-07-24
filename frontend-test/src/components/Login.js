import React from "react";

const Login = props => {
  return (
    <div className="formLogin">
      {props.loading && <div className="spinner" />}
      <button
        className={props.loading ? "login__input disabled" : "login__input"}
        type="submit"
        disabled={props.loading}
      >
        <i className="fas fa-sign-in-alt"> </i>
        Login
      </button>
    </div>
  );
};

export default Login;
