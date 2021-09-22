import React from "react";
import { PostContainer, MainLayout } from "../Containers/index";
import { PrivateRoute, AppRoute } from "../Router/index";
import { Switch, Redirect } from "react-router-dom";
import {
  Blog,
  Checkout,
  About,
  OrdersPage,
  HomePage,
  LoginPage,
  RegisterPage,
  Error,
} from "../pages/index";

export default function Routes(params) {
  return (
    <Switch>
      <AppRoute exact path="/" layout={MainLayout} component={HomePage} />
      <AppRoute exact path="/about" layout={MainLayout} component={About} />
      <AppRoute exact path="/login" layout={MainLayout} component={LoginPage} />
      <AppRoute
        exact
        path="/register"
        layout={MainLayout}
        component={RegisterPage}
      />
      <AppRoute exact path="/blog" layout={MainLayout} component={Blog} />
      <AppRoute
        exact
        path="/blog/:uid"
        layout={MainLayout}
        component={PostContainer}
      />
      <PrivateRoute
        exact
        path="/checkout"
        layout={MainLayout}
        component={Checkout}
      />
      <PrivateRoute
        exact
        path="/orders"
        layout={MainLayout}
        component={OrdersPage}
      />
      <AppRoute path="/404" layout={MainLayout} component={Error} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
}
