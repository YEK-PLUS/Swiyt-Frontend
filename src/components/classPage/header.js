import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdStar,MdStarHalf,MdStarBorder } from 'react-icons/md';
import _ from 'lodash';
import Button from '../ui/button';
import * as PopupActions from '../../state/actions/popup';
import Helpers from '../../helper';
import { FaHeart } from "react-icons/fa";
const mapStateToProps = (state) => ({
  logined: state.user.logined,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PopupActions, dispatch);
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    let catList = this.props.category
    let cats = [];
    cats.push(catList.name);
    while (_.has(catList,'parent')){
      catList = catList.parent;
      cats.push(catList.name);
    }
    this.cats = cats.reverse();
    this.wishList = this.wishList.bind(this);
    this.state = {wishLis:this.props.wishList}
  }
  componentWillReceiveProps(nextProps) {
  if (nextProps.wishList !== this.state.wishList) {
    this.setState({ wishList: nextProps.wishList });
  }
  if (nextProps.card !== this.state.card) {
    this.setState({ card: nextProps.card });
  }
}
  catLoad(){
    let {cats} = this;
    return (
      <div className={`w-full h-auto flex flex-row text-black breadcrumb`}>
        {cats.map(cat => <span key={cat}>{cat}</span>)}
      </div>
    );
  }
  loadTags(){
    return (
      <div className={`my-3`}>Tag Sistemi Bekleniyor</div>
    );
  }
  loadStar(){
    return (
      <div className={`flex flex-row justify-start items-center`}>
        <div>Puan:</div>
        {[...Array(~~this.props.rate)].map((x, i) =>
          <MdStar color={`#ecc94b`} key={i}/>
        )}
        {this.props.rate < 5 && this.props.rate - ~~this.props.rate >= 0.5 ?
          <MdStarHalf color={`#ecc94b`}/>
        :null}
        {[...Array(5 - ~~this.props.rate)].map((x, i) =>
          <MdStarBorder key={i} color={`#ecc94b`}/>
        )}
        <div>({this.props.rateCount})</div>
      </div>
    );
  }
  loadStudent(){
    return (
      <div className={`mx-4`}>{this.props.studentCount} Ogrenci</div>
    );
  }
  loadClassInfo(){
    return(
      <div className={`z-10 w-1/2`}>Egitmen : {this.props.teacher}</div>
    );
  }
  wishList = async() =>{
    if(this.props.logined!=true){
      return this.props.addLoginPopup();
    }
    const {ChangeWishList} = Helpers;
    const change = await ChangeWishList(this.props.lessonUid,{wish_list:!this.state.wishList});
    this.setState({wishList: !this.state.wishList})
  }
  card = async() =>{
    if(this.props.logined!=true){
      return this.props.addLoginPopup();
    }
    const {ChangeWishList} = Helpers;
    const change = await ChangeWishList(this.props.lessonUid,{card:!this.state.card});
    this.setState({card: !this.state.card})
  }
  render() {
    const wishList = this.state.wishList
    const card = this.state.card
    return (
      <div className={`my-2 flex flex-col bg-white border-b-2 border-red-500 items-end justify-end`}>
        <div className={`w-full`}>
          {this.catLoad()}
        </div>
        <div className={`w-full px-8 mt-4 flex flex-row`}>

          <div className={`w-1/4 h-auto rounded-lg`}>
            <img className={`w-full h-auto rounded-lg`} src={this.props.thub}/>
            <div className={`w-full h-8`}></div>
          </div>

          <div className={`w-3/4 px-4 pt-3 flex flex-col`}>

            <div className={`text-xl text-red-500`}>{this.props.title}</div>

            {this.loadTags()}

            <div className={`w-full my-3 flex flex-row justify-start items-center`}>
              {this.loadStar()}
              {this.loadStudent()}
            </div>
            {this.loadClassInfo()}

          </div>

        </div>
        <div className={`w-auto px-5 py-2 bg-red-500 pointer absolute rounded-t flex flex-row`}>
          <div onClick={this.wishList}>
            <FaHeart color={(wishList? 'black':'white')}/>
          </div>
          <div onClick={this.card}>
            <FaHeart color={(card? 'black':'white')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
