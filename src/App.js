import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route
          component={Home}
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
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
