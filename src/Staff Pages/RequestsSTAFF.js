import React,{useState,useEffect} from 'react'
import "./RequestsSTAFF.css"
import image1 from "../assets2/image1.png";
import phexportFill from "../assets2/phexportFill.svg";
import majesticonslogout from "../assets2/majesticonslogout.svg";
import icbaselineNoteAlt from "../assets2/icbaselineNoteAlt.svg";
import mdiaccountStudent from "../assets2/mdiaccountStudent.svg";
import materialSymbolshome from "../assets2/materialSymbolshome.svg";
import pajamasprofile from "../assets2/pajamasprofile.svg";
import StudentDetailSTAFF from "./StudentDetailSTAFF"
// import StudentClearanceTable from "./StudentTable"
import axios from "axios";
import { Link } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function RequestsSTAFF() {


  const navigate=useNavigate()

  const [studentClearanceRequests, setStudentClearanceRequests] = useState([]);

  useEffect(() => {
    const fetchStudentClearanceRequests = async () => {
      // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
      const userData= localStorage.getItem("staffData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://aau-scs-service.onrender.com/staffrequests', {
          officeID: parsedData.data[0].officeid
        });
console.log(parsedData.data[0].officeid)
        // Assuming the response data is an array of student clearance requests
        const studentClearanceRequests = response.data.data;

        setStudentClearanceRequests(studentClearanceRequests);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching student clearance requests:', error);
      }
    };
    }
    fetchStudentClearanceRequests();
  }, []);

  const handleAccept = async (request) => {
    // Update the status of the request to "accept" in the backend
    const userData= localStorage.getItem("staffData")
    const parsedData=JSON.parse(userData)

    try {
      const response = await axios.patch('https://aau-scs-service.onrender.com/staffrequests', {
              status: "Approved",
               officeID: parsedData.data[0].officeid,
              studentID: request.studentid
       
            });
            console.log(response.data.data)
console.log('status updated for '+ request.fullname)
window.location.reload()
      // Assuming the response indicates a successful update
      // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error updating request status:', error);
    }
  };

  const handleReject = async (request) => {
    // Update the status of the request to "reject" in the backend
    const userData= localStorage.getItem("staffData")
    const parsedData=JSON.parse(userData)
    try {
      const response = await axios.patch('https://aau-scs-service.onrender.com/staffrequests', {
        status: "Denied",
        officeID: parsedData.data[0].officeid,
        studentID: request.studentid
      });

      // Assuming the response indicates a successful update
      // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error updating request status:', error);
    }
  };

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

//   const [data,setData]= useState([])
//   const studentData=()=>{
//   useEffect(()=>{
//     const userData= localStorage.getItem("staffData")
//     const parsedData=JSON.parse(userData)

//  if(parsedData.loggedIn===1){

//     axios.post('https://student-clearance-system.onrender.com/staffrequests',
//     {userType:parsedData.data[0].userType},)
//       .then(res=> {console.log(res.data.data)})
//       .catch(err=>{console.log(err)})
//   }
 
   
 
//  },[])
// }
//   useEffect(()=>{
//     axios.post('https://student-clearance-system.onrender.com/staffrequests')
//     .then(res=> setData(res.data.data))
//     .catch(err=>console.log(err))
// },[])
// const studentData=()=>{
//   axios.post('https://student-clearance-system.onrender.com/staffrequests',
//   {userType:'facultyAdvisor'},
//   )
//     .then(res=> {console.log(res.data.data)})
//     .catch(err=>{console.log(err)})
// }

  return (
    <div>
        <Routes>
        <Route path="/StudentDetailSTAFF" element={<StudentDetailSTAFF/>}/>
    </Routes>

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
        </div> {studentData()}*/}
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
     {/* <th>Date</th> */}
     <th>Action</th>
 </tr>
</thead>
<tbody>

{studentClearanceRequests.map(request => (
            <tr key={request.id}>
               <td>{request.fullname}</td>
              <td>{request.studentid}</td>
              <td>{request.departmentname}</td>
              <td>{request.academicyear}</td>
              {/* <td>{request.semester}</td> */}

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
{/* 
 <tr>

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
 </tr> */}
</tbody>
</table>

     </div>
     </div>
     {/* <StudentClearanceTable/> */}
      </div>
      </div>
    
    </div>
   
    </div>
  )
}
