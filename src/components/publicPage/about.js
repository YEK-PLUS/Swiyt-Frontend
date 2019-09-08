import React from 'react';

export default class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.props.about?
          <div className="w-full rounded-lg py-3 shadow-lg px-6 py-3 my-8">
            <h4 className="w-full text-2xl py-4 font-bold">
              Eğitmen Hakkında
            </h4>
            <span className="w-full py-4 whitespace-normal">{this.props.about}</span>
          </div>
          :null}
      </div>
    );
  };

}
