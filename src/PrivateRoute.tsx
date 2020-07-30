/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";

interface PRProps extends RouteProps {
  Component: React.FC<RouteComponentProps>;
  isAuthenticated: boolean;
}

const PrivateRouter: React.SFC<PRProps> = ({
  Component,
  isAuthenticated,
  ...rest
}: PRProps) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
