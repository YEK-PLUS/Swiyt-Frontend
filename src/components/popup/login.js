import React from 'react';
import ReactDOM from 'react-dom';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Storage from '../../helper/storage';
import Button from '../ui/button';
import CustomInput from '../ui/input';
import Helpers from '../../helper';
import * as LoginActions from '../../state/actions/popup';
import * as POPUPactions from '../../state/actions/user';
const {save} = Storage
const mapStateToProps = state => ({
  vis: state.popup.login,
  state: state
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators({...POPUPactions,...LoginActions}, dispatch);
}

class loginform extends React.Component{
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.handle = this.handle.bind(this);
    this.showResults = this.showResults.bind(this);
    this.showForgotPassword = this.showForgotPassword.bind(this);
    this.showSingup = this.showSingup.bind(this);
  }
  state = {
    loading:false
  }
  login = async (username,password,done) => {
    const { GetToken } = Helpers;
    const { UserLogined, UserDetails } = this.props;
    const logined = await GetToken(username,password);
    UserLogined(!(_.has(logined,'error')));
    if (!(_.has(logined,'error'))) {
      save("UserToken",logined.token);
      this.tryLogin();
      this.close();
    }
    done(logined);
  }
  tryLogin = async () => {
    const { get, set, TryLogin } = Helpers;
    const { UserLogined, UserDetails } = this.props;
    const UserToken = get('UserToken') || false;
    if (UserToken) {
      const logined = await TryLogin();
      UserLogined((!!logined));
      if (logined) {
        UserDetails(logined);
      }
    }
  }
  showForgotPassword(){
    this.props.deleteLoginPopup();
    this.props.addForgotPasswordPopup();
  }
  showSingup(){
    this.props.deleteLoginPopup();
    this.props.addSingupPopup();
  }
  handle(event){
    let a = {};
    a[event.target.name] = event.target.value
    this.setState(a);
  }
  close(){
    this.props.deleteLoginPopup();
  }
  showResults(){
    this.setState({loading:true});
    this.login(
      this.state.username,
      this.state.password,
      (logined) => {
        this.setState({loading:false});
        if((_.has(logined,'error'))){
          this.setState({success:false});
        }
        else{
          this.setState({success:true});
          location.reload();
        }

      }
    );
  }
  head(){
    return(
      <div className="w-full h-1/4 border-b border-gray-400 flex flex-row justify-between items-center">
          <div className="w-2/3 h-full mx-auto">
            <img className="w-auto h-auto mx-auto" src={pub.get("swiytPNG")}/>
          </div>
      </div>
    );
  }
  form(){
    return(
      <div>
        <CustomInput get={this.handle} extend="my-3" icon={FaUserCircle} iconsize="xl" iconcolor="red-600" iconbackground="white" padding={{x:2,y:2}} name="username" text="Kullanıcı Adı" />
        <CustomInput get={this.handle} Itype="password" extend="my-3" icon={FaUserCircle} iconsize="xl" iconcolor="red-600" iconbackground="white" padding={{x:2,y:2}} name="password" text="Şifre" />

        <Button onClick={this.showResults} padding={{x:0,y:1}} background="bg-red-600" textcolor="white" textsize="lg" hover={true} extend="w-full" text="Giriş Yap"/>
        <Button onClick={this.showSingup} extend="border border-red-600 mt-3 w-full " padding={{x:2,y:1}} textsize="sm" hover={true} background="bg-white" textcolor="red-600" text="Kaydol!"/>
        <Button onClick={this.showForgotPassword} padding={{x:2,y:1}} background="bg-transparent" textcolor="blue-700" textsize="sm" extend="wawe w-auto mt-3 rounded-none" text="Şifremi Unuttum"/>
      </div>
    );
  }
  render() {
    return (
    <div>
    {this.props.vis?
    <div style={{"background":"rgba(0,0,0,0.3)"}} className="absolute w-full h-full top-0 left-0 justify-center items-center flex">
      <div onClick={this.close} className="z-0 absolute w-full h-full top-0 left-0"></div>
      <div  style={{"animation":"fadein .5s forwards"}} className="w-64 h-1/2 bg-white text-center p-2 py-4 absolute rounded-lg z-10">
        {this.head()}


        <div className="w-full h-3/4 py-6 px-3 flex flex-row flex-wrap justify-center items-center">
          {!this.state.loading?
            <div>

              {this.state.success != undefined && !this.state.success?
                <div className="text-green-500">Hatalı Kullanıcı Adı Şifre</div>:
                ""
              }

              {this.form()}

            </div>:
            <div>
              <img className="w-1/5 h-auto mx-auto" src={pub.get("loadingSVG")}/>
            </div>
          }

        </div>
      </div>
    </div>
    :null}
  </div>
  )}
}

export default connect(mapStateToProps,mapDispatchToProps)(loginform);
