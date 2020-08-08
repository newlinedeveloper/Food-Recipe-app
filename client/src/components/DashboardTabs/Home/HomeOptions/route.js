import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import SubNav1 from './subNav1'


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard/home/subnav1" component={SubNav1} />
        <Redirect from='/dashboard/home' to='/dashboard/home/subnav1'/>
      </Switch>
    );
  }
}

export default Routes;
