import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  FaCog, FaBell, FaBomb, FaSearch,
} from 'react-icons/fa';

import Button from '../ui/button';
import { POPUP } from '../../state/types';

import ProfileBar from './profileBar';
import LoginBar from './loginBar';

const mapStateToProps = (state) => ({
  logined: state.user.logined,
  UserDetails: state.user.UserDetails,
});

function mapDispatchToProps(dispatch) {
  const a = {};
  return bindActionCreators(a, dispatch);
}

class menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    return (
      <div style={{ height: '3.5rem' }} className="flex mb-4 px-16 py-2 pt-3 bg-white shadow-md">

        <div className="float-left w-1/5 h-full flex flex-row justify-center">
          <Link to="/" className="w-auto h-full">
            <img className="w-auto h-full" src={pub.get("swiytPNG")} />
          </Link>
        </div>

        <div className="w-full h-full px-12 flex flex-wrap flex-row	justify-center">
          <FaBomb className="w-1/12 h-full p-2 text-red-600" />
          <div className="h-full w-11/12 px-4">
            <div className="h-full w-full rounded-full bg-gray-200 flex flex-wrap flex-row	justify-center">
              <form className="h-full w-full">
                <button type="submit" className="h-full float-right pr-3 focus:outline-none">
                  <FaSearch className="text-blue-400 " />
                </button>
                <input style={{ height: '36px' }} type="text" placeholder={t('header.searchbar')} className="outline-none bg-transparent absolute p-2 pr-8 w-2/5" />
              </form>
            </div>
          </div>
        </div>

        <div className="float-right w-4/12 h-full flex flex-wrap flex-row	justify-center">
          {this.props.logined==true ? <ProfileBar /> : <LoginBar/>}
        </div>

      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('translations')(menu));
