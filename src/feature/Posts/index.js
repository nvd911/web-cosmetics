import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";
import NotFound from "../../component/NotFound";
import Search from "../Posts/component/Search";

function Posts(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={Search}></Route>
      <Route path={`${match.url}/:search`} component={Search}></Route>

      <Route component={NotFound}></Route>
    </Switch>
  );
}

Posts.propTypes = {};

export default Posts;
