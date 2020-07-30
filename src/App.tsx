import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import ContactPage from "./components/ContactPage";
import PrivateRouter from "./PrivateRoute";

import "./main.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>Personal Cabinet</h1>
        <ul className="navbar">
          <Link to="/" className="navbar-element">
            Main
          </Link>
          <Link to="/contacts" className="navbar-element">
            Contacts
          </Link>
        </ul>
        <Route exact path="/" component={LoginPage} />
        <PrivateRouter
          path="/contacts"
          isAuthenticated={false}
          Component={ContactPage}
        />
      </div>
    </Router>
  );
};

export default App;
