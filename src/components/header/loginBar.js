import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../ui/button';
import * as PopupActions from '../../state/actions/popup';
const mapStateToProps = (state) => ({

});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PopupActions, dispatch);
}

class loginBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-auto h-full flex flex-wrap flex-row	justify-around items-center">

        <Button onClick={this.props.addLoginPopup} extend="border border-red-600" padding={{ x: 4, y: 2 }} hover background="bg-white" textcolor="red-600" text="Oturum Aç" />
        <Button onClick={this.props.addSingupPopup} extend="ml-3" padding={{ x: 4, y: 2 }} hover text="Kayıt Ol" />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginBar);
