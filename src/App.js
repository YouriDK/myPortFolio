import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Skill from "./components/Skill";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Professionnal from "./components/Professional";
import Realisation from "./components/Realisation";
import Formation from "./components/Formation";
import NavBarResponsive from "./Responsive-components/NavBarResponsive";

function App() {
  const [Glang, setGLang] = useState("FR");

  function onChangeLang(lang) {
    setGLang(lang);
  }
  return (
    <BrowserRouter>
      <NavBar onChangeLang={onChangeLang} />
      <NavBarResponsive onChangeLang={onChangeLang} value={Glang} />
      <Switch>
        <Route
          /* component={Home}*/
          render={(props) => <Home value={Glang} />}
          path="/"
          exact
          //* On ne veut pas de confusion donc on met exact  */
        />
        <Route component={About} path="/about" />
        <Route
          component={SinglePost}
          path="/post/:slug"
          //*  On met celui ci avant car au cas où il trouve pas on passe à celle d'en bas , grace à Slug */
        />
        <Route component={Post} path="/post" />

        <Route
          render={(props) => <Professionnal value={Glang} />}
          path="/professional"
        />
        <Route component={Realisation} path="/realisation" />
        <Route render={(props) => <Skill value={Glang} />} path="/skill" />
        <Route
          render={(props) => <Formation value={Glang} />}
          path="/formation"
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
