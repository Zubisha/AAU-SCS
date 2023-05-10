import React from 'react'
import { Link } from 'react-router-dom';
import "./ClearanceStatusSTUD.css"
import image1 from "../assets/image1.png";
// import icbaselineMenu from "../assets/icbaselineMenu.svg";
export default function ClearanceStatusSTUD() {
  return (
    <div className="cs-pageSTUD">
    <div className="flex-containerSTUD">
   <img className="image-1STUD" src={image1} alt="" />
   <span className="titleSTUD">AAU Student Clearance Portal</span>

   {/* <img className="icbaseline-menu" src={icbaselineMenu} alt="" /> */}
 </div> 
 <div className="title-2STUD"><span>Clearance Status</span></div>

     <div className="status-table1STUD">
     <table className="styled-table1STUD">
<thead>
 <tr>
     <th>Department</th>
     <th>Office</th>
     <th>Officer</th>
     <th>Date</th>
     <th>Status</th>
 </tr>
</thead>
<tbody>
 <tr>
     <td>Information Sciences</td>
     <td>Library Office</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     <td style={{color:'lightgreen', fontWeight:'bold',fontSize:'14px'}}>Accepted</td>
 </tr>
 <tr className="active-rowSTUD">
     <td>Information Sciences</td>
     <td>Academic Dean's Office</td>
     <td>Chaltu Metach</td>
     <td>21 Jun,2023</td>
     <td style={{color:'blue', fontWeight:'bold',fontSize:'14px'}}>Pending</td>
 </tr>
 <tr>
     <td>Information Sciences</td>
     <td>Library Office</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     <td style={{color:'red', fontWeight:'bold',fontSize:'14px'}}>Rejected</td>
 </tr>
 <tr className="active-rowSTUD">
     <td>Information Sciences</td>
     <td>Academic Dean's Office</td>
     <td>Chaltu Metach</td>
     <td>21 Jun,2023</td>
     <td style={{color:'blue', fontWeight:'bold',fontSize:'14px'}}>Pending</td>
 </tr>
 <tr>
     <td>Information Sciences</td>
     <td>Library Office</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     <td style={{color:'lightgreen', fontWeight:'bold',fontSize:'14px'}}>Accepted</td>
 </tr>
 <tr className="active-rowSTUD">
     <td>Information Sciences</td>
     <td>Academic Dean's Office</td>
     <td>Chaltu Metach</td>
     <td>21 Jun,2023</td>
     <td style={{color:'blue', fontWeight:'bold',fontSize:'14px'}}>Pending</td>
 </tr>
 <tr>
     <td>Information Sciences</td>
     <td>Library Office</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     <td style={{color:'red', fontWeight:'bold',fontSize:'14px'}}>Rejected</td>
 </tr>
 <tr className="active-rowSTUD">
     <td>Information Sciences</td>
     <td>Academic Dean's Office</td>
     <td>Chaltu Metach</td>
     <td>21 Jun,2023</td>
     <td style={{color:'blue', fontWeight:'bold',fontSize:'14px'}}>Pending</td>
 </tr>
</tbody>
</table>

     </div>
<div style={{width:"60.5%", display:'flex',flexDirection:'row',justifyContent:'end'}}>
  <Link to="/RequestClearanceSTUD" style={{textDecoration:'none'}}>
    <input type="button" value="Request Clearance" className="rc-btn1STUD"/>
    </Link></div>
 <div className="flex-container-4STUD" style={{width:'100%',marginTop:'50px'}}>
   <div className="rectangle-2STUD">
     <span className="num-2022-addis-ababaSTUD">
       ©2022: Addis Ababa University{" "}
     </span>
   </div>
 </div>
 </div>
  )
}
