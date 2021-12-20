import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter >
        <Switch location = {location} key={location.key}>
          <Route path="/result">
            <Result/>
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;