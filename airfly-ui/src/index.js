import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Register from './Register';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LetComponent from "./LetComponent";

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
        <Route path="/login" component={Login}/>
        <Route exatc path="/" component={App} />
        <Route path='/register' component={Register} />
      </Switch>
      </Router>
     <LetComponent></LetComponent>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
