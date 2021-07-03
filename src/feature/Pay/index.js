import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";
import NotFound from "../../component/NotFound";
import PayPages from "./pages/PayPages";
import SuccessPay from "./component/SuccessPay";

function Posts(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={PayPages}></Route>
      <Route
        path={`${match.url}/tao-don-thanh-cong`}
        exact
        component={SuccessPay}
      ></Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
}

Posts.propTypes = {};

export default Posts;
