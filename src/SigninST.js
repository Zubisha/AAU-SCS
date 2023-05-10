import React from "react"
import backgroundPattern from './assets/backgroundPattern.svg'
import "./SigninST.css"
import { Link } from "react-router-dom";
export default function SigninST(){
    return(
        <div className="sign-in-page-desktop">
        <div className="white-background">
        <span className="welcome-1">Welcome</span>
            <span className="sign-in">Sign in your account</span>
             <span className="staff-id">Staff ID</span>   
             <input type="text" className="id-input-field"/>    
             <span className="password">Password</span>     
             <input type="password" className="password-input-fieldSI"/>     
           {/* <input type="button" className="sign-in-btn" value="Signin"/>    */}
            <button className="sign-in-btn"> <Link to="/HomeREG" style={{textDecoration:'none', color:'white'}}>Signin</Link> </button>
             <span className="forgot-password">Forgot your password?</span>
   <div className='RadioBTN'> 
     <Link to='HomeSTAFF'> <label className="RBTNS" for="Staff">Dept. Staff</label>  </Link>
      <input type="radio" id='Staff'name="Officer" value='Staff'/>
      <Link to='HomeREG'>   <label className="RBTNR" for='Registrar'>Registrar</label> </Link>
      <input type="radio" name="Officer" id='Registrar' value='Registrar'/>
</div> 
        </div>
        {/* <a href="#"></a> */}
        <span className="new-account">Don't have an account?<Link to="/SignupST" style={{textDecoration:'none'}}>Signup</Link></span>
        <img className="background-pattern" src={backgroundPattern} alt=""/>
        </div>
    );
}


