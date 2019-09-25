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
    loadedAuth : false
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
      this.setState({course : await GetCourseWithAuth(adminNick,courseName)})
    }
    else if (this.props.logined != 'loading'){
      this.setState({course : await GetCourse(adminNick,courseName)})
    }
  }
  loadCourse(){
    const lesson = this.state.course.lessons[0];
    const {Header,Desc,Comment,AboutTeacher} = ClassComponents;
    const {banner,category,name,subscriptions,rate,comments,uid,description} = lesson;
    const wishList = _.has(lesson,'wishList')?lesson.wishList.wish_list : false;
    const card = _.has(lesson,'wishList')?lesson.wishList.card : false;
    return (
      <div>
        <Header
          thub={banner.cdn.url}
          category={category}
          title={name}
          studentCount={subscriptions}
          rate={rate}
          rateCount={_.size(comments)}
          teacher={this.state.course.realname}
          lessonUid={uid}
          wishList={wishList}
          card={card}
          />
        <Desc desc={description} />
        <AboutTeacher
          username={this.state.course.username}
          img={this.state.course.image.cdn.url}
          text={lesson.admin.userDetails.biography}
          name={this.state.course.realname}
          />
        <Comment comments={comments} />
      </div>
    );
  }
  render(){
    if(this.props.logined == true && !this.state.loadedAuth){
      this.setState({loadedAuth:true})
      this.getCourse();
    }
    const {Header,Desc,Comment} = ClassComponents;
    return (
      <div className={`px-20 bg-gray-100`}>
        {_.has(this.state.course,'uid')?this.loadCourse():null}
      </div>
    );
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(Course);
