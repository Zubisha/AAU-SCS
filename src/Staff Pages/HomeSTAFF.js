import React,{useState,useEffect} from 'react'
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function HomeSTAFF() {
  const navigate=useNavigate()
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

  const [pRequests, setPrequests] = useState([]);

  useEffect(() => {
    const fetchNoOfRequests = async () => {
      // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
      const userData= localStorage.getItem("staffData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://aau-scs-service.onrender.com/numberOfPendingRequestsToOffice', {
          officeID: parsedData.data[0].officeid
        });
console.log(parsedData.data[0].officeid)
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
      const userData= localStorage.getItem("staffData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://aau-scs-service.onrender.com/numberOfApprovedRequestsToOffice', {
          officeID: parsedData.data[0].officeid
        });
console.log(parsedData.data[0].officeid)
        // Assuming the response data is an array of student clearance requests
        const aRequests = response.data.data;

        setArequests(aRequests);
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
          <span className="logout"  onClick={()=>{
            localStorage.removeItem('staffData')
           navigate("/SignInST")
          }} ><span  style={{textDecoration:'none', color:'white',cursor:'pointer'}}>Logout</span></span>
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
        <span className="abebe-kebede-1">{staffName}</span>
      
      </div>
      
      <div className='dashboard'>
      <div className="rectangle-3ST">
          <img className="phexport-fill-1" src={phexportFill1}alt="" />
          <div className="flex-container-8ST">
            <span className="no-of-items-lent">No. of Pending Requests</span>
            {/* <span className="num-54">54</span> */}
            {pRequests.map(request => (
              <span className="num-54">{request.clearance_count}</span>
          ))}
          </div>
        </div>
        <div className="rectangle-3-1ST">
        <img className="icbaseline-note-alt-1" src={icbaselineNoteAlt1} alt=""/>
        <div className="flex-container-9ST">
          <span className="no-of-pending-reques">No. of Approved Requests</span>
          {aRequests.map(request => (
              <span className="num-21">{request.clearance_count}</span>
          ))}
          {/* <span className="num-21">21</span> */}
        </div>
      </div></div>
    </div>
    </div>
  )
  }