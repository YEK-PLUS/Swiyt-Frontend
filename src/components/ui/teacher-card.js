import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Helpers from '../../helper';
const {createUrl} = Helpers;
import Button from  './button'

export default class courseCard extends React.Component{
	constructor(props){
		super(props);
	}
  render(){
		const Card = () => (
			<div className="w-auto mr-4 rounded-lg overflow-hidden shadow-lg">
				<div className="w-1/2 m-auto my-4">
					{this.props.image?
							<img className="w-full rounded-full" src={this.props.image}/>
							:
							<div style={{height:"100px"}} className="loading-bar">
								<span className="loading-bar-fill"></span>
							</div>
						}
				</div>

				<div className="px-16 py-1 my-2 text-center flex flex-col justify-center">

					{this.props.teacher?
						<p className="text-gray-700 text-lg">{this.props.teacher}</p>
						:
						<div className="loading-bar">
							<span className="loading-bar-fill"></span>
						</div>
					}

				</div>
				{this.props.courses && Object.keys(this.props.courses).length > 0 ?
					<div className='py-4 px-8'>
						<div style={{height:`0.1rem`}} className="bg-gray-500 w-full"></div>
					</div>
					: null}
				<div className="my-2 px-8">
					{this.props.courses.map((course) => {
						return (
							<Link key={course.uid} to={createUrl(`/lesson/`+this.props.teacher+`/`+course.name)}>
								<Button
									extend={`w-full my-2`}
									onClick={(e)=>{return true}}
									padding={{x:10,y:2}}
									hover={true}
									text={course.name}
									/>
							</Link>
						)
					})}
				</div>
				<div className={`w-full h-2 bg-red-500`} ></div>
			</div>
		);
		return (
			<Link to={(createUrl(`/user/`+this.props.teacher))} className={this.props.bol?"":"w-1/5" + " mb-4 button_hover cursor-pointer"}>
				<Card/>
			</Link>
		);
  };

}
