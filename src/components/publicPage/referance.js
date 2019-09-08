import React from 'react';
export default class Referance extends React.Component{
  constructor(props){
    super(props);
  }
  loadReferance(){
    let a = [];
    let b = this.props.referance;
    for (let v in b){
      a.push(
        <div key={v.toString()} className="w-full flex flex-row h-16">
          <div className="w-auto h-full px-4">
            <img className="h-full" src="https://img.icons8.com/metro/1600/museum.png" />
          </div>
          <div className="w-auto flex flex-col px-4">
            <span>{b[v].name}</span>
            <span>{b[v].position}</span>
            <span>{b[v].contact}</span>
          </div>
        </div>
      );
    }
    return a;
  }
  render(){
    return (
      <div>
        {this.props.referance?
          <div className="w-full rounded-lg py-3 shadow-lg px-6 py-3 my-8">
            <h4 className="w-full text-2xl py-4 font-bold">
              Referanslar
            </h4>
            <div className="w-full py-4">{this.loadReferance().map(a=>a)}</div>
          </div>
        :null}
      </div>
    );
  };

}
