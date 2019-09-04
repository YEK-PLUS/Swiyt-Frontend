import React from 'react';

/**
* props Object
* get function onChange event
* icon react component
* padding Object {x:4 y:5} className example (px-4 py-3) required
* iconpadding Object {x:4 y:5} className example (px-4 py-3) required
* extend String tailwindcss classes optional
* Background bg-red-600 default
* iconBackground bg-red-600 default
* textcolor text-white default
* iconcolor text-white default
* textsize text-xs default
* iconsize text-xs default
*/
export default class IconInput extends React.Component{
  constructor(props){
    super(props);
    this.padding = this.props.padding !=undefined ? this.props.padding : {x:0,y:0};
    this.iconpadding = this.props.iconpadding !=undefined ? this.props.iconpadding : {x:0,y:0};
  }
  render(){
    return (
      <div className={
          "w-full h-auto "+
          "rounded-full "+
          "border-gray-300 border "+
          "flex flex-row justify-center items-center "+
          (this.props.extend || "")+ " "+
          ("px-" + this.padding.x)+ " "+
          ("py-" + this.padding.y)+ " "}>
        <div className={
          "w-auto h-auto "+
          "rounded-full "+
          "text-center "+
          ("px-" + this.iconpadding.x)+ " "+
          ("py-" + this.iconpadding.y)+ " "+
          (this.props.iconbackground != undefined ? "bg-"+this.props.iconbackground : "bg-red-600")+ " " +
          (this.props.iconcolor != undefined ? "text-"+this.props.iconcolor : "text-white")+ " " +
          (this.props.iconsize != undefined ? "text-"+this.props.iconsize : "text-xs")
        }>
          <this.props.icon/>
        </div>
        <input onChange={this.props.get} type={(this.props.Itype != undefined)?this.props.Itype:"text"} name={this.props.name} placeholder={this.props.text} className={
          "w-full h-auto ml-2 "+
          "focus:outline-none "+
          (this.props.background != undefined ? "bg-"+this.props.background : "bg-transparent")+ " " +
          (this.props.textcolor != undefined ? "text-"+this.props.textcolor : "text-red-600")+ " " +
          (this.props.textsize != undefined ? "text-"+this.props.textsize : "text-xs")
          }/>
      </div>
    );
  };

}
