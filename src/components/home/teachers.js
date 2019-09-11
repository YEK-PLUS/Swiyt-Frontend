import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Teacher from '../ui/teacher-card';
import Helpers from '../../helper';
import _ from 'lodash';
const {GetPopulerTeachers} = Helpers;

class teachers extends React.Component{
  constructor(props){
    super(props);
    this.syncCourses();
  }
  state = {
    populerTeachers:{},
    loading:[
      1,2,3,4,5
    ],
  }
  syncCourses = async() => {
    let populerTeachers = await GetPopulerTeachers();
    this.setState({populerTeachers:populerTeachers});
  }
  render(){
    return (
		<div className="w-full flex flex-wrap flex-col py-4 px-8 mt-4">

      <div className="w-full flex flex-wrap flex-row justify-between">
        <div className="text-gray-600">Populer Ogretmenler</div>
          <Link to={`/teachers/populer`} className="text-gray-800 cursor-pointer">
            <span>Tümünü Gör</span>
          </Link>
      </div>

			<div className="w-full pl-4 pt-8 flex flex-wrap flex-row">
        {_.size(this.state.populerTeachers) !== 0 ?
          this.state.populerTeachers.map(user =>
            <Teacher
              image={user.image.cdn.url}
              teacher={user.realname||user.username}
              courses={user.lessons}
              username={user.username}
              key={user.uid}/>
          ):
          this.state.loading.map(user=> <Teacher key={user} courses={[]}/> )
        }


			</div>


		</div>
    );
  };

}
export default (teachers);
