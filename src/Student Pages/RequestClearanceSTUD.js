import React from "react"
import "./RequestClearanceSTUD.css"
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
// import icbaselineMenu from "./assets/icbaselineMenu.svg";
export default function RequestClearanceSTUD(){
    return(
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
                <span id="l" className="label3STUD">Date:</span>
                <span id="l" className="label4STUD">Reason(s)for<br/> &nbsp;&nbsp; withdrawal:</span>
            </div>
            <div className="input-boxes">
                <input type="text" className="input-box1STUD"/>
                <input type="text" className="input-box1STUD"/>
                <input type="date" className="input-box1STUD"/>
                <textarea className="reasonSTUD" /> 
                <input type="button" value="Request Clearance" className="rc-btn2STUD"/>
            </div>
            <div className="status-tableSTUD">
            <table className="styled-tableSTUD">
    <thead>
        <tr>
            <th><input type="checkbox"/></th>
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
        <div className="flex-container-4STUD">
          <div className="rectangle-2STUD">
            <span className="num-2022-addis-ababaSTUD">
              ©2022: Addis Ababa University{" "}
            </span>
          </div>
        </div>
        </div>
    )
}
