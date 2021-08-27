import React from "react";
import { Switch, Route, Router, RouteProps, Redirect, useRoute } from "wouter";
import { Login, Signup, Loading } from "@/views";
import { useSession } from "./hooks";
import { Navbar, MainContainer } from "@/components/layout";

interface IRoute {
  isProtected: boolean;
  path: string;
  component: React.FC;
  menuName: string | undefined;
}

interface IProtectedRoute extends RouteProps {}

interface IPublicRoute extends RouteProps {}

const ProtectedRoute: React.FC<IProtectedRoute> = (props) => {
  const { isLoggedIn } = useSession();

  return <>{isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

const PublicRoute: React.FC<IPublicRoute> = (props) => {
  const { isLoggedIn } = useSession();

  return <>{!isLoggedIn ? <Route {...props} /> : <Redirect to="/" />}</>;
};

const Component = () => (
  <MainContainer>
    <Navbar />
  </MainContainer>
);

export const AppRouter: React.FC<{}> = () => {
  const { isLoading } = useSession();

  return (
    <>
      {true ? (
        <Loading />
      ) : (
        <Router>
          <Switch>
            <ProtectedRoute path="/" component={Component} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};
