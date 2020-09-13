import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Talks from './pages/Talks';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Switch>
      <Route path="/contact" component={Contact}/>
      <Route path="/work" component={Work}/>
      <Route path="/talks" component={Talks}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/about" component={Home}/>
      <Route path="/" component={Home}/>
      <Route path="*" component={Home}/>
    </Switch>
  );
}

export default App;