import React from "react";
import { Switch, Route, Router, RouteProps, Redirect, useRoute } from "wouter";
import { Login, Signup } from "./views";
import { useSession } from "./hooks";
import { Navbar, MainContainer } from "@/components/layout";
import { axiosInstance } from "./utils/axios";

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

const Component = () => (
  <MainContainer>
    <Navbar />
  </MainContainer>
);

export const AppRouter: React.FC<{}> = () => {
  const { isLoggedIn, isLoading, setAccessToken, setLoggedIn } = useSession();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const accessToken = params.get("accessToken");

  const [set, setSet] = React.useState(false);

  React.useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
      console.log(accessToken);
      setLoggedIn(true);
    }
    setSet(true);
  }, []);

  return (
    <>
      {isLoading || !set ? (
        <></>
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
