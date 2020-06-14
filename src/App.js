import React from 'react';
import { Header } from './features/header/Header';
// import { Home } from './features/home/Home';
// import { AboutMe } from './features/aboutMe/AboutMe';
// import { MyWork } from './features/myWork/MyWork';
// import { ContactMe } from './features/contactMe/ContactMe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {
  Pages,
  PagesUrl,
  PagesName,
} from './constants';

function App() {
  return (
    <Router>
      <Header />
      {/* {/* <main> */}
      <Switch>
        <Route path={PagesUrl[Pages.aboutMe]}>
          {PagesName[Pages.aboutMe]}
          {/* <AboutMe /> */}
        </Route>
        <Route path={PagesUrl[Pages.myWork]}>
          {PagesName[Pages.myWork]}
          {/* <MyWork /> */}
        </Route>
        <Route path={PagesUrl[Pages.contactMe]}>
          {PagesName[Pages.contactMe]}
          {/* <ContactMe /> */}
        </Route>
        <Route path={PagesUrl[Pages.home]}>
          {PagesName[Pages.home]}
          {/* <Home /> */}
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
