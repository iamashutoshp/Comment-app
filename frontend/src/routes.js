import React from "react";

import { ProtectedRoute } from "./Context/ProtectedRoute";

import Login from "./components/Login/Login";

import { Route, Switch } from "react-router-dom";

import App from "./components/App";
export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />{" "}
        <ProtectedRoute exact path="/" component={App} />
      </Switch>
    </div>
  );
};
