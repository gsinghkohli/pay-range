import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "./LoginScreen.jsx";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      {/* <Route path="/machines" component={Currency} /> */}
    </Switch>
  </BrowserRouter>
);
