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
        {_.size(this.state.references) !== 0 ? <div className="w-full text-center text-gray-600 font-black	text-4xl">
          Referanslarimiz
        </div>:null}
      </div>

			<div className="w-full pl-4 pt-8 flex flex-wrap flex-row">
        {this.state.references.map(reference =>
            <a key={`reference-`+reference.id} href={reference.url} className={`w-1/4 flex flex-col`}>
              <img style={{filter:`grayscale(100%)`}} className={`w-full h-auto`} src={reference.image.cdn.url}/>
            </a>
          )}


			</div>


		</div>
    );
  };

}
export default (teachers);
