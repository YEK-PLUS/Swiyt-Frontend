import React from 'react';
import PropTypes from 'prop-types';

class footer extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={{"backgroundColor":"#1A1A1A","borderTopWidth":"6px"}} className="flex flex-col flex-wrap text-white w-full border-red-600">

        <div className="flex flex-row flex-wrap justify-center items-center w-full">

          <h6 className="text-center w-32 py-8 mx-2">Hakkımızda</h6>
          <h6 className="text-center w-32 py-8 mx-2">Eğitim Ver</h6>
          <h6 className="text-center w-32 py-8 mx-2">İş Ortaklığı</h6>
          <h6 className="text-center w-32 py-8 mx-2">Koşullar</h6>
          <h6 className="text-center w-32 py-8 mx-2">Gizlilik Politikası</h6>

        </div>

        <div className="flex flex-col flex-wrap justify-center items-center w-full">
          <img className="w-2/12 h-auto" src={pub.get("swiytPNG")}/>
          <div className="font-bold text-lg py-8" >Telif Hakkı © 2019 Swiyt, Inc.</div>
        </div>

      </div>
    )
  }
}
export default footer;
