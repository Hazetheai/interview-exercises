import React from "react";

const Password = props => {
  return (
    <div className="formPassword">
      <label htmlFor="password" className="password__label">
        Password
      </label>
      {props.errors ? (
        <span className="errorMessage">Invalid password</span>
      ) : null}
      <input
        autoComplete="new-password"
        id="password"
        className={
          props.isEmpty <= 6
            ? "password__input"
            : props.errors
            ? "password__input errorBorder"
            : "password__input filledBorder"
        }
        type="password"
        placeholder="*******"
      />
    </div>
  );
};

export default Password;
