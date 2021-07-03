import React from "react";
import firebase from "firebase";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import PropTypes from "prop-types";
import "./singnIn.scss";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn(props) {
  return (
    <div className="sign-in">
      <h1 className="sign-in__title">Login Accounts </h1>
      <span className="sign-in__text">or login with social accounts</span>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
