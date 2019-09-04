import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Helpers from '../helper';
import * as UserActions from '../state/actions/user';

const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.user.logined ? 'User Logined' : 'User Not Logined'}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
