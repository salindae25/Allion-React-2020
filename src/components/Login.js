import React, { useState } from "react";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  function handleOnSubmit(event) {
    //localstorage name
    event.preventDefault();
    localStorage.setItem("name", userName);
    props.history.push("/");
  }
  function handleUserName(event) {
    const _userName = event.target.value;
    setUserName(_userName);
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <h3>
          <center>Login</center>
        </h3>
        <div className="form-group">
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleUserName}
            className="form-control"
            placeholder="First name"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
}
