import React,{useState, useRef} from 'react'
import "./StudentListREG.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StudentList() {
  const navigate=useNavigate()
  const userData= localStorage.getItem('registrarData')
  const parseData=JSON.parse(userData)
  const userName=parseData.data[0].fullname;

  const academicYear = useRef()
const departmentName = useRef()

  // const [academicYear, setAcademicYear] = useState('');
  // const [departmentName, setDepartment] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  const search = () => {
    axios
      .post(
        "https://aau-scs-service.onrender.com/studentsList",
        {
          departmentName: departmentName.current.value,
          academicYear: academicYear.current.value,
        },
        // { headers: "application/json" }
      )
      .then((resp) => {
        console.log(resp.data);
        setFetchedData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
         <div className="landing-page1"> 
      <div className="rectangle-1">
        <div className="rectangle-2">
          <span className="abebe-kebede">{userName}</span>
          <span className="librarian">Registrar</span>
        </div>
        <div className="flex-container">
          <img className="material-symbolshome" src={materialSymbolshome} alt=""/>
          <span className="home"><Link to="/HomeREG" style={{textDecoration:'none', color:'white'}}>Home</Link></span>
        </div>
        <div className="flex-container-1">
          <img className="icbaseline-note-alt" src={icbaselineNoteAlt} alt=""/>
          <span className="requests"><Link to="/RequestsREG" style={{textDecoration:'none', color:'white'}}>Requests</Link></span>
        </div>
        {/* <div className="flex-container-2">
          <img className="phexport-fill" src={phexportFill} alt=""/>
          <span className="lend-items"><Link to="/LendItems" style={{textDecoration:'none', color:'white'}}>Lend Items</Link></span>
        </div> */}
        <div className="flex-container-3">
          <img className="mdiaccount-student" src={mdiaccountStudent} alt="" />
          <span className="student-list"><Link to="/StudentListREG" style={{textDecoration:'none', color:'white'}}>Student List</Link></span>
        </div>
        <div className="flex-container-4">
          <img className="pajamasprofile" src={pajamasprofile} alt=""/>
          <span className="edit-profile">Edit Profile</span>
        </div>
        <div className="flex-container-5">
          <img className="majesticonslogout" src={majesticonslogout} alt=""/>
          <span className="logout"  onClick={()=>{
            localStorage.removeItem('registrarData')
           navigate("/SignInST")
          }} ><span  style={{textDecoration:'none', color:'white'}}>Logout</span></span>
          {/* <span className="logout"><Link to="/SignInST" style={{textDecoration:'none', color:'white'}}>Logout</Link></span> */}
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
       <div className="title-cr"><span>Student List</span></div>
       <div className="pt-cont" style={{display:'flex',flexDirection:'column'}}>
      <div className="SLTStaff">
            <div className="labels1">
                <span id="2" >School/Department</span>
                <input id="2" type="text" className="input-box1"
                ref={departmentName}
                  />
                <span id="2" >Year</span>
                <input id="2" type="text" className="input-box1"
             ref={academicYear}/>
                <input type="button" value="Generate" className="rc-btn4"
                onClick={search}
                />
               
                
            </div> </div>
            <div className="status-table6"> 
     <table className="styled-table6">
            { <div>
                <thead style={{fontSize:'22px',backgroundColor:'white'}}>
                           <th><td>Student ID</td><td>Student Name</td></th>
                           </thead>
                  {fetchedData.length > 0 &&
                    fetchedData.map((data) => {
                      return (
                        <>
                        <table style={{fontSize:'22px',backgroundColor:'white'}}>
                          <tr key={data.id}>
                            <td>{data.studentid}</td><td>{data.fullname}</td></tr>
                        </table>
                         
                        </>
                      );
                    })}
                </div>            
}
      </table>
      </div>
     </div>

     </div>
      </div>
      </div>
     
    
    </div>
    </div>
  )
}
