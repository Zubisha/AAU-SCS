import React from 'react'
import "./HomeSTAFF.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt1 from "../assets2/icbaselineNoteAlt1.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import phexportFill1 from "../assets2/phexportFill1.svg";
import { Link } from 'react-router-dom';
export default function HomeSTAFF() {
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
        {/* <div className="flex-container-2">
          <img className="phexport-fill" src={phexportFill} alt=""/>
          <span className="lend-items"><Link to="/LendItems" style={{textDecoration:'none', color:'white'}}>Lend Items</Link></span>
        </div> */}
        <div className="flex-container-3">
          <img className="mdiaccount-student" src={mdiaccountStudent} alt="" />
          <span className="student-list"><Link to="/StudentListSTAFF" style={{textDecoration:'none', color:'white'}}>Student List</Link></span>
        </div>
        <div className="flex-container-4">
          <img className="pajamasprofile" src={pajamasprofile} alt=""/>
          <span className="edit-profile"><Link to="/StudentDetailSTAFF" style={{textDecoration:'none', color:'white'}}>Edit Profile</Link></span>
        </div>
        <div className="flex-container-5">
          <img className="majesticonslogout" src={majesticonslogout} alt=""/>
          <span className="logout"><Link to="/SignInST" style={{textDecoration:'none', color:'white'}}>Logout</Link></span>
        </div>
      </div>
      <div className="flex-container-6">
        <div className="flex-container-71">
          <img className="image-1" src={image1} alt=""/>
          <span className="aau-student-clearanc">
            AAU Student Clearance System
          </span>
        </div>
        <span className="welcome">Welcome,</span>
        <span className="abebe-kebede-1">Abebe Kebede</span>
      
      </div>
      
      <div className='dashboard'>
      <div className="rectangle-3">
          <img className="phexport-fill-1" src={phexportFill1}alt="" />
          <div className="flex-container-8">
            <span className="no-of-items-lent">No. of Items Lent</span>
            <span className="num-54">54</span>
          </div>
        </div>
        <div className="rectangle-3-1">
        <img className="icbaseline-note-alt-1" src={icbaselineNoteAlt1} alt=""/>
        <div className="flex-container-9">
          <span className="no-of-pending-reques">No. of Pending Requests</span>
          <span className="num-21">21</span>
        </div>
      </div></div>
    </div>
    </div>
  )
  }