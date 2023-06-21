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
const[loading,isLoading]=useState(false)
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
            // else{
            //   window.alert('Please enter your crediantials to continue')
            // }
      }
     },[])

     useEffect(()=>{
        const userData= localStorage.getItem("staffData")
        const parsedData=JSON.parse(userData)
     if(parsedData){
         if(parsedData.loggedIn===1){
             navigate("/HomeSTAFF")
            }
            else{
              window.alert('Please enter your crediantials to continue')
            }
      }
     },[])


  const registrarFunction = () => {

   
isLoading(true)
    axios.post("https://aau-scs-service.onrender.com/registrarLogin",{staffID:userId,password})
    .then(res=>{
        localStorage.setItem("registrarData",JSON.stringify(res.data))
        console.log(res.data)
      //  navigate("/HomeREG")
      const regData= localStorage.getItem("registrarData")
      const parsedData=JSON.parse(regData)
   if(parsedData){
       if(parsedData.loggedIn===1){
        isLoading(false)
           navigate("/HomeREG")
          } else{
            isLoading(false)
            window.alert('Incorrect Username or Password')
          }
    }
        }).catch(err=>{
        console.log(err)
        isLoading(false)
        window.alert('Incorrect Username or Password')
    })
    console.log('Registrar function executed!');
  };

  const staffFunction = () => {

   
    isLoading(true)

    axios.post("https://aau-scs-service.onrender.com/staffLogin",{staffID:userId,password})
        .then(res=>{
            localStorage.setItem("staffData",JSON.stringify(res.data))
            console.log(res.data)
          //  navigate("/HomeSTAFF")
          const userData= localStorage.getItem("staffData")
        const parsedData=JSON.parse(userData)
     if(parsedData){
         if(parsedData.loggedIn===1){
             navigate("/HomeSTAFF")
             isLoading(false)
            }
            else{      
                isLoading(false)
              window.alert('Incorrect Username or Password')
            }
      }
           console.log('Staff function executed!');
            }).catch(err=>{
              isLoading(false)
            console.log(err)
        window.alert('Incorrect Username or Password')
        })
    
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
             <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center',marginLeft:'-30px'}}> 
           <div style={{paddingLeft:'10px',paddingRight:'10px'}}><label>
      <input
          type="checkbox"
          checked={isRegistrar}
          onChange={() => setIsRegistrar(!isRegistrar)}
        />
      <strong>Registrar</strong>  
      </label></div>
      <div style={{paddingLeft:'10px',paddingRight:'10px'}}><label>    
        <input
          type="checkbox"
          checked={isStaff}
          onChange={() => setIsStaff(!isStaff)}
        />
       <strong>Staff</strong> 
      </label></div> </div> 
           <button className="sign-in-btn" onClick={handleSubmit}>{loading?'Signing in...':'Signin'} </button>
             <span className="forgot-password">Forgot your password?</span>
           </div>
               <img className="background-pattern" src={backgroundPattern} alt=""/>
        </div>
    );
}


