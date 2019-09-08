import React from 'react';

import Helpers from '../helper';
import {Head,About,Education,Certificate,Experience,Referance,Portfoy,Courses} from '../components/publicPage';
class publicProfile extends React.Component {
  constructor(props){
    super(props);
    this.controlExists();
  }
  state = {
    loading:true,
    data:{}
  }
  controlExists = async () =>{
    const {GetUserDetails} = Helpers;
    let userDetails = await GetUserDetails(this.props.match.params.nick);
    this.setState({data:userDetails});
    this.setState({loading:false});
  }
  render(){
    return (
    <div>
      {!this.state.loading?
      <div className="w-full">
        <div className="py-4 px-16 mx-auto">
          <Head data={this.state.data}/>
          <About about={this.state.data.user_details.biography}/>
          <Education education={this.state.data.user_details.education}/>
          <Certificate certificate={this.state.data.user_details.certificates}/>
          <Experience experience={this.state.data.user_details.experience}/>
          <Referance referance={this.state.data.user_details.referance}/>
        </div>
        <Portfoy portfoy={this.state.data.user_details.portfolio}/>
        <Courses courses={this.state.data.lessons}/>
      </div>
      :null}
    </div>
    );
  }
}

export default publicProfile;
