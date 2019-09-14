import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Teacher from '../components/ui/teacher-card';
import Helpers from '../helper';
import _ from 'lodash';
const {GetCourse,GetCourseWithAuth} = Helpers;

const mapStateToProps = (state) => ({
  user: state.user,
  logined: state.user.logined,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

class Course extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    const course = {
      adminNick : this.props.match.params.nick,
      courseName : this.props.match.params.course
    }
    this.localParams = course;
    this.getCourse();
  }
  state = {
    course:{},
  }
  getCourse = async() => {
    const { GetCourse, GetCourseWithAuth } = Helpers;
    const {adminNick,courseName} = this.localParams;
    if(this.props.logined){
      let course = await GetCourseWithAuth(adminNick,courseName);
    }
    else{
      let course = await GetCourse(adminNick,courseName);
    }
  }
  render(){
    return (
      <div>a</div>
    );
  };

}
export default (Course);
