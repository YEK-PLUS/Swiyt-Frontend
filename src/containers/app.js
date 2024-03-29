import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Helpers from '../helper';
import Home from './home';
import AllLessons from './allLessons';
import AllSubscriptions from './allSubscriptions';
import PopulerTeachers from './populerTeachers';
import PublicPage from './publicPage';
import PublicClass from './publicClass';
import * as UserActions from '../state/actions/user';
import {Pub,keys} from '../public';
import { Redirect } from 'react-router';
const { Route } = require('react-router-dom');
const { Switch } = require('react-router-dom');
import {Login,Singup,Forgotpassword} from '../components/popup';
import Header from '../components/header';
import Footer from '../components/footer';
global.pub = new Pub(keys);
const mapStateToProps = (state) => ({
  user: state.user,
  logined: state.user.logined
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.tryLogin();
  }

  tryLogin = async () => {
    const { get, remove, TryLogin } = Helpers;
    const { UserLogined, UserDetails } = this.props;
    const UserToken = get('UserToken') || false;
    if (UserToken) {
      const logined = await TryLogin();
      UserLogined((!!logined));
      if (logined) {
        return UserDetails(logined);
      }
      else{
        return remove('UserToken');
      }
    }
    return UserLogined(false);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lesson/all" component={AllLessons} />
          <Route path="/teachers/populer" component={PopulerTeachers} />
          <Route path="/user/:nick" component={PublicPage} />
          <Route path="/lesson/:nick/:course" component={PublicClass} />

          {
            this.props.logined==true
            ?
              <Route path="/lesson/subscriptions" component={AllSubscriptions} />
            :
              <Redirect to="/" />
          }
        </Switch>
        <Login/>
        <Singup/>
        <Forgotpassword/>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
