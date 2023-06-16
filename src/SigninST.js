import React,{useState,useEffect} from "react"
import backgroundPattern from './assets/backgroundPattern.svg'
import "./SigninST.css"
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function SigninST(){
    
    const navigate=useNavigate()
    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')

    useEffect(()=>{
       const userData= localStorage.getItem("staffData")
       const parsedData=JSON.parse(userData)
    if(parsedData){
        if(parsedData.loggedIn===1){
            if(parsedData.data[0].usertype!=='registral'){
                navigate("/HomeSTAFF")
           }
           else {
                navigate("/HomeREG")
            }
           }
     }
    },[])
    const login=()=>{
        axios.post("https://student-clearance-system.onrender.com/staffLogin",{staffid:userId,password})
        .then(res=>{
            localStorage.setItem("staffData",JSON.stringify(res.data))
            if(res.data.data[0].usertype!=='registral'){
                navigate("/HomeSTAFF")
           }
           else {
                navigate("/HomeREG")
           }
            // console.log(res.data.data[0])
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="sign-in-page-desktop">
            <div className="white-background">
             <span className="welcome-1">Welcome</span>
             <span className="sign-in">Sign in your account</span>
             <span className="staff-id">Staff ID</span>   
              <input type="text" className="id-input-field" 
                value={userId}
                onChange={(e)=>{
                setUserId(e.target.value)
               }}/>    
             <span className="password">Password</span>     
             <input type="password" className="password-input-fieldSI" 
              value={password} 
              onChange={(e)=>{
              setPassword(e.target.value)
               }}/>     
           <button className="sign-in-btn" onClick={login}>Signin </button>
             <span className="forgot-password">Forgot your password?</span>
           </div>
               <img className="background-pattern" src={backgroundPattern} alt=""/>
        </div>
    );
}


