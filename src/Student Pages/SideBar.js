import React from 'react';
import {Link} from "react-router-dom"
import { slide as Menu } from 'react-burger-menu';
import materialsymbolshomeoutlinerounded from "../assets/materialsymbolshomeoutlinerounded.png"
import Vector1 from "../assets/Vector1.png"
import materialsymbolshelp from "../assets/materialsymbolshelp.png"
import uil_signout from "../assets/uil_signout.png"
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
export default props => {
  const navigate=useNavigate()
  return (
    <Menu right className='menu'>
      <div className='menu-list'>
        <div className="menu1"><img id="q" src={materialsymbolshomeoutlinerounded} style={{paddingRight:'5px'}}/><span><Link to="/HomeSTUD" id="p" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>Home</Link></span></div>
        <div className="menu1"><img id="q" src={Vector1} style={{paddingRight:'5px'}}/><span id="p" style={{textDecoration:'none',color:'white',fontWeight:'bold', width:'max-content'}}>Change Password</span></div>
        <div className="menu1"><img id="q" src={materialsymbolshelp} style={{paddingRight:'10px'}}/><span><Link to="/RequestClearanceSTUD" id="p" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>Request Clearance</Link></span></div>
        <div className="menu1"><img id="q" src={materialsymbolshelp} style={{paddingRight:'10px'}}/><span><Link to="/ClearanceStatusSTUD" id="p" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>Notifications</Link></span></div>
        <div className="menu1"><img id="q" src={materialsymbolshelp} style={{paddingRight:'10px'}}/><span id="p" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>Help</span></div>
        <div className="menu1"><img id="q" src={uil_signout} style={{paddingRight:'5px'}}/><span>
          <span onClick={()=>{
            localStorage.removeItem('studentData')
           navigate("/SigninSTUD")
          }}  id="p" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>Signout</span></span></div>
      </div>
    </Menu>
  );
};


{/* <Link to="/RequestClearanceSTUD" style={{textDecoration:'none'}}> to="/SigninSTUD<span className="labelSTUD" style={{color:'white'}}> Request Clearance</span></Link>  */}
