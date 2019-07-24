import React, { useState } from "react";

import Username from "./Username";
import Password from "./Password";
import Submit from "./Login";

const FormControl = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [inputErrors, setErrors] = useState({
    username: false,
    password: false
  });

  return (
    <form
      onChange={e => handleChange(e, setUserName, setPassWord, inputErrors)}
      onSubmit={e =>
        checkErrors(e, userName, passWord, inputErrors, setErrors, setLoading)
      }
      className="myForm"
    >
      <Username
        username={userName}
        errors={inputErrors.username}
        isEmpty={userName.length}
      />
      <Password
        password={passWord}
        errors={inputErrors.password}
        isEmpty={passWord.length}
      />
      <Submit loading={loading} />
    </form>
  );
};

const handleChange = (e, setUserName, setPassWord) => {
  return e.target.id === "username"
    ? setUserName(e.target.value)
    : e.target.id === "password"
    ? setPassWord(e.target.value)
    : "";
};

const proceed = (data, setErrors, inputErrors) => {
  //   Clear Form here
  setErrors({
    ...inputErrors,
    username: data.errorFields.username,
    password: data.errorFields.password
  });
  window.location = "https://coub.com/view/htcjv";
};

function checkErrors(
  e,
  userName,
  passWord,
  inputErrors,
  setErrors,
  setLoading
) {
  setLoading(true);

  submitForm(e, userName, passWord)
    .then(data => {
      return data.error === false
        ? proceed(data, setErrors, inputErrors)
        : // Form Should clear here
          setErrors({
            ...inputErrors,
            username: data.errorFields.username,
            password: data.errorFields.password
          });
    })
    .then(() => {
      setLoading(false);
    });
}

async function submitForm(e, username, password) {
  e.preventDefault();
  return new Promise(resolve =>
    setTimeout(() => {
      const data = {
        error: username !== "jaina.proudmoore" || password !== "forazeroth",
        errorFields: {
          username: username !== "jaina.proudmoore",
          password: password !== "forazeroth"
        }
      };
      resolve(data);
    }, 2000)
  );
}

export default FormControl;
