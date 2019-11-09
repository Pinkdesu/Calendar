import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./App/App.js";
import store from "./App/store.js";
import 'moment/locale/ru';
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Calendar />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
