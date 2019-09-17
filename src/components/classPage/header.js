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
      <div>Tag Sistemi Bekleniyor</div>
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

            <div className={`w-full flex flex-row justify-start items-center`}>
              {this.loadStar()}
              {this.loadStudent()}
            </div>

          </div>

        </div>
        <div style={{top:`-2rem`}} className={`relative flex flex-row justify-end items-center w-full  border-b-4 border-red-500`}>
          <div className={`px-6 py-4 bg-red-500 rounded-t`}>
            Sepete Ekle
          </div>
        </div>
      </div>
    );
  }
}

export default (Header);
