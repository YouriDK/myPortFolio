import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { FC, useEffect, useState } from 'react';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Formation from './pages/Formation';
// import About from "./components/About";
// import SinglePost from "./components/SinglePost";
// import Post from "./components/Post";
// import Skill from "./components/Skill";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Professionnal from "./components/Professional";
// import Realisation from "./components/Realisation";

// import NavBarResponsive from "./Responsive-components/NavBarResponsive";

const App: FC = (): JSX.Element => {
  const [Glang, setGlobalLang] = useState('FR');
  const [setup, setsetup] = useState(false);
  function onChangeLang(lang: string): void {
    setGlobalLang(lang);
  }

  return (
    <BrowserRouter>
      <NavBar onChangeLang={onChangeLang} />
      {/* <NavBarResponsive onChangeLang={onChangeLang} value={Glang} /> */}
      <Switch>
        <Route
          render={(props) => <Formation value={Glang} />}
          path='/formation'
        />
        <Route
          component={Home}
          render={(props) => <Home value={Glang} />}
          path='/'
        />
        {/* <Route
           component={Home}
          render={(props) => <Home value={Glang} />}
          path="/"
          exact
        // * On ne veut pas de confusion donc on met exact  
        />
        <Route component={About} path="/about" />
        <Route
          component={SinglePost}
          path="/post/:slug"
          // *  On met celui ci avant car au cas où il trouve pas on passe à celle d'en bas , grace à Slug 
        />
        <Route component={Post} path="/post" />

        <Route
          render={(props) => <Professionnal value={Glang} />}
          path="/professional"
        />
        <Route
          render={(props) => <Realisation value={Glang} />}
          path="/realisation"
        />
        <Route render={(props) => <Skill value={Glang} />} path="/skill" />
        <Route
          render={(props) => <Formation value={Glang} />}
          path="/formation"
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
