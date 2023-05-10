import React from "react"
import backgroundPattern from '../assets/backgroundPattern.svg'
import "./SigninSTAFF.css"
import { Link } from "react-router-dom";
export default function SigninSTAFF(){
    return(
        <div className="sign-in-page-desktop">
        <div className="white-background">
        <span className="welcome-1">Welcome</span>
            <span className="sign-in">Sign in your account</span>
             <span className="staff-id">Staff ID</span>   
             <input type="text" className="id-input-field"/>    
             <span className="password">Password</span>     
             <input type="password" className="password-input-field"/>     
           {/* <input type="button" className="sign-in-btn" value="Signin"/>    */}
            <button className="sign-in-btn"> <Link to="/HomeSTAFF" style={{textDecoration:'none', color:'white'}}>Signin</Link> </button>
             <span className="forgot-password">Forgot your password?</span>
        </div>
        {/* <a href="#"></a> */}
        <span className="new-account">Don't have an account?<Link to="/SignupSTAFF" style={{textDecoration:'none'}}>Signup</Link></span>
        <img className="background-pattern" src={backgroundPattern} alt=""/>
        </div>
    );
}


