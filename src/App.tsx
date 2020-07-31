import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import "./App.scss";

import LoginPage from "./components/LoginPage";
import ContactPage from "./components/ContactPage";
import PrivateRouter from "./PrivateRoute";

import { connectUrl } from "./settings.json";

import "./main.scss";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = React.useState(false);

  const logIn = async (login: string, password: string) => {
    const response = await fetch(`${connectUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login, password }),
    });
    const result = await response.json();
    if (result.accessToken) {
      setIsAuth(true);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Personal Cabinet</h1>
        <ul className="navbar">
          <NavLink
            exact
            to="/"
            className="navbar-element"
            activeClassName="navbar-element--active"
          >
            Main
          </NavLink>
          <NavLink
            to="/contacts"
            className="navbar-element"
            activeClassName="navbar-element--active"
          >
            Contacts
          </NavLink>
        </ul>
        <Route
          exact
          path="/"
          render={() =>
            isAuth ? (
              <Redirect
                to={{
                  pathname: "/contacts",
                }}
              />
            ) : (
              <LoginPage loginCallback={logIn} />
            )
          }
        />
        <PrivateRouter
          path="/contacts"
          isAuthenticated={isAuth}
          Component={ContactPage}
        />
      </div>
    </Router>
  );
};

export default App;
