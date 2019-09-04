
import React from 'react';

/**
* props Object
* onClick function onClick handler
* (icon React.Component || null ) || text String
* hover [true,null]
* padding Object {x:4 y:5} className example (px-4 py-3) required
* extend String tailwindcss classes optional
* Background bg-red-600 default
* textcolor text-white default
* textsize text-xs default
*/
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    // if(this.props.padding == undefined){
    //   this.props = Object.assign({padding: {x:1,y:2}}, this.props);
    //   console.log(this.props.padding);
    // }
    this.padding = this.props.padding != undefined ? this.props.padding : { x: 0, y: 0 };
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        type="submit"
        className={
          `${'cursor-pointer '
          + 'w-auto h-auto '
          + 'rounded-full '
          + 'text-center '
          + 'focus:outline-none '}`
          + `px-${this.padding.x}` + ' '
          + `py-${this.padding.y}` + ` ${
            this.props.background || 'bg-red-600'} ${
            this.props.textcolor != undefined ? `text-${this.props.textcolor}` : 'text-white'} ${
            this.props.textsize != undefined ? `text-${this.props.textsize}` : 'text-xs'} ${
            this.props.extend || null} ${
            this.props.hover ? 'button_hover' : ''}`
}
      >
        {this.props.text != undefined ? this.props.text : <this.props.icon />}
      </button>
    );
  }
}
