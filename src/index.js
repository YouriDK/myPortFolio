import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap/bootstrap.min.css";
import "./bootstrap/bootstrap-grid.min.css";
import "./css/CSScomponents/index.css";
/* import css*/

import "./css/CSScomponents/Home.css";
import "./css/CSScomponents/NavBar.css";
import "./css/CSScomponents/Formation.css";
import "./css/CSScomponents/Professionnal.css";
import "./css/CSScomponents/Skills.css";

import "./css/CSStools/Button.css";
import "./css/CSStools/Background.css";
import "./css/CSStools/Card.css";
import "./css/CSStools/Light.css";
import "./css/CSStools/SkillBar.css";

import "./css/Responsive.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
