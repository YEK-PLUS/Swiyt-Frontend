import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

class Desc extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`w-full h-auto flex flex-col bg-white px-4 my-4 shadow`}>
        <div className={`w-full text-left py-3 font-black text-lg`}>Aciklama</div>
        <div className={`w-full text-left`}>{this.props.desc}</div>
      </div>
    );
  }
}

export default (Desc);
