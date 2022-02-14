// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Example1 from '../views/Example1';
import Example2 from '../views/Example2';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Example1} />
        <Route exact path="/example1" component={Example1} />
        <Route exact path="/example2" component={Example2} />
      </Switch>
    </div>
  );
}
