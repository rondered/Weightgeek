import React from "react";
import { Switch, Route, Router } from "wouter";
import { Login, Signup } from "./views";

export const AppRouter: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);
