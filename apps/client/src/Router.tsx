import React from "react";
import { Switch, Route, Router, RouteProps, Redirect } from "wouter";
import { Login, Signup } from "./views";
import { useAuthorization } from "./hooks";

interface IProtectedRoute extends RouteProps {
  isLoggedIn?: boolean;
}

interface IPublicRoute extends RouteProps {
  isLoggedIn?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRoute> = (props) => {
  const { isLoggedIn, ...restOfProps } = props;

  return (
    <>{isLoggedIn ? <Route {...restOfProps} /> : <Redirect to="/login" />}</>
  );
};

const PublicRoute: React.FC<IPublicRoute> = (props) => {
  const { isLoggedIn, ...restOfProps } = props;

  return <>{!isLoggedIn ? <Route {...restOfProps} /> : <Redirect to="/" />}</>;
};

const Component = () => <h1>lala</h1>;

export const AppRouter: React.FC<{}> = () => {
  const { isLoggedIn, isLoading } = useAuthorization();

  return (
    <>
      {isLoading ? (
        <h1></h1>
      ) : (
        <Router>
          <Switch>
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              path="/"
              component={Component}
            />
            <PublicRoute
              isLoggedIn={isLoggedIn}
              path="/login"
              component={Login}
            />
            <PublicRoute
              isLoggedIn={isLoggedIn}
              path="/signup"
              component={Signup}
            />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};
