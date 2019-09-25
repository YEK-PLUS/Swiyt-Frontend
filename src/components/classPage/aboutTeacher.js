import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Helpers from '../../helper';
const {createUrl} = Helpers;
class aboutTeacher extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {img,text,name,username} = this.props;
    return (
      <div className={`w-full py-4 flex flex-col`}>
        <div className={`w-full text-left font-bold text-lg my-2`}>
          Egitmen Hakkinda
        </div>
        <div className={`w-full my-2 bg-white shadow flex flex-row`}>
          <Link to={(createUrl(`/user/`+username))} className={`w-1/12 h-auto mr-3`}>
            <img src={img} className={`w-full h-auto mx-auto relative rounded-full`} style={{top:`0px`,left:`-5px`}}/>
          </Link>
          <div className={`w-full flex flex-col`}>
            <Link to={(createUrl(`/user/`+username))} className={`w-full flex flex-row py-4 text-lg text-red-500`}>{name}</Link>
            <div className={`w-full`}>{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default (aboutTeacher);
