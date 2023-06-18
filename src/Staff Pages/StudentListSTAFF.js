import React,{useState, useRef} from 'react'
import "./StudentListSTAFF.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function StudentListSTAFF() {

  const navigate=useNavigate();
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
//   const handleAcademicYearChange = (e) => {
//     setAcademicYear(e.target.value);
//   };

//   const handleDepartmentChange = (e) => {
//     setDepartment(e.target.value);
//   };

//   const handleFetchData = () => {
   
      
//     const departmentType = localStorage.getItem('staffData'); // Assuming you have stored the department type in localStorage
// const parsedData=JSON.parse(departmentType)

//     // Check if department type is available
//     if (!parsedData) {
//       console.log('Department type not found in localStorage');
//       return;
//     }

//     axios
//       .post('https://aau-scs-service.onrender.com/studentsList', { academicYear, departmentName})
//       .then((response) => {
//         setFetchedData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };
const userData = localStorage.getItem('staffData')
  const parsedData = JSON.parse(userData)
  const staffName= parsedData.data[0].fullname
  // let [userType,setUsertype]=useState(" ")
  let setUsertype;
  if (parsedData.data[0].officeid===1){
    setUsertype="Faculty Advisor";
  }
  else if(parsedData.data[0].officeid===2){
    setUsertype="Dean of Students";
  }
  else if(parsedData.data[0].officeid===3){
    setUsertype="Library Chief";
  }
  else if(parsedData.data[0].officeid===4){
    setUsertype="Bookstore Keeper";
  }
  else if(parsedData.data[0].officeid===5){
    setUsertype="Sport Master";
  }
  else if(parsedData.data[0].officeid===6){
    setUsertype="Academic Dean";
  }
  else if(parsedData.data[0].officeid===7){
    setUsertype="Property & Store";
  }
  else if(parsedData.data[0].officeid===9){
    setUsertype="Finance"
  }
  else if(parsedData.data[0].officeid===8){
    setUsertype="S. Business Affairs"
  }
  return (
    <div>
         <div className="landing-page1"> 
      <div className="rectangle-1">
        <div className="rectangle-2">
        <span className="abebe-kebede">{staffName}</span>
          <span className="librarian">{setUsertype}</span>
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
          <span className="logout"  onClick={()=>{
            localStorage.removeItem('staffData')
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
      
     </div>
      </div>
      </div>
     </div>
    
    </div>
    </div>
  )
}
