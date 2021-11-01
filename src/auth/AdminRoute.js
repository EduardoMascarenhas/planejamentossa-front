import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() === false ? (
        <Redirect
          to={{
            pathname: "/painel",
            state: { from: props.location },
          }}
        />
      ) : (isAuthenticated() && isAuthenticated().user.role === 1) ||
        isAuthenticated().user.role === 2 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/painel",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminRoute;
