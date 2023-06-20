import React, { useEffect, useState } from "react"
import "./RequestClearanceSTUD.css"
// import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import Sidebar from './SideBar';
import axios from "axios";
// import { response } from "express";
export default function RequestClearanceSTUD(){
// const [data,setData]= useState([])
//     useEffect(()=>{
//         axios.get('https://student-clearance-system.onrender.com/request/1')
//         .then(res=> setData(res.data.data))
//         .catch(err=>console.log(err))
//     },[])
    // const studentData = ()=>{
    //     axios
    //     .post(
    //         "https://student-clearance-system.onrender.com/studentLogin",
                
    //                 {studentid:1,password: "zuber"}
                          
                
    //         )
    //     .then(res=>{
    //        console.log(res)
    //     }).catch(err=>{
    //        console.log(err)
    //     })
    // }

    // const axios = require('axios');

    // // Define the base URL for the API endpoint
    // const baseURL = 'https://aau-scs-service.onrender.com/request';
    
    // // Define the data object with the request body
    // const data = {
    //   "officeID": 0,  // Placeholder value, will be updated in the loop
    //   "studentID": "UGR/4362/12",
    //   "date": "2023-06-18",
    //   "reason": "Graduation",
    //   "semester": 2,
    //   "clearingYear": "2022/2023",
    //   "status": "Pending"
    // };
    
    // // Function to make the POST request
    // const makeRequest = async (data) => {
    //   try {
    //     const response = await axios.post(baseURL, data);
    //     console.log('Response:', response.data);
    //   } catch (error) {
    //     console.error('Error:', error.message);
    //   }
    // };
    
    // // Iterate through the office IDs
    // for (let officeID = 1; officeID <= 9; officeID++) {
    //   data.officeID = officeID; // Update the officeID in the data object
    //   makeRequest(data);
    // }

    const [academicYear, setAcademicYear] = useState('');
    const [semester, setSemester] = useState('');
    const [lastClassAttended, setLastClassAttended] = useState('');
    const [reason, setReason] = useState('');
    const[loading,isLoading]=useState(false)
    const handleSubmit = async (e) => {
      e.preventDefault();
  if(!lastClassAttended||!reason){
    alert('Please fill all the inputs');
    return;
  }
      // Get student ID from local storage
      const userID = localStorage.getItem('studentData');
      const parsedData=JSON.parse(userID)
       const  studentID=parsedData.data[0].studentid
      // Create an array of office IDs from 1 to 9
      const officeIDs = Array.from({ length: 9 }, (_, i) => i + 1);
  isLoading(true)
      // Iterate over each office ID and make a POST request
      for (const officeID of officeIDs) {
        const data = {
          officeID,
          studentID,
        //   staffID: '', // Replace with the actual staff ID value
          date: lastClassAttended,
          reason,
          semester,
          clearingyear: academicYear,
          status:"Pending"
        };
  
        try {
          await axios.post('https://aau-scs-service.onrender.com/request', data);
          console.log('Request submitted successfully:', data);
         
        } 
        catch (error) {
          console.error('Error submitting request:', error);
         
        }
      }
      isLoading(false)
      window.alert('Request submitted successfully!');
      window.location.reload();
    };

    
      const [offices, setOffices] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://aau-scs-service.onrender.com/officesToRequest');
            setOffices(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <div> 
            <Sidebar/>
        <div className="rc-pageSTUD">
           
           <div className="flex-containerSTUD">
          <img className="image-1STUD" src={image1} alt="" />
          <span className="titleSTUD">AAU Student Clearance Portal</span>
          {/* <img className="icbaseline-menu" src={icbaselineMenu} alt="" /> */}
        </div> 
        <div className="title-1STUD"><span>Clearance Form</span></div>
        <div className="clearance-formSTUD">
            <div className="labelSTUD">
                <span id="l" className="label1STUD">Clearing Year:</span>
                <span id="l" className="label2STUD">Semester:</span>
                <span id="l" className="label3STUD">Last Date Class Attended:</span>
                <span id="l" className="label4STUD">Reason(s):</span>
            </div>
            <form className="input-boxes">
                {/* <input type="text" className="input-box1STUD"/> */}
                {/* <label for="dog-names">Choose a dog name:</label> */}
<select name="academic-year" id="academic-year" className="input-box1STUD"
 value={academicYear}
 onChange={(e) => setAcademicYear(e.target.value)}
>
    <option value="2018/2019">2018/2019</option>
    <option value="2019/2020">2019/2020</option>
    <option value="2020/2021">2020/2021</option>
    <option value="2021/2022">2021/2022</option>

</select>
{/* <input
          type="text"
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
        /> */}
<select name="academic-sem" id="academic-sem" className="input-box1STUD" 
value={parseInt(semester)} onChange={(e) => setSemester(e.target.value)}>
    <option value="1">1st Semester</option>
    <option value="2">2nd Semester</option>

</select>
                {/* <input type="date" className="input-box1STUD"/> */}
                <input
          type="date"
          className="input-box1STUD" required
          value={lastClassAttended}
          onChange={(e) => setLastClassAttended(e.target.value)}
        />
                {/* <textarea className="reasonSTUD" />  */}
                <textarea
                className="reasonSTUD"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
                <input type="submit" disabled={loading} 
                value={loading? 'Submitting...': "Request Clearance"}
                 className="rc-btn2STUD"
                 onClick={handleSubmit}/>
                
            </form>
            <div className="status-tableSTUD">
            <table className="styled-tableSTUD">
    <thead>
        <tr>
            {/* <th><input type="checkbox" checked/></th> */}
            {/* <th>Department</th> */}
            <th>Office</th>
            <th>Phone Number</th>
        </tr>
    </thead>
    <tbody>
    {offices.map((office) => (
          <tr key={office.id}>
            <td>{office.officename}</td>
            <td>{office.phonenumber}</td>
          </tr>
        ))}
        {/* <tr>
            <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Library Office</td>
            <td>Abebe Kebede</td>
        </tr>
        <tr className="active-row">
        <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Academic Dean's Office</td>
            <td>Chaltu Metach</td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Library Office</td>
            <td>Abebe Kebede</td>
        </tr>
        <tr className="active-row">
        <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Academic Dean's Office</td>
            <td>Chaltu Metach</td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Library Office</td>
            <td>Abebe Kebede</td>
        </tr>
        <tr className="active-row">
        <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Academic Dean's Office</td>
            <td>Chaltu Metach</td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Library Office</td>
            <td>Abebe Kebede</td>
        </tr>
        <tr className="active-row">
        <td><input type="checkbox"/></td>
            <td>Information Sciences</td>
            <td>Academic Dean's Office</td>
            <td>Chaltu Metach</td>
        </tr> */}
    </tbody>
</table>
            </div>
        </div>
        <div>
          {/* <button onClick={studentData}>click</button>  */}
          {/* {data.map((item)=>(
            <div>
                <p style={{color:'black'}}>{item.reason}</p>
            <p>{item.store}</p></div>
           
          ))} */}
                  </div>
        <div className="flex-container-4STUD">
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