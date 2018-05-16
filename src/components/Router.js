import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import PageSaver from "./PageSaver";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PageSaver} />
			<Route path="/y4t6" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
