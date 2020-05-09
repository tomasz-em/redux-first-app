import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // użycie krótszej nazwy, by nie pisać nadmiarowo

import './App.css';
import { Home } from './components/Home';
import { Chat } from './components/Chat';
import { PageNotFound } from './components/PageNotFound';


const App = () => {
  return (
    <Router>
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />

          <Route component={PageNotFound} />
        </Switch>  
      </section>
    </Router>
  );
}

export default App;
