import React from "react";
import { Switch, Route, Router, RouteProps, Redirect } from "wouter";
import { Login, Signup } from "./views";
import { useAuthorization } from "./hooks";

interface IProtectedRoute extends RouteProps {
  isLoggedIn?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRoute> = (props) => {
  const { isLoggedIn, ...restOfProps } = props;

  return (
    <>{isLoggedIn ? <Route {...restOfProps} /> : <Redirect to="/login" />}</>
  );
};

const Component = () => <h1>lala</h1>;

export const AppRouter: React.FC<{}> = () => {
  const { isLoggedIn, isLoading } = useAuthorization();

  return (
    <>
      {isLoading ? (
        <>
          <h1></h1>
        </>
      ) : (
        <Router>
          <Switch>
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              path="/"
              component={Component}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      )}
    </>
  );
};
