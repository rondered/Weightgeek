import React from "react";
import { Switch, Route, Router, RouteProps, Redirect, useRoute } from "wouter";
import { Login, Signup, Logbook } from "@/views/Pages";
import { Loading } from "@/views/Layout";
import { useSession } from "./hooks";

interface IRoute {
  isProtected: boolean;
  path: string;
  component: React.FC;
  menuName: string | undefined;
}

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

export const AppRouter: React.FC<{}> = () => {
  const { isLoggedIn, isLoading } = useSession();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Switch>
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              path="/"
              component={Logbook}
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
