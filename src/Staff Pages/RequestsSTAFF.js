import React from 'react'
import "./RequestsSTAFF.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import StudentDetailSTAFF from "./StudentDetailSTAFF"
import { Link } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom'
export default function RequestsSTAFF() {
  return (
    <div>
        <Routes>
        <Route path="/StudentDetailSTAFF" element={<StudentDetailSTAFF/>}/>
    </Routes>

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
          <span className="lend-items"><Link to="/LendItemsSTAFF" style={{textDecoration:'none', color:'white'}}>Lend Items</Link></span>
        </div> */}
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
        {/* <span className="welcome">Welcome,</span>
        <span className="abebe-kebede-1">Abebe Kebede</span>
       */}
       <div>
       <div className="title-cr"><span>Clearance Requests</span></div>
       <div className="status-table3"> 
     <table className="styled-table3">
<thead>
 <tr>
     <th>Student Name</th>
     <th>Student ID</th>
     <th>Department</th>
     <th>Year</th>
     <th>Items Lent</th>
     <th>Action</th>
 </tr>
</thead>
<tbody>
 <tr>
     <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr className="active-row">
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>1</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr>
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr className="active-row">
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>3</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr>
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr className="active-row">
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr>
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
 <tr className="active-row">
 <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailSTAFF">View</Link></button></div>
       </td>
 </tr>
</tbody>
</table>

     </div>
     </div>
      </div>
      </div>
    
    </div>
   
    </div>
  )
}
