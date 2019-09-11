import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Teacher from '../ui/teacher-card';
import Helpers from '../../helper';
import _ from 'lodash';
const {GetReferences} = Helpers;

class teachers extends React.Component{
  constructor(props){
    super(props);
    this.syncCourses();
  }
  state = {
    references:[]
  }
  syncCourses = async() => {
    let references = await GetReferences();
    this.setState({references});
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
        {this.state.references.map(reference =>
            <div>{reference.name}</div>
          )}


			</div>


		</div>
    );
  };

}
export default (teachers);
