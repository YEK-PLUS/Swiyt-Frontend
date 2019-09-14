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
      <div className={`w-auto h-auto flex flex-row text-teal-800 breadcrumb`}>
        {this.cats.reverse().map(cat => <span>{cat}</span>)}
      </div>
    );
  }
  render() {
    return (
      <div className="w-full h-auto flex flex-col px-8 bg-white">
        {this.catLoad()}
        <div className={`w-full px-16 my-8 flex flex-row justify-center`}>
          <div className={`w-1/3 h-auto rounded-lg`}>
            <img className={`w-full h-auto rounded-lg`} src={this.props.thub}/>
          </div>
          <div className={`w-auto p-4 flex flex-col`}>
            <div className={`text-xl text-red-500`}>{this.props.title}</div>
            <div>Tag Sistemi Bekleniyor</div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Header);
