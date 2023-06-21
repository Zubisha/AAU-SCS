import React,{useState,useEffect} from 'react'
import "./HomeREG.css"
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const userData= localStorage.getItem('registrarData')
  const parseData=JSON.parse(userData)
  const userName=parseData.data[0].fullname;
  const navigate=useNavigate(parseData)

  const [pRequests, setPrequests] = useState([]);

const [departmentName,setDepartmentName]=useState('')

  useEffect(() => {
    const fetchDepartmentName = async () => {
      const userData= localStorage.getItem("registrarData")
      const parsedData=JSON.parse(userData)
      const deptId= parsedData.data[0].departmentid
  
     
        axios.post("https://aau-scs-service.onrender.com/fetchDepartment",{ departmentID: deptId})
        .then(res=>{
            localStorage.setItem("deptData",JSON.stringify(res.data))
  console.log('dapartment name stored successfully')
        //  deptName = res.data.departmentid;
        // setDeptName(deptName);
        // window.reload();
        console.log(res.data.data[0].departmentname)
        setDepartmentName(res.data.data[0].departmentname)
        }).catch(err=>{
        console.log(err)
       
    })
    };
    
    fetchDepartmentName();
  }, []);


  useEffect(() => {
    const fetchNoOfRequests = async () => {
      // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
      const userData= localStorage.getItem("registrarData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://aau-scs-service.onrender.com/numberOfPendingRequestsToRegistrar', {
          departmentName: departmentName
        });
// console.log(parsedData.data[0].officeid)
        // Assuming the response data is an array of student clearance requests
        const pRequests = response.data.data;

        setPrequests(pRequests);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching student clearance requests:', error);
      }
    };
    }
    fetchNoOfRequests();
  }, []);

  const [aRequests, setArequests] = useState([]);

  useEffect(() => {
    const fetchNoOfAcceptedRequests = async () => {
      // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
      const userData= localStorage.getItem("registrarData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://aau-scs-service.onrender.com/numberOfApprovedRequestsToRegistrar', {
          departmentName: departmentName       });
// console.log(parsedData.data[0].officeid)
        // Assuming the response data is an array of student clearance requests
        const aRequests = response.data.data;

        setArequests(aRequests);
        console.log(response.data.data)
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching student clearance requests:', error);
      }
    };
    }
    fetchNoOfAcceptedRequests();
  }, []);

  return (
    <div>
        <div className="landing-page1"> 
      <div className="rectangle-1">
        <div className="rectangle-2">
          <span className="abebe-kebedeREG" >{userName}</span>
          <span className="librarianREG" >Registrar</span>
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
          <span className="edit-profile"><Link to="/StudentDetailREG" style={{textDecoration:'none', color:'white'}}>Edit Profile</Link></span>
        </div>
        <div className="flex-container-5">
          <img className="majesticonslogout" src={majesticonslogout} alt=""/>
          {/* <span className="logout"><Link to="/SignInST" style={{textDecoration:'none', color:'white'}}>Logout</Link></span> */}
          <span className="logout"  onClick={()=>{
            localStorage.removeItem('registrarData')
            localStorage.removeItem('e.students')
            localStorage.removeItem('deptData')
           navigate("/SignInST")
          }} ><span  style={{textDecoration:'none', color:'white'}}>Logout</span></span>
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
        <span className="abebe-kebede-1">{userName}</span>
      
      </div>
      
      <div className='dashboardREG'>
      <div className="rectangle-3">
          <img className="phexport-fill-1" src={phexportFill1}alt="" />
          <div className="flex-container-8">
             <span className="no-of-items-lent">No. of Pending Requests</span>
            {/* <span className="num-54">54</span> */}
            {pRequests.map(request => (
              <span className="num-54">{request.student_count}</span>
          ))}
          </div>
        </div>
        <div className="rectangle-3-1REG">
        <img className="icbaseline-note-alt-1REG" src={icbaselineNoteAlt1} alt=""/>
        <div className="flex-container-9REG">
        <span className="no-of-pending-reques">No. of Approved Requests</span>
          {aRequests.map(request => (
              <span className="num-21">{request.student_count}</span>
          ))}
        </div>
      </div></div>
    </div>
    </div>
  )
  }