import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../ui/course-card';
import Helpers from '../../helper';
import _ from 'lodash';
const {GetPopulerCourses,GetSubscriptions} = Helpers;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  logined: state.user.logined,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

class courses extends React.Component{
  constructor(props){
    super(props);
    this.syncCourses();
  }
  state = {
    courses:{},
    loading:[
      1,2,3,4,5
    ],
    subs:{},
    subsLoading:true,
  }
  syncCourses = async() => {
    let populerCourses = await GetPopulerCourses();
    this.setState({courses:populerCourses});
    if(this.props.logined==true){
      let subscriptions = await GetSubscriptions();
      this.setState({subs:subscriptions});
    }
  }
  render(){
    return (
		<div className="w-full flex flex-wrap flex-col py-4 px-8 mt-4">
      {this.props.logined&&_.size(this.state.subs) !== 0?
        <div className="w-full">
          <div className="w-full flex flex-wrap flex-row justify-between">
            <div className="text-gray-600">Abonelikler</div>
              <Link to={`/lesson/subscriptions`} className="text-gray-800 cursor-pointer">
                <span>Tümünü Gör</span>
              </Link>
          </div>

          <div className="w-full pl-4 pt-8 flex flex-wrap flex-row">

            {this.state.subs.map(b =><CourseCard
                key={b.lesson.uid}
                uid={b.lesson.uid}
                teacher={b.lesson.admin.username}
                title={b.lesson.name}
                price={b.lesson.price}
                image={b.lesson.thub.cdn.url}/>
              )}

          </div>
      </div>
      :null}
			<div className="w-full flex flex-wrap flex-row justify-between">
				<div className="text-gray-600">Popüler Kurslar</div>
          <Link to={`/lesson/all`} className="text-gray-800 cursor-pointer">
            <span>Tümünü Gör</span>
          </Link>

			</div>

			<div className="w-full pl-4 pt-8 flex flex-wrap flex-row">

        {_.size(this.state.courses) !== 0 ?this.state.courses.map(b =>
          <CourseCard
            key={b.uid}
            uid={b.uid}
            teacher={b.admin.username}
            title={b.name}
            price={b.price}
            image={b.thub.cdn.url}/>):
            this.state.loading.map(b=><CourseCard key={b}/>)
          }

			</div>


		</div>
    );
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(courses);
