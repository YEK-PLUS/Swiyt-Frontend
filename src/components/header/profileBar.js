import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaCog, FaBell } from 'react-icons/fa';

import Button from '../ui/button';

const mapStateToProps = (state) => ({
  UserDetails: state.user.UserDetails,
});

function mapDispatchToProps(dispatch) {
  const a = {};
  return bindActionCreators(a, dispatch);
}

class profileBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" h-full flex flex-wrap flex-row	justify-center">
        <div className="w-9/12 px-1 flex flex-wrap flex-row justify-around items-center">

          <div className="w-auto flex flex-wrap flex-row	justify-around items-center">
            <Button background="transparent" textcolor="red-600" textsize="lg" extend="mx-1" icon={FaBell} />
            <Button background="transparent" textcolor="red-600" textsize="lg" extend="mx-1" icon={FaCog} />
          </div>

          <Button onClick={this.props.addLessonPopup} padding={{ x: 4, y: 1 }} hover text="Eğitim" />

        </div>

        <Link to={`/user/${this.props.username}`} className="h-full button_hover w-3/12 px-2 flex items-center justify-center">
          <div className="rounded-full h-full w-full flex items-center justify-center" />
        </Link>

      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(profileBar);
