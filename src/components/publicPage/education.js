import React from 'react';
export default class Education extends React.Component{
  constructor(props){
    super(props);
  }
  loadEducation(){
    let a = [];
    let b = this.props.education;
    for (let v in b){
      a.push(
        <div key={v.toString()} className="w-full flex flex-row h-16">
          <div className="w-auto h-full px-4">
            <img className="h-full" src="https://img.icons8.com/metro/1600/museum.png" />
          </div>
          <div className="w-auto flex flex-col px-4">
            <span>{b[v].name}</span>
            <span>{b[v].collage}</span>
            <span>{b[v].date}</span>
          </div>
        </div>
      );
    }
    return a;
  }
  render(){
    return (
      <div>
        {this.props.education?
          <div className="w-full rounded-lg py-3 shadow-lg px-6 py-3 my-8">
            <h4 className="w-full text-2xl py-4 font-bold">
              Eğitim
            </h4>
            <div className="w-full py-4">{this.loadEducation().map(a=>a)}</div>
          </div>
        :null}
      </div>
    );
  };

}
