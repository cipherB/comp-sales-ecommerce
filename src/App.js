import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Computers from './pages/Computers';
import SingleComp from './pages/SingleComp'
import Error from './pages/Error';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/computers" component={Computers} />
        <Route exact path="/computers/:slug" component={SingleComp} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
