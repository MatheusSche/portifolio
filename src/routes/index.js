import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Portfolio from '../pages/Portifolio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  );
}