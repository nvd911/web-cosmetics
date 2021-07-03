import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../component/NotFound";
import SignIn from "./component/SignIn";

function Cart(props) {
  const match = useRouteMatch();
  const url = match.url;

  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
