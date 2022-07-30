import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import "./styles/index.css"

/* react route v6 */
import { BrowserRouter } from "react-router-dom";

/* redux */
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// reducers
import Reducers from "./redux/reducers/";
/* Store Redux */
const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
