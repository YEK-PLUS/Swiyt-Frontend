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
		const Card = () => (
			<div className="w-auto mr-4 rounded overflow-hidden shadow-lg">
				{this.props.image?
					<img className="w-full" src={this.props.image}/>
					:
					<div style={{height:"200px"}} className="loading-bar">
						<span className="loading-bar-fill"></span>
					</div>
				}
				<div className="px-6 py-1 pt-2">
					{this.props.title?
						<p className="text-gray-700 text-lg">{this.props.title}</p>
						:
						<div className="loading-bar">
							<span className="loading-bar-fill"></span>
						</div>
					}
				</div>
				<div className="px-6 py-1 pb-2 flex flex-wrap flex-row justify-between">

					{this.props.teacher?
						<span className="text-gray-500 pt-2">{this.props.teacher}</span>
						:
						<div className="loading-bar">
							<span className="loading-bar-fill"></span>
						</div>
					}
					{this.props.price?
						<span className="text-red-600 text-lg">{this.props.price=="free"?null:this.props.price+"₺"}</span>
						:
						<div className="loading-bar">
							<span className="loading-bar-fill"></span>
						</div>
					}
				</div>
			</div>
		);
		if(!this.props.url){
			return (
				<Link to={!this.props.url?(createUrl(`/lesson/`+this.props.teacher+`/`+this.props.title)):this.props.url} className={this.props.bol?"":"w-1/5" + " mb-4 button_hover cursor-pointer"}>
					<Card/>
				</Link>
			);
		}
		else{
			return (
					<a href={this.props.url} className={this.props.bol?"":"w-1/5" + " mb-4 button_hover cursor-pointer"}>
						<Card/>
					</a>
			);
		}
  };

}
