import React from "react";
import {
  BrowserRouter as Router, Route,
  Routes
} from "react-router-dom";
import { PrivateRoute } from "./common/PrivateRoute";
import { routes } from "./router";

export default function Main() {
  const routeComponents = Object.values(routes).map((value, index) => (
    <Route
      key={index}
      path={value.path}
      exact={value.exact}
      element={
        <PrivateRoute
          title={value.title}
          component={value.component}
          titleBackground={value.titleBackground}
        />
      }
    />
  ));

  return (
    <Router>
      <Routes>{routeComponents}</Routes>
    </Router>
  );
}
