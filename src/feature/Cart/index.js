import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../component/NotFound";
import CartPages from "./pages/CartPages";
import { useRouteMatch } from "react-router-dom";
import EmptyProduct from "./component/EmptyProduct";

function Cart(props) {
  const match = useRouteMatch();
  const url = match.url;

  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact component={CartPages} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
