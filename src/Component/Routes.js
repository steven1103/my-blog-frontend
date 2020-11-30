import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Routes/Login";
import Post from "../Routes/Post";
import SignUp from "../Routes/SignUp"
import Main from "../Routes/Main";
const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Post} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;