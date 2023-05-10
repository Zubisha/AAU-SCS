import React from 'react'
import SigninSTAFF from './Staff Pages/SigninSTAFF'
import SignupSTAFF from './Staff Pages/SignupSTAFF'
import HomeSTAFF from './Staff Pages/HomeSTAFF'
import RequestsSTAFF from './Staff Pages/RequestsSTAFF'
import LendItemsSTAFF from './Staff Pages/LendItemsSTAFF'
import StudentListSTAFF from './Staff Pages/StudentListSTAFF'
import StudentDetailSTAFF from './Staff Pages/StudentDetailSTAFF'
import { Routes , Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/SignInSTAFF" element={<SigninSTAFF/>}/>
      <Route path="/SignupSTAFF" element={<SignupSTAFF/>}/>
        <Route path="/HomeSTAFF" element={<HomeSTAFF/>}/>
        <Route path="/RequestsSTAFF/*" element={<RequestsSTAFF/>}/>
        <Route path="/LendItemsSTAFF" element={<LendItemsSTAFF/>}/>
        <Route path="/StudentListSTAFF" element={<StudentListSTAFF/>}/>
        <Route path="/StudentDetailSTAFF" element={<StudentDetailSTAFF/>}/>
      </Routes>
    </div>
  )
}


// import React from "react"
// import backgroundPattern from '../assets/backgroundPattern.svg'
// import "./Signin.css"
// import { Link } from "react-router-dom";
// export default function Signin(){
//     return(
//         <div className="sign-in-page-desktop">
//         <div className="white-background">
//         <span className="welcome-1">Welcome</span>
//             <span className="sign-in">Sign in your account</span>
//              <span className="staff-id">Staff ID</span>   
//              <input type="text" className="id-input-field"/>    
//              <span className="password">Password</span>     
//              <input type="password" className="password-input-field"/>     
//            {/* <input type="button" className="sign-in-btn" value="Signin"/>    */}
//             <button className="sign-in-btn"> <Link to="/" style={{textDecoration:'none', color:'white'}}>Signin</Link> </button>
//              <span className="forgot-password">Forgot your password?</span>
//         </div>
//         {/* <a href="#"></a> */}
//         <span className="new-account">Don't have an account?<Link to="/Signup">Signup</Link></span>
//         <img className="background-pattern" src={backgroundPattern} alt=""/>
//         </div>
//     );
// }