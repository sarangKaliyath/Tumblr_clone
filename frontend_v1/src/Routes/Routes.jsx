import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { SignupPage } from "../Pages/SignupPage/SignupPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import SelectTag from "../Components/SelectTags/tags";
import Home from "../Components/Home/Home";
import { ForYou } from "../Pages/Explore/ForYou";
import { Navbar } from "../Components/Navbar/Navbar";

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
        <Navbar page = {"home"}/>
        <Home />
      </Route>  
      <Route path="/explore">
      <Navbar page = {"explore"}/>
        <ForYou />
      </Route> 
    </Switch>
  );
};
