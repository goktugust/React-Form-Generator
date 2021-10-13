import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Form from "./Form";
import FormFinish from "./FormFinish";
// import FormTry from "./FormTry";

const router = (
  <Router>
    <Route path="/" exact component={FormFinish}></Route>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));