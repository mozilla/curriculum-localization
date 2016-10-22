/*eslint-disable no-unused-vars*/
import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./pages/App.jsx";
import Home from "./pages/Home/Home.jsx";
import Instructions from "./pages/Instructions/Instructions.jsx";
import Curriculum from "./pages/Curriculum/Curriculum.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="instructions" component={ Instructions } />
    <Route path="curriculum" component={ Curriculum } />
    <Route path="contact" component={ Contact } />
  </Route>
);

export default routes;
