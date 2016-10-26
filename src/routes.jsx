/*eslint-disable no-unused-vars*/
import React from "react";
import { Route, IndexRedirect } from "react-router";

import App from "./pages/App.jsx";

const path = require("path");

const ROOT = path.join("/", process.env.WEBSITE_ROOT || "").replace(/\/?$/, "/");

const routes = (
  <Route path={ ROOT }>
    <IndexRedirect to="about/" />
    <Route path=":tab/" component={ App } />
  </Route>
);

export default routes;
export { ROOT };
