import React from 'react';
import _ from 'lodash';
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
  loadProfile(){
    return (
      <div>
        {!this.state.loading?
        <div className="w-full">
          <div className="py-4 px-16 mx-auto">
            <Head data={this.state.data}/>
            {this.state.data.user_details?
              <div>
                <About about={this.state.data.user_details.biography}/>
                <Education education={this.state.data.user_details.education}/>
                <Certificate certificate={this.state.data.user_details.certificates}/>
                <Experience experience={this.state.data.user_details.experience}/>
                <Referance referance={this.state.data.user_details.referance}/>
              </div>
              :null}
          </div>
          {this.state.data.user_details?
            <div>
              <Portfoy portfoy={this.state.data.user_details.portfolio}/>
              <Courses courses={this.state.data.lessons}/>
            </div>
          :null}
        </div>
        :null}
      </div>
    );
  }
  loadError(){
    return (
      <div className={`w-full py-3 px-5`}>
        User Not Found
      </div>
    );
  }
  render(){
    if(!(_.has(this.state.data,'error'))){
      return this.loadProfile();
    }
    return this.loadError();
  }
}

export default publicProfile;
