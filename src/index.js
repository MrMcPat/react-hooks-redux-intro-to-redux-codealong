import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; /* code change */
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

const store = createStore(counterReducer); /* code change */

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> /* code change */,
    document.getElementById("root")
  );