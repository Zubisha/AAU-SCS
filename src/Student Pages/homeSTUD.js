import React from "react"
import './homeSTUD.css'
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import vector from "../assets/vector.svg";
// import icbaselineMenu from "./assets/icbaselineMenu.svg";
import rectangle1 from "../assets/rectangle1.svg";
// import Header from "./header";
// import SideBar from "./SideBar";
export default function HomeSTUD(){
    return(
        <div className="landing-pageSTUD">
        <div className="flex-containerSTUD">
          <img className="image-1STUD" src={image1} alt="" />
          <span className="titleSTUD">AAU Student Clearance Portal</span>
          {/* <img className="icbaseline-menu" src={icbaselineMenu} alt="" /> */}
            {/* <SideBar/> */}
        </div>
        <div className="flex-container-1STUD">
          <div className="flex-container-2STUD">
            <span className="welcomeSTUD">Welcome</span>
            <span className="student-nameSTUD">Zuber Shemsu</span>
            <div className="flex-container-3STUD">
              <button className="request-clearanceSTUD">
              <Link to="/RequestClearanceSTUD" style={{textDecoration:'none'}}> <span className="labelSTUD" style={{color:'white'}}> Request Clearance</span></Link> 
              </button>
              <button className="check-statusSTUD">
              <Link to="/ClearanceStatusSTUD" style={{textDecoration:'none'}}> <span className="label-1STUD">Check Status</span></Link> 
              </button>
            </div>
          </div>
          <img className="vectorSTUD" src={vector} alt="" />
        </div>
        <div className="flex-container-4STUD">
          <img className="rectangle-1STUD"  src={rectangle1} alt="" />
          <div className="rectangle-2STUD">
            <span className="num-2022-addis-ababaSTUD">
              ©2022: Addis Ababa University{" "}
            </span>
          </div>
        </div>
      </div>
    )
}




/* Position and sizing of burger button */
// .bm-burger-button {
//   position: fixed;
//   width: 24px;
//   height: 16px;
//   right: 70px;
//   top: 64px;
// }

// /* Color/shape of burger icon bars */
// .bm-burger-bars {
//   background: #264D75;
// }

// /* Color/shape of burger icon bars on hover*/
// .bm-burger-bars-hover {
//   background: #a90000;
// }

// /* Position and sizing of clickable cross button */
// .bm-cross-button {
//   position: absolute;
//   width: 24px;
//   height: 24px;
//   right: 20px;
//   top: 20px;
// }

// /* Color/shape of close button cross */
// .bm-cross {
//    background: #264D75;
// }

// /*
// Sidebar wrapper styles
// Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
// */
// /* .bm-menu-wrap {
//   position: fixed;
//   height: 100%;
// } */

// /* General sidebar styles */
// /* .bm-menu {
//   /* background: #f0f0f0;

//   padding: 2.5em 1.5em 0;
//   font-size: 1.15em;
// } */ */

// /* Morph shape necessary with bubble or elastic */
// .bm-morph-shape {
//   fill: #f0f0f0;
// }

// /* Wrapper for item list */
// .bm-item-list {
//   max-height: 20%;
//   color: #3b7bbb;;
//   padding: 40px;
//   margin: 20px;
//   background-color: #f0f0f0;

// }


// /* Individual item */
// /* .bm-item {
//   display: inline-block;
// } */

// /* Styling of overlay */
// .bm-overlay {
//   background: rgba(0, 0, 0, 0.3);
// }
// .menu-list{
//   display: flex;
//   flex-direction: column;
// }
// .menu{
//   height: 10%;
// }