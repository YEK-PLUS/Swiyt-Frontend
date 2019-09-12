import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from '../ui/course-card';
export default class Portfoy extends React.Component {
  constructor(props){
    super(props);
  }
  loadCourses(){
    const card = (c) => {
      return (
        <CourseCard
          key={c.uid}
          uid={c.uid}
          teacher={c.admin.username}
          title={c.name}
          price={c.price}
          image={c.thub.cdn.url}/>
      );
    }
    let a = [];
    let b = this.props.courses;
    for (let v in b){
      let c = b[v];
      a.push(card(c));
    }
    while (a.length < 6) {
      for (let v in b){
        let c = b[v];
        a.push(card(c));
      }
    }
    return a;
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    if(this.props.courses){
      return (
        <div className="w-full py-4 bg-gray-200">
          <div className="w-full text-center text-black text-2xl">Courses</div>
          <div className="w-full px-16 overflow-hidden public-page">
            <Slider {...settings}>
              {this.loadCourses().map((a)=>a)}
            </Slider>
          </div>
        </div>
      );
    }
    return(<div></div>);
  }
}
