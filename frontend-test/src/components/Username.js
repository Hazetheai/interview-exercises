import React from "react";

const Username = props => {
  return (
    <div className="formUsername">
      <label htmlFor="username" className="username__label">
        Username
      </label>
      {props.errors ? (
        <span className="errorMessage">Please enter your username</span>
      ) : null}
      <input
        id="username"
        autoComplete="off"
        className={
          props.isEmpty <= 6
            ? "username__input"
            : props.errors
            ? "username__input errorBorder"
            : "username__input filledBorder"
        }
        type="text"
        placeholder="deckard.cain"
      />
    </div>
  );
};

export default Username;
