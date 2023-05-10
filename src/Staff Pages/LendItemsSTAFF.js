import React from 'react'
import "./LendItemsSTAFF.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import { Link } from 'react-router-dom';
export default function LendItemsSTAFF() {
  return (
    <div>
         <div className="landing-page1"> 
      <div className="rectangle-1">
        <div className="rectangle-2">
          <span className="abebe-kebede">Abebe Kebede</span>
          <span className="librarian">Librarian</span>
        </div>
        <div className="flex-container">
          <img className="material-symbolshome" src={materialSymbolshome} alt=""/>
          <span className="home"><Link to="/HomeSTAFF" style={{textDecoration:'none', color:'white'}}>Home</Link></span>
        </div>
        <div className="flex-container-1">
          <img className="icbaseline-note-alt" src={icbaselineNoteAlt} alt=""/>
          <span className="requests"><Link to="/RequestsSTAFF" style={{textDecoration:'none', color:'white'}}>Requests</Link></span>
        </div>
        <div className="flex-container-2">
          <img className="phexport-fill" src={phexportFill} alt=""/>
          <span className="lend-items"><Link to="/LendItemsSTAFF" style={{textDecoration:'none', color:'white'}}>Lend Items</Link></span>
        </div>
        <div className="flex-container-3">
          <img className="mdiaccount-student" src={mdiaccountStudent} alt="" />
          <span className="student-list"><Link to="/StudentListSTAFF" style={{textDecoration:'none', color:'white'}}>Student List</Link></span>
        </div>
        <div className="flex-container-4">
          <img className="pajamasprofile" src={pajamasprofile} alt=""/>
          <span className="edit-profile">Edit Profile</span>
        </div>
        <div className="flex-container-5">
          <img className="majesticonslogout" src={majesticonslogout} alt=""/>
          <span className="logout"><Link to="/SignInST" style={{textDecoration:'none', color:'white'}}>Logout</Link></span>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',marginTop:'-135px'}}>
      <div className="flex-container-60">
        <div className="flex-container-72">
          <img className="image-1" src={image1} alt=""/>
          <span className="aau-student-clearanc">
            AAU Student Clearance System
          </span>
        </div>
       <div>
       <div className="title-cr"><span>Lend Items</span></div>
      <div className="LDI">
            <div className="labels">
                <span id="2" className="label1">Student Name</span>
                <span id="2" className="label2">Student ID</span>
                <span id="2" className="label3">School/Department</span>
                <span id="2" className="label4">Item Name</span>
                <span id="2" className="label5">Item Description</span>
                <span id="2" className="label6">Date</span>
            </div>
            <div className="input-boxes">
                <input id="2" type="text" className="input-box1"/>
                <input id="2" type="text" className="input-box1"/>
                <input id="2" type="text" className="input-box1"/>
                <input id="2" type="text" className="input-box1"/>
                <textarea id="2" className="desc" /> 
                <input id="2" type="date" className="input-box1"/>

               
                <input type="button" value="Lend Item" className="rc-btn3"/>
            </div>
      </div>
     </div>
      </div>
      </div>
     
    
    </div>
    </div>
  )
}
