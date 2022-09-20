import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import redux from './redux/store'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from './city'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={redux}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/city/:name" element={<City />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
