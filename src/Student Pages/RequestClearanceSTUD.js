import React, { useEffect, useState } from "react"
import "./RequestClearanceSTUD.css"
// import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import Sidebar from './SideBar';
import axios from "axios";
// import { response } from "express";
export default function RequestClearanceSTUD(){
const [data,setData]= useState([])
    useEffect(()=>{
        axios.get('https://student-clearance-system.onrender.com/request/1')
        .then(res=> setData(res.data.data))
        .catch(err=>console.log(err))
    },[])
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
                <span id="l" className="label1STUD">Academic Year:</span>
                <span id="l" className="label2STUD">Semester:</span>
                <span id="l" className="label3STUD">Last Date Class Attended:</span>
                <span id="l" className="label4STUD">Reason(s):</span>
            </div>
            <div className="input-boxes">
                {/* <input type="text" className="input-box1STUD"/> */}
                {/* <label for="dog-names">Choose a dog name:</label> */}
<select name="academic-year" id="academic-year" className="input-box1STUD">
    <option value="22/23fs">2022/2023</option>
    <option value="22/23ss">2022/2023</option>

</select>
<select name="academic-sem" id="academic-sem" className="input-box1STUD">
    <option value="22/23fs">1st Semester</option>
    <option value="22/23ss">2nd Semester</option>

</select>
                <input type="date" className="input-box1STUD"/>
                <textarea className="reasonSTUD" /> 
                <input type="button" value="Request Clearance" className="rc-btn2STUD"/>
            </div>
            <div className="status-tableSTUD">
            <table className="styled-tableSTUD">
    <thead>
        <tr>
            <th><input type="checkbox" checked/></th>
            <th>Department</th>
            <th>Office</th>
            <th>Officer</th>
        </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>
            </div>
        </div>
        <div>
          {/* <button onClick={studentData}>click</button>  */}
          {data.map((item)=>(
            <div>
                <p style={{color:'black'}}>{item.reason}</p>
            <p>{item.store}</p></div>
           
          ))}
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
