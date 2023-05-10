import React from "react"
import { Routes, Route } from "react-router-dom"
import SigninSTUD from "./Student Pages/SigninSTUD"
import SignupSTUD from "./Student Pages/SignupSTUD"
import Sidebar from './Student Pages/SideBar';
import HomeSTUD from "./Student Pages/homeSTUD"
import RequestClearanceSTUD from "./Student Pages/RequestClearanceSTUD"
import ClearanceStatusSTUD from "./Student Pages/ClearanceStatusSTUD"
import LandingPage from "./LandingPage";
export default function App() {
    // const hidden = ()=>{window.location.pathname.match !== '/' && <Sidebar/>}
 
    return (
        <div className="container">
           {window.location.pathname !== '/' && <Sidebar/>}
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/HomeSTUD" element={<HomeSTUD/>}/>
            <Route path="RequestClearanceSTUD" element={<RequestClearanceSTUD/>}/>
            <Route path="ClearanceStatusSTUD" element={<ClearanceStatusSTUD/>}/>
            <Route path="SigninSTUD" element={<SigninSTUD/>}/>
            <Route path="SignupSTUD" element={<SignupSTUD/>}/>
            </Routes> 
        </div>
    )   
}


// import React from "react"
// // import Signin from "./Signin"
// // import Signup from "./Signup"
// // import Home from "./home"
// // import RequestClearance from "./RequestClearance"
// import ClearanceStatus from "./ClearanceStatus"
// export default function App() {
//     return (
//         <div className="container">
//             {/* <Signup/> */}
//             {/* <Signin/> */}
//             {/* <Home/> */}
//         {/* <RequestClearance/>  */}
//         <ClearanceStatus/>
//         </div>
//     )   
// }