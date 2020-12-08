import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "../Routes/Login";
import Post from "../Routes/Post";
import SignUp from "../Routes/SignUp"
import Main from "../Routes/Main";
import Home from "../Routes/Home";
import IsAdminPage from "../Routes/isAdmin";
import Edit from "../Routes/edit";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/post/:id" component={Post} />
    <Route exact path="/isadmin" component={IsAdminPage} />
    <Route exact path="/edit" component={Edit} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Redirect from="*" to="/" />
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