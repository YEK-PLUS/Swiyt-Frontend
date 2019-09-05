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
  vis: state.popup.singup,
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators({...POPUPactions,...LoginActions}, dispatch);
}

class singupform extends React.Component{
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.handle = this.handle.bind(this);
    this.showResults = this.showResults.bind(this);
    this.showLoginPopup = this.showLoginPopup.bind(this);
  }
  state = {
    loading:false
  }
  singup = async (username,password,mail,done) => {
    const { TrySingup } = Helpers;
    const singupRes = await TrySingup(username,password,mail);
    done(singupRes);
  }
  showLoginPopup(){
    this.props.deleteSingupPopup();
    this.props.addLoginPopup();
  }
  handle(event){
    let a = {};
    a[event.target.name] = event.target.value
    this.setState(a);
  }
  close(){
    this.props.deleteSingupPopup();
  }
  showResults(){
    this.setState({loading:true});
    this.singup(
      this.state.username,
      this.state.password,
      this.state.mail,
      (logined) => {
        this.setState({loading:false});
        this.setState({success:_.has(logined,'success')});
        if(_.has(logined,'error')){
          this.setState({mail:""});
          this.setState({password:""});
          this.setState({username:""});
          this.setState({error:logined.error})
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
        <CustomInput get={this.handle} Itype="email" extend="my-3" icon={FaUserCircle} iconsize="xl" iconcolor="red-600" iconbackground="white" padding={{x:2,y:2}} name="mail" text="E-Mail" />
        <CustomInput get={this.handle} Itype="password" extend="my-3" icon={FaUserCircle} iconsize="xl" iconcolor="red-600" iconbackground="white" padding={{x:2,y:2}} name="password" text="Şifre" />

        <h5 className="whitespace-normal"><a className="text-blue-600 whitespace-normal">Kullanım Şartlarımızı</a> ve <a className="text-blue-600 whitespace-normal">Gizlilik Politikası</a> Kabul Ettin falan</h5>
        <Button onClick={this.showResults} padding={{x:0,y:1}} background="bg-red-600" textcolor="white" textsize="lg" hover={true} extend="w-full" text="Kayıt Ol"/>
        <Button onClick={this.showLoginPopup} padding={{x:0,y:1}} background="bg-red-600" textcolor="white" textsize="lg" hover={true} extend="w-full mt-3" text="Giriş Yap"/>

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

              {this.state.success != undefined ?
                  <div className="w-full">
                      {this.state.success?
                        <div className="text-green-500">Kayıt Başarılı</div>:
                        <div className="text-red-800">{this.state.error}</div>
                      }
                  </div>:""}

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

export default connect(mapStateToProps,mapDispatchToProps)(singupform);
