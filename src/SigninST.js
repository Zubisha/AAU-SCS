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

    // useEffect(()=>{
    //    const userData= localStorage.getItem("staffData")
    //    const parsedData=JSON.parse(userData)
    // if(parsedData){
    //     if(parsedData.loggedIn===1){
    //         navigate("/HomeSTAFF")
    //        }
    //  }
    // },[])
    // const login=()=>{
    //     axios.post("https://aau-scs-service.onrender.com/staffLogin",{staffID:userId,password})
    //     .then(res=>{
    //         localStorage.setItem("staffData",JSON.stringify(res.data))
    //         console.log(res.data)
    //     //     if(res.data.data[0].usertype!=='registral'){
                
    //     //    }
    //        navigate("/HomeSTAFF")
        
    //     //    else {
    //     //         navigate("/HomeREG")
    //     //    }
    //         // console.log(res.data.data[0])
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }

    const [isRegistrar, setIsRegistrar] = useState(false);
  const [isStaff, setIsStaff] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isRegistrar) {
      // Execute registrar function
      registrarFunction();
    }

    if (isStaff) {
      // Execute staff function
      staffFunction();
    }
  };

 useEffect(()=>{
        const regData= localStorage.getItem("registrarData")
        const parsedData=JSON.parse(regData)
     if(parsedData){
         if(parsedData.loggedIn===1){
             navigate("/HomeREG")
            }
      }
     },[])

     useEffect(()=>{
        const userData= localStorage.getItem("staffData")
        const parsedData=JSON.parse(userData)
     if(parsedData){
         if(parsedData.loggedIn===1){
             navigate("/HomeSTAFF")
            }
      }
     },[])


  const registrarFunction = () => {

   

    axios.post("https://aau-scs-service.onrender.com/registrarLogin",{staffID:userId,password})
    .then(res=>{
        localStorage.setItem("registrarData",JSON.stringify(res.data))
        console.log(res.data)
       navigate("/HomeREG")
        }).catch(err=>{
        console.log(err)
    })
    console.log('Registrar function executed!');
  };

  const staffFunction = () => {

   

    axios.post("https://aau-scs-service.onrender.com/staffLogin",{staffID:userId,password})
        .then(res=>{
            localStorage.setItem("staffData",JSON.stringify(res.data))
            console.log(res.data)
           navigate("/HomeSTAFF")
            }).catch(err=>{
            console.log(err)
        })
    console.log('Staff function executed!');
  };

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
                <label>
        <input
          type="checkbox"
          checked={isRegistrar}
          onChange={() => setIsRegistrar(!isRegistrar)}
        />
        Registrar
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isStaff}
          onChange={() => setIsStaff(!isStaff)}
        />
        Staff
      </label>
           <button className="sign-in-btn" onClick={handleSubmit}>Signin </button>
             <span className="forgot-password">Forgot your password?</span>
           </div>
               <img className="background-pattern" src={backgroundPattern} alt=""/>
        </div>
    );
}


