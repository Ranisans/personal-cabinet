import React, { useState } from "react";

import InputBlock from "../InputBlock";

import "./LoginPage.scss";

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="login_page">
      <div className="login_page-container">
        <h2 className="login_page-title">Please LogIn</h2>
        <InputBlock
          className="login_page-data"
          label="login"
          value={login}
          placeholder="login"
          callback={setLogin}
        />
        <InputBlock
          className="login_page-data"
          label="password"
          value={password}
          placeholder="password"
          isPassword
          callback={setPassword}
        />
      </div>
    </div>
  );
};

export default LoginPage;
