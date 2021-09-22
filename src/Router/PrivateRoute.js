import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({
  component: Component,
  layout: Layout,
  loggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      // loggedIn
      true ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/register" />
      )
    }
  />
);
const mapStateToProps = function (state) {
  // console.log(state.authReducer.isLoggedIn);
  return {
    loggedIn: state.authReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
