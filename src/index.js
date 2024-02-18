import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import CricketerProvider from "./useContext/CricketerProvider";




ReactDOM.render(
  <CricketerProvider>
    <App/>
  </CricketerProvider>
  ,
  document.getElementById("root"))