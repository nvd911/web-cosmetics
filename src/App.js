import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import { onGetCart } from "./feature/Cart/cartSlice";
import EmptyProduct from "./feature/Cart/component/EmptyProduct";
import HomePages from "./feature/Home";
import { onAuth } from "./feature/Auth/authSlice";

const Products = React.lazy(() => import("./feature/Products"));
const Cart = React.lazy(() => import("./feature/Cart"));
const Posts = React.lazy(() => import("./feature/Posts"));
const Pay = React.lazy(() => import("./feature/Pay"));
const Auth = React.lazy(() => import("./feature/Auth"));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if ("cart" in localStorage) {
      dispatch(onGetCart(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    //
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
        } else {
          dispatch(onAuth(user.displayName));
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div>
          <Header />
        </div>

        <Switch>
          <Route exact path="/" component={HomePages}></Route>
          <Route path="/san-pham" component={Products}></Route>
          <Route path="/gio-hang" component={Cart}></Route>
          <Route path="/message-empty" component={EmptyProduct}></Route>
          <Route path="/bai-viet" component={Posts}></Route>
          <Route path="/thanh-toan" component={Pay}></Route>
          <Route path="/auth" component={Auth}></Route>
          <Route component={NotFound}></Route>
        </Switch>

        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

App.propTypes = {};

export default App;
