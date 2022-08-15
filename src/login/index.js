import "./login.css";
import React from "react";

function Login() {
  function open() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    name.length > 3
      ? (window.location.href = "/home")
      : alert("Seu nome deve ter mais que 3 letras");
  }
  return (
    <>
      <div className="wrapper fadeInDown">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active"> Login </h2>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              name="login"
              placeholder="Qual seu nome?"
            />
            <input
              type="submit"
              onClick={open}
              className="fadeIn fourth"
              value="Ver cartas"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
