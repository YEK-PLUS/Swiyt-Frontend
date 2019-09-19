import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Helpers from '../../helper';
const {createUrl} = Helpers;


export default class comment extends React.Component{
	constructor(props){
		super(props);
	}
  render(){
		return (
			<div className={`w-full`}>
				<div style={{top:`30px`,left:`20px`}} className={`relative h-16 w-auto`}>
					<img className={`w-auto h-full rounded-full border-2 border-red-500`} src={this.props.image}/>
				</div>
				<div className={`w-full flex flex-col rounded-b-lg border-2 border-red-500`}>
					<div className={`w-full px-4 flex flex-row justify-between bg-red-500`}>
						<div className={`w-full h-auto font-black text-center text-white text-xl`}>
							{this.props.name}
						</div>
					</div>
					<div className={`w-full px-3 py-4`}>{this.props.comment}</div>
				</div>
			</div>
		);
  };

}
