import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
// import { HashRouter, Route, Link, Redirect } from "react-router-dom";
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";

// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#33c9dc",
//       main: "#FF5722",
//       dark: "#d50000",
//       contrastText: "#fff",
//     },
//   },
// });

function App() {
  return (
    // <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dodo-list" />
          </Route>
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/dodo-list" component={home} />
        </Switch>
      </div>
    </Router>
    //   {/* <HashRouter basename="/">
    //     <div>

    //       <Route exact path="/" component={home} />
    //       <Route path="/login" component={login} />
    //       <Route path="/signup" component={signup} />
    //     </div>
    //   </HashRouter> */}
    // </MuiThemeProvider>
    // <div>this is dodo list</div>
  );
}
export default App;
