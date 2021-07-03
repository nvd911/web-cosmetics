import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductsPages from "./pages/ProductsPages";
import Detail from "./pages/Detail";
import NotFound from "../../component/NotFound";

function Products(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={ProductsPages}></Route>
      <Route path={`${match.url}/:id/:name`} exact component={Detail}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
}

Products.propTypes = {};

export default Products;
