import { FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn,FaYoutube,FaLink } from 'react-icons/fa';
import React from 'react';
import {FaPencilAlt} from "react-icons/fa";
import {Link} from 'react-router-dom';
class Head extends React.Component{
  constructor(props){
    super(props);
  }
  loadConnections(){
    let a = [];
    let b = this.props.data.user_details.links;
    for (let v in b) {
      switch (v) {
        case "facebook":
          a.push( <a  key={v.toString()} href={b[v]} ><FaFacebook className="mx-1" size="1.5rem"/></a> );
          break;
        case "twitter":
          a.push( <a  key={v.toString()} href={b[v]} ><FaTwitter className="mx-1" size="1.5rem"/></a> );
          break;
        case "instagram":
          a.push( <a  key={v.toString()} href={b[v]} ><FaInstagram className="mx-1" size="1.5rem"/></a> );
          break;
        case "linkedin":
          a.push( <a  key={v.toString()} href={b[v]} ><FaLinkedinIn className="mx-1" size="1.5rem"/></a> );
          break;
        case "youtube":
          a.push( <a  key={v.toString()} href={b[v]} ><FaYoutube className="mx-1" size="1.5rem"/></a> );
          break;
        default:
          a.push( <a  key={v.toString()} href={b[v]} ><FaLink className="mx-1" size="1.5rem"/></a> );
      }
    }
    return a;

  }
  render(){
    const {banner,picture,title} = this.props.data.user_details;
    const {username,realname} = this.props.data;

    const hasBanner = ( Object.keys(banner).length >= 0 &&
                        Object.keys(banner.cdn).length >= 0 &&
                        banner.cdn.url);
    return (
      <div className={"w-full rounded-lg shadow-lg pb-2 my-8 " + (!hasBanner?"pt-2":"")}>

        { hasBanner ?
          <div className="w-full rounded-lg rounded-b-none" style={{height:"22rem"}}>
            <img className="w-full h-full mx-auto rounded-lg rounded-b-none" src={banner.cdn.url}/>
          </div>
        :null}

        <div className="flex flex-row justify-between items-center flex-wrap px-16">

          <div style={{transform:(hasBanner?"translateY(calc(-6rem/4))":"")}} className="w-24 h-24 rounded-full">
            <img className="w-full h-full rounded-full" src={picture.cdn.url}/>
          </div>

          <div style={{marginRight:"25rem"}} className="w-auto flex flex-col flex-wrap justify-center ">
            <span className="font-bold text-2xl">{realname||username}</span>
            {title?<span className="font-medium text-xl">{title}</span>:null}
          </div>

          <div className="px-8 w-auto flex flex-row justify-center items-center flex-wrap">
            {this.loadConnections().map( (a) => a)}
          </div>

        </div>

      </div>
    );
  };

}
export default (Head);
