import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import "./css/app.css";
import Routing from "./Routing";
import store from "./store";
import { theme } from "./themeConfig";
library.add(fab, faAngleRight, faArrowAltCircleUp);

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Routing />
        </MuiThemeProvider>
      </Provider>
    </>
  );
};

export default Main;
