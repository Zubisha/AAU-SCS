import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import "./ClearanceStatusSTUD.css"
import image1 from "../assets/image1.png";
import SideBar from "./SideBar";
import axios from "axios";
export default function ClearanceStatusSTUD() {
  // const [data,setData]= useState([])
  
  //   useEffect(()=>{
  //       axios.get('https://student-clearance-system.onrender.com/request/1')
  //       .then(res=> setData(res.data.data))
  //       .catch(err=>console.log(err))
  //   },[])


  const [studentClearanceRequests, setStudentClearanceRequests] = useState([]);

  useEffect(() => {
    const fetchStudentClearanceRequests = async () => {
      // const officeID = localStorage.getItem('officeid'); // Retrieving 'userType' from local storage
      const userData= localStorage.getItem("studentData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://aau-scs-service.onrender.com/fetchrequests', {
          studentID: parsedData.data[0].studentid
        });
console.log(parsedData.data[0].studentid)
        // Assuming the response data is an array of student clearance requests
        const studentClearanceRequests = response.data.data;
console.log(response.data.data)
        setStudentClearanceRequests(studentClearanceRequests);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching student clearance requests:', error);
      }
    };
    }
    fetchStudentClearanceRequests();
  }, []);

  return (
    <div> <SideBar/>
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
     {/* <th>Officer</th> */}
     <th>Date</th>
     <th>Status</th>
 </tr>
</thead>
<tbody>
{studentClearanceRequests.map(request => (
            <tr key={request.id}>
 <td>{request.departmentname}</td>
 <td>{request.officename}</td>

               {/* <td>{request.fullname}</td> */}
              <td>{request.date.split('T')[0]}</td>
              {/* <td>{request.reason}</td>

              <td>{request.clearingyear}</td> */}
              <td>{request.status}</td>

             
            </tr>
          ))}
 {/* <tr>
 
     <td>Information Sciences</td>
     <td>Library Office</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     {/* <td>{data.map((item)=>(
         
            <p>{item.librarychef}</p>
          ))}
          </td> 
 </tr>
 <tr className="active-rowSTUD">
     <td>Information Sciences</td>
     <td>Academic Dean's Office</td>
     <td>Chaltu Metach</td>
     <td>21 Jun,2023</td>
     {/* <td>{data.map((item)=>(
         
         <p>{item.academicdean}</p>
       ))}
       </td> 
 </tr>
 <tr>
     <td>Information Sciences</td>
     <td>Faculty Advisor</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     {/* <td>{data.map((item)=>(
         
         <p>{item.facultyadvisor}</p>
       ))}
       </td>  
       </tr>
 <tr className="active-rowSTUD">
     <td>Information Sciences</td>
     <td>Sport Master</td>
     <td>Chaltu Metach</td>
     <td>21 Jun,2023</td>
     {/* <td>{data.map((item)=>(
         
         <p>{item.sportmaster}</p>
       ))}
       </td> 
 </tr>
 <tr>
     <td>Information Sciences</td>
     <td>Store</td>
     <td>Abebe Kebede</td>
     <td>21 Jun,2023</td>
     {/* <td>{data.map((item)=>(
         
         <p>{item.store}</p>
       ))}
       </td> 
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
 </tr> */}
</tbody>
</table>

     </div>
<div classsName="buttonbox" style={ {width:" 50.5%; ",display: 'flex;',
    flexDirection: "row;", justifyContent: "end;"}}>
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
 </div>

  )
}
