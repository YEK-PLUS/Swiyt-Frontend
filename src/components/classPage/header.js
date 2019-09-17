import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Button from '../ui/button';
import * as PopupActions from '../../state/actions/popup';

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
    this.cats = cats
  }
  catLoad(){


    return (
      <div className={`w-auto h-auto flex flex-row text-black breadcrumb`}>
        {this.cats.reverse().map(cat => <span>{cat}</span>)}
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
      <div>Puan: ****</div>
    );
  }
  loadStudent(){
    return (
      <div className={`mx-4`}>X Ogrenci</div>
    );
  }
  loadClassInfo(){
    return(
      <div className={`z-10 w-1/2`}>Egitmen : {this.props.teacher}</div>
    );
  }
  render() {
    return (
      <div className={`px-20 flex flex-col bg-white`}>
        {this.catLoad()}
        <div className={`w-full px-8 mt-4 flex flex-row`}>

          <div className={`w-1/4 h-auto rounded-lg`}>
            <img className={`w-full h-auto rounded-lg`} src={this.props.thub}/>
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
        <div style={{top:`-1rem`}} className={`relative flex flex-row justify-end items-center w-full text-white border-b-4 border-red-500`}>
          <div className={`px-6 py-2 bg-red-500 animation hover:bg-red-400 hover:bg-gray-100 rounded-t cursor-pointer`}>
            Sepete Ekle
          </div>
        </div>
      </div>
    );
  }
}

export default (Header);
