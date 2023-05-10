import React from "react"
import backgroundPattern from '../assets/backgroundPattern.svg'
import "./SigninSTUD.css"
import {Link} from "react-router-dom"
export default function SigninSTUD(){
    return(
        <div className="sign-in-page-desktopSTUD">
        <div className="white-backgroundSTUD">
        <span className="welcome-1STUD">Welcome</span>
            <span className="sign-inSTUD">Sign in your account</span>
             <span className="student-idSTUD">Student ID</span>   
             <input type="text" className="id-input-fieldSTUD"/>    
             <span className="passwordSTUD">Password</span>     
             <input type="password" className="password-input-fieldSTUD"/>  
             <button className="sign-in-btnSTUD"><Link to="/HomeSTUD" style={{color:'white'}}>Signin</Link></button>   
             {/* <input type="button" className="sign-in-btn" value="Signin"/>    */}
             <span className="forgot-passwordSTUD">Forgot your password?</span>
        </div>
        <span className="new-accountSTUD">Don't have an account?<a href="#">Signup</a></span>
        <img className="background-patternSTUD" src={backgroundPattern} alt=""/>
        </div>
    );
}