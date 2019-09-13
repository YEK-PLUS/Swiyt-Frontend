import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teacher from '../ui/teacher-card';
import Helpers from '../../helper';
import _ from 'lodash';
const {GetSwiytComments} = Helpers;

class teachers extends React.Component{
  constructor(props){
    super(props);
    this.syncCourses();
  }
  state = {
    comments:[]
  }
  syncCourses = async() => {
    let comments = await GetSwiytComments();
    this.setState({comments});
  }
  loadCourses(){
    return this.state.comments.map(comment =>
        <div key={`comment-`+comment.id}>
          <div className='px-3 py-2'>
            <div className={`w-full shadow-md flex flex-col justify-center`}>
              <div className={`w-full h-auto flex flex-row justify-center`}>
                <img style={{height:`25%`}} className={`w-1/4 rounded-full`} src={comment.image.cdn.url}/>
              </div>
              <div className={`w-full text-center text-lg font-black`}>
                {comment.name}
              </div>
              <div className={`w-full text-center`}>
                {comment.user_comment}
              </div>

            </div>
          </div>
        </div>

      );
  }
  render(){
    const settings = {
      dots: true,
      arrows : false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
		<div className="w-full flex flex-wrap flex-col py-4 px-8 mt-4">

      <div className="w-full flex flex-wrap flex-row justify-between">
        {_.size(this.state.comments) !== 0 ? <div className="w-full text-center text-gray-600 font-black	text-4xl">
          Kullanici geri donusleri
        </div>:null}
      </div>
      <div className="w-full px-16 comments-page">
			     <Slider {...settings} >
             {this.loadCourses()}
             {this.loadCourses()}
             {this.loadCourses()}
             {this.loadCourses()}
             {this.loadCourses()}
			        </Slider>
      </div>


		</div>
    );
  };

}
export default (teachers);
