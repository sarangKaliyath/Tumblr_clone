import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { SignupPage } from "../Pages/SignupPage/SignupPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import SelectTag from "../Components/SelectTags/tags";
import Home from "../Components/Home/Home";

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
      <Route path="/selectTags">
        <SelectTag />
      </Route>
      <Route path="/home">
        <Home />
      </Route>   
    </Switch>
  );
};
