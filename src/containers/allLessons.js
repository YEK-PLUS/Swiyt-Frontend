import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CourseCard from '../components/ui/course-card';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Helpers from '../helper';
const mapStateToProps = (state) => ({
  logined: state.user.logined,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.syncCourses();
  }
  state = {
    courses:{},
    loading:[
      1,2,3,4,5
    ],
  }
  syncCourses = async() => {
    const {GetAllPopulerCourses} = Helpers;
    let AllCourses = await GetAllPopulerCourses();
    this.setState({courses:AllCourses});
  }
  render() {
    return (
      <div className="w-full flex flex-wrap flex-col py-4 px-8 mt-4">
        <div className="w-full text-center text-gray-600 font-black	text-4xl">
          Popüler Kurslar
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
