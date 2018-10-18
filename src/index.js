import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'
import appStore from './components/store';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>
, document.getElementById("root"));