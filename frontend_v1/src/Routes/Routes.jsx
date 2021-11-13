import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { SignupPage } from "../Pages/SignupPage/SignupPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/signUp">
        <SignupPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};
