import React from 'react';
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Helpers from '../helper';
import Home from './home';
import * as UserActions from '../state/actions/user';
const mapStateToProps = state => ({
  user:state.user,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.tryLogin();
  }
  tryLogin = async() => {
      const {get,set,TryLogin} = Helpers;
      const {UserLogined,UserDetails} = this.props;
      const UserToken = get('UserToken') || false;
      if(UserToken){
        const logined = await TryLogin();
        UserLogined((logined?true:false));
        if(logined){
          UserDetails(logined);
        }
      }
  }
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
