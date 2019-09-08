import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Helpers from '../../helper';
const {createUrl} = Helpers;


export default class courseCard extends React.Component{
	constructor(props){
		super(props);
	}
  	render(){
    	return (
		<Link to={createUrl(`/lesson/`+this.props.teacher+`/`+this.props.title)} className={this.props.bol?"":"w-1/5" + " mb-4 button_hover cursor-pointer"}>
			<div className="w-auto mr-4 rounded overflow-hidden shadow-lg">
				{this.props.image?
					<img className="w-full" src={this.props.image}/>
					:
					<div style={{height:"200px"}} className="loading-bar">
						<span className="loading-bar-fill"></span>
					</div>
				}
				<div className="px-6 py-1 pt-3">
				{this.props.title?
					<p className="text-gray-700 text-base">{this.props.title}</p>
					:
					<div className="loading-bar">
						<span className="loading-bar-fill"></span>
					</div>
				}
				</div>
				<div className="px-6 py-1 pb-2 flex flex-wrap flex-row justify-between">

					{this.props.teacher?
						<span className="text-gray-500 pt-2 text-xs">{this.props.teacher}</span>
						:
						<div className="loading-bar">
							<span className="loading-bar-fill"></span>
						</div>
					}
					{this.props.price?
						<span className="text-red-600 text-lg">{this.props.price}₺</span>
						:
						<div className="loading-bar">
							<span className="loading-bar-fill"></span>
						</div>
					}
				</div>
			</div>
		</Link>
    );
  };

}
