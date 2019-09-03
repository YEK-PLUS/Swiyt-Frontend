import React from 'react';
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;
import PropTypes from 'prop-types';

import Home from './home';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
};

export default App;
