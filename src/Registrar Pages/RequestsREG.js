import React,{useState,useEffect} from 'react'
import "./RequestsREG.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import StudentDetail from "./StudentDetailREG"
import { Link } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Requests() {
  const navigate=useNavigate()
  const userData= localStorage.getItem('registrarData')
  const parseData=JSON.parse(userData)
  const userName=parseData.data[0].fullname;
//   const [deptName, setDeptName] = useState([]);

//   useEffect(() => {
//     const fetchDepartmentName = async () => {
//       // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
//       const userData= localStorage.getItem("registrarData")
//       const parsedData=JSON.parse(userData)
//       const deptId= parseData.data[0].departentid

//       if(parsedData.loggedIn===1){
//       try {
//         const response = await axios.post('https://aau-scs-service.onrender.com/fetchDepartment', {
//           // officeID: parsedData.data[0].officeid
//           departentID: deptId
//         });
// console.log('dapartment name fetched successfully')
//         // Assuming the response data is an array of student clearance requests
//         const deptName = response.data.data;

//         setDeptName(deptName);
//       } catch (error) {
//         // Handle any errors that occur during the API request
//         console.error('Error fetching student clearance status:', error);
//       }
//     };
//     }
//     fetchDepartmentName();
//   }, []);

const [deptName, setDeptName] = useState([]);

useEffect(() => {
  const fetchDepartmentName = async () => {
    // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
    const userData= localStorage.getItem("registrarData")
    const parsedData=JSON.parse(userData)
    const deptId= parsedData.data[0].departmentid

   
      axios.post("https://aau-scs-service.onrender.com/fetchDepartment",{ departmentID: deptId})
      .then(res=>{
          localStorage.setItem("deptData",JSON.stringify(res.data))
console.log('dapartment name stored successfully')
      const deptName = res.data.data;
      setDeptName(deptName);
      }).catch(err=>{
      console.log(err)
     
  })
  };
  
  fetchDepartmentName();
}, []);

const [studentIDs, setStudentID]=useState([])
useEffect(() => {
  const fetchStudentID = async () => {
    // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
    const departmentData= localStorage.getItem("deptData")
    const parsedDataD=JSON.parse(departmentData)
    const dptName= parsedDataD.data[0].departmentname
console.log(dptName)
   
   
      axios.post("https://aau-scs-service.onrender.com/listEligibleStudents",{ departmentName: "Information Systems"})
      .then(res=>{
          localStorage.setItem("e.students",JSON.stringify(res.data))
console.log('eligible students name stored successfully')
      const studentIDs = res.data;
      setStudentID(studentIDs);
      }).catch(err=>{
      console.log(err)
     
  })
  };
  
  fetchStudentID();
}, []);

const [requests, setRequests] = useState([]);

useEffect(() => {
  const fetchRequests = async () => {
    // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
    const sdData= localStorage.getItem("e.students")
    const parsedsData=JSON.parse(sdData)

  
    try {
      const response = await axios.post('https://aau-scs-service.onrender.com/requestsToRegistrar', {
        studentID: parsedsData.data[0].studentid
      });
console.log(parsedsData.data[0].studentid)
      const requests = response.data.data;
console.log(response.data.data)
      setRequests(requests);
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error fetching requests:', error);
    }
  };
  
  fetchRequests();
}, []);


const handleAccept = async (request) => {
  // Update the status of the request to "accept" in the backend
  
  try {
    const response = await axios.patch('https://aau-scs-service.onrender.com/registrarRequestApproval', {
            clearancestatus: "Approved",
            studentID: request.studentid
     
          });
          console.log(response.data.data)
console.log('status updated for '+ request.fullname)
window.alert('successful')
    // Assuming the response indicates a successful update
    // You can handle the response as needed (e.g., show a success message)
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error updating request status:', error);
  }
};

const handleReject = async (request) => {
  // Update the status of the request to "reject" in the backend
 
  try {
    const response = await axios.patch('https://aau-scs-service.onrender.com/registrarRequestApproval', {
      clearancestatus: "Denied",
      studentID: request.studentid
    });
    console.log('status updated for '+ request.fullname)
    window.alert('successful')
    // Assuming the response indicates a successful update
    // You can handle the response as needed (e.g., show a success message)
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error updating request status:', error);
  }
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
        {/* <span className="welcome">Welcome,</span>
        <span className="abebe-kebede-1">Abebe Kebede</span>
       */}
       <div>
       <div className="title-cr"><span>Approval Requests</span></div>
       <div className="status-table3"> 
     <table className="styled-table3">
<thead>
 <tr>
     <th>Student Name</th>
     <th>Student ID</th>
     <th>Department</th>
     <th>Year</th>
     <th>Status</th>
     <th>Action</th>
 </tr>
</thead>
<tbody>
{  requests.map(request => (
            <tr key={request.id}>
               <td>{request.fullname}</td>
              <td>{request.studentid}</td>
              <td>{request.departmentname}</td>
              <td>{request.academicyear}</td>
               <td>{request.clearancestatus}</td> 
               <td>
                {/* {request.status === 'pending' && (  */}
                  <>
                    <button className='accept-btn' onClick={() => handleAccept(request)}>Accept</button>
                    <button className='reject-btn' onClick={() => handleReject(request)}>Reject</button>
                    {/* <button className='view-btn'><Link style={{textDecoration:'none'}} to="/StudentDetailSTAFF">View</Link></button> */}
                  </>
                {/* )}  */}
              </td>
                       </tr>
          ))}
 {/* <tr>
     <td>Someone Somebody</td>
     <td>UGR/1234/12</td>
     <td>Information Science</td>
     <td>4</td>
     <td>none</td>
     <td><div style={{display:"flex",flexDirection:'row'}}>
       <button className='accept-btn'>Accept</button>
       <button className='reject-btn'>Reject</button>
       <button className='view-btn'><Link to="/StudentDetailREG">View</Link></button></div>
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
       <button className='view-btn'><Link to="/StudentDetail">View</Link></button></div>
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
       <button className='view-btn'><Link to="/StudentDetail">View</Link></button></div>
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
       <button className='view-btn'><Link to="/StudentDetail">View</Link></button></div>
       </td>
 </tr>
 <tr>
     <td>Information Sciences</td>
     <td>Library Office</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     <td style={{color:'lightgreen', fontWeight:'bold',fontSize:'14px'}}>Accepted</td>
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
       <button className='view-btn'><Link to="/StudentDetail">View</Link></button></div>
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
       <button className='view-btn'><Link to="/StudentDetail">View</Link></button></div>
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
       <button className='view-btn'><Link to="/StudentDetail">View</Link></button></div>
       </td>
 </tr> */}
</tbody>
</table>


     </div>
     </div>
      </div>
      </div>
    </div>
    <Routes>
    <Route path="/StudentDetail" element={<StudentDetail/>}/>
    </Routes>
    </div>
  )
}
