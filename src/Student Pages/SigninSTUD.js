import React,{useState,useEffect} from "react"
import backgroundPattern from '../assets/backgroundPattern.svg'
import "./SigninSTUD.css"
import {Link} from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function SigninSTUD(){
    const navigate=useNavigate()
    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    useEffect(()=>{
        const userData= localStorage.getItem("studentData")
        const parsedData=JSON.parse(userData)
     if(parsedData){
         if(parsedData.loggedIn===1){
            //  if(parsedData.data[0].usertype!=='registral'){
            //      navigate("/HomeSTAFF")
            // }
            // else {
            //      navigate("/HomeREG")
            // }
            navigate('/HomeSTUD')
            }
     }
       
     
     },[])
     const login=()=>{
         axios.post("https://aau-scs-service.onrender.com/studentLogin",{studentID:userId,password})
         .then(res=>{
             localStorage.setItem("studentData",JSON.stringify(res.data))
            //  if(res.data.data[0].usertype!=='registral'){
            //      navigate("/HomeSTAFF")
            // }
            // else {
            //      navigate("/HomeREG")
            // }
            if(res.data!=="incorrect username or password"){
            navigate('/HomeSTUD')
        }

         }).catch(err=>{
             console.log(err)
         })
     }
    return(
        <div className="sign-in-page-desktopSTUD">
        <div className="white-backgroundSTUD">
        <span className="welcome-1STUD">Welcome</span>
            <span className="sign-inSTUD">Sign in your account</span>
             <span className="student-idSTUD">Student ID</span>   
             <input type="text" className="id-input-fieldSTUD" value={userId} onChange={(e)=>{
                setUserId(e.target.value)
             }}/>    
             <span className="passwordSTUD">Password</span>     
             <input type="password" className="password-input-fieldSTUD" value={password} onChange={(e)=>{
            setPassword(e.target.value)
             }}/>  
             <button className="sign-in-btnSTUD" onClick={login}>Signin
                {/* <Link to="/HomeSTUD" style={{color:'white'}}></Link> */}
                </button>   
             {/* <input type="button" className="sign-in-btn" value="Signin"/>    */}
             <span className="forgot-passwordSTUD">Forgot your password?</span>
        </div>
        {/* <span className="new-accountSTUD">Don't have an account?<a href="#">Signup</a></span> */}
        <img className="background-patternSTUD" src={backgroundPattern} alt=""/>
        </div>
    );
}