import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Teacher from '../components/ui/teacher-card';
import Helpers from '../helper';
import * as ClassComponents from '../components/classPage';
import _ from 'lodash';
const {GetCourse,GetCourseWithAuth} = Helpers;

const mapStateToProps = (state) => ({
  user: state.user,
  logined: state.user.logined,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

class Course extends React.Component{
  constructor(props){
    super(props);
    this.getCourse();
  }
  state = {
    course:{},
  }
  getCourse = async() => {
    const courseParams = {
      adminNick : this.props.match.params.nick,
      courseName : this.props.match.params.course
    }
    const { GetCourse, GetCourseWithAuth } = Helpers;
    const {adminNick,courseName} = courseParams;
    let course;
    if(this.props.logined == true){
      course = await GetCourseWithAuth(adminNick,courseName);
    }
    else{
      course = await GetCourse(adminNick,courseName);
    }
    console.log(await course)
    this.setState({course})
  }
  render(){
    const {Header} = ClassComponents;
    return (
      <div>
        {_.has(this.state.course,'uid')?
        <Header
          thub={this.state.course.lessons[0].banner.cdn.url}
          category={this.state.course.lessons[0].category}
          title={this.state.course.lessons[0].name}
          teacher={this.state.course.realname}
          />
        :null}
      </div>
    );
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(Course);
