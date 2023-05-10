import React from 'react'
import "./StudentDetailSTAFF.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import iconparkoutlinereturn from "../assets2/iconparkoutlinereturn.svg"
import { Link } from 'react-router-dom';
export default function StudentDetailSTAFF() {
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
      <div id="pl" style={{display:'flex',flexDirection:'column'}}>
      <div className="flex-container-61">
        <div className="flex-container-73">
          <img className="image-1" src={image1} alt=""/>
          <span className="aau-student-clearanc">
            AAU Student Clearance System
          </span>
        </div>
       <div>
       <div className="title-cr"><span>Student Detail</span></div>
      <div className="SD" style={{display:'flex',flexDirection:'row-reverse',marginLeft:'80px'}}>
         
           <div className="status-table4"> 

     <table className="styled-table4">

<tbody>
 <tr>
     <td>Full Name</td>
     <td>Student X</td>
    
 </tr>
 <tr className="active-row">
 <td>Student ID</td>
     <td>UGR/1234/12</td>
    
 </tr>
 <tr>
 <td>School/Department</td>
     <td>Information Science</td>
   
 </tr>
 <tr className="active-row">
 <td>Year</td>
     <td>4</td>
 
 </tr>
 <tr>
     <td>No Items Lent</td>
     <td>0</td>
     
 </tr>
 <tr className="active-row">
 <td>Items Returned?</td>
     <td>None</td>
     
 </tr>

</tbody>
</table>
<div style={{display:"flex", flexDirection:'row',width:'100%',height:'55px',justifyContent: "space-around",
    backgroundColor: "#f0f0f0",marginTop:'15px'}}>
  <button id="w" className='accept-btn1'>Accept</button>
  <button id="w" className='reject-btn1'>Reject</button>
  </div>

     </div>
      <div  style={{fontSize:"22px",width:'5%'}}>
               <Link to="/RequestsSTAFF" id='22'>
                 <button style={{fontSize:"18px", fontWeight:'bolder',border:'none',color:'blue'}}>
                 <img id='55' className='rtr'  src={iconparkoutlinereturn}/> 
                                   </button>
                   </Link> 
            </div>
     </div>
           </div>
           
      </div>
     </div>
      </div>
      
     
    
    </div>
   
  )
}
{/* <table id="w" style={{border:'collapse'}}>
  <div className='student-detail' style={{fontSize:"22px",backgroundColor:'white'}}>
<tr id="w">
  <td>Name</td><td>Student X</td>
</tr>
<tr id="w">
  <td>ID</td><td>UGR/1234/12</td>
</tr>
<tr id="w">
  <td>School/Department</td><td>Information Science</td>
</tr >
<tr id="w">
  <td>Items Lent</td><td>none</td>
</tr>
</table>
</div>
*/}