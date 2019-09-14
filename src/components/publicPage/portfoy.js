import React from "react";
import Slider from "react-slick";
import CourseCard from '../ui/course-card';
export default class Portfoy extends React.Component {
  constructor(props){
    super(props);
  }
  loadPortfoy(){
    const card = (c) => {
      return (
        <CourseCard
          key={c.uid}
          uid={c.uid}
          title={c.title}
          teacher={c.name}
          price={"free"}
          url={c.link}
          image={c.img}/>
      );
    }
    let a = [];
    let b = this.props.portfoy;
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
    if(this.props.portfoy){
      return (
        <div className="w-full py-4 bg-gray-200">
          <div className="w-full text-center text-black text-2xl">Portfoy</div>
          <div className="w-full px-16 overflow-hidden public-page">
            <Slider {...settings}>
              {this.loadPortfoy().map((a)=>a)}
            </Slider>
          </div>
        </div>
      );
    }
    return(<div></div>);
  }
}
