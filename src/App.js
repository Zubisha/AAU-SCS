import React from 'react'

// import Signin from './Registrar Pages/SigninREG'
// import Signup from './Registrar Pages/SignupREG'
import Home from './Registrar Pages/HomeREG'
import Requests from './Registrar Pages/RequestsREG'
import StudentList from './Registrar Pages/StudentListREG'
import StudentDetail from './Registrar Pages/StudentDetailREG'

// import SigninSTAFF from './Staff Pages/SigninSTAFF'
// import SignupSTAFF from './Staff Pages/SignupSTAFF'
import HomeSTAFF from './Staff Pages/HomeSTAFF'
import RequestsSTAFF from './Staff Pages/RequestsSTAFF'
import LendItemsSTAFF from './Staff Pages/LendItemsSTAFF'
import StudentListSTAFF from './Staff Pages/StudentListSTAFF'
import StudentDetailSTAFF from './Staff Pages/StudentDetailSTAFF'

import SigninSTUD from "./Student Pages/SigninSTUD"
import SignupSTUD from "./Student Pages/SignupSTUD"
import Sidebar from './Student Pages/SideBar';
import HomeSTUD from "./Student Pages/homeSTUD"
import RequestClearanceSTUD from "./Student Pages/RequestClearanceSTUD"
import ClearanceStatusSTUD from "./Student Pages/ClearanceStatusSTUD"

import LandingPage from './LandingPage'
import SigninST from './SigninST'
import SignupST from './SignupST'
import { Routes , Route } from 'react-router-dom'
export default function App() {
 const pchecker = () => {

  if( window.location.pathname === '/HomeSTUD' || 'RequestClearanceSTUD' || 'ClearanceStatusSTUD'){
  return <Sidebar/>
 }
 }

 
  
  return (
    <div>
{pchecker}
      {/* <Sidebar/> */}
      <Routes>
      {/* <Route path="/SignInREG" element={<Signin/>}/>
      <Route path="/SignupREG" element={<Signup/>}/> */}
      {/* {window.location.pathname === ('/HomeSTUD' || '/RequestClearanceSTUD' || '/ClearanceStatusSTUD' ) && <Sidebar/>} */}
      
       
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/HomeREG" element={<Home/>}/>
        <Route path="/SigninST/HomeREG" element={<Home/>}/>
        <Route path="/RequestsREG/*" element={<Requests/>}/>
        <Route path="/StudentListREG" element={<StudentList/>}/>
        <Route path="/StudentDetailREG" element={<StudentDetail/>}/>

        {/* <Route path="/SignInSTAFF" element={<SigninSTAFF/>}/>
        <Route path="/SignupSTAFF" element={<SignupSTAFF/>}/> */}
        <Route path="/SigninST/HomeSTAFF" element={<HomeSTAFF/>}/>
        <Route path="/HomeSTAFF" element={<HomeSTAFF/>}/>
        <Route path="/RequestsSTAFF/*" element={<RequestsSTAFF/>}/>
        <Route path="/LendItemsSTAFF" element={<LendItemsSTAFF/>}/>
        <Route path="/StudentListSTAFF" element={<StudentListSTAFF/>}/>
        <Route path="/StudentDetailSTAFF" element={<StudentDetailSTAFF/>}/>

       
        <Route path="/HomeSTUD" element={<HomeSTUD/>}/>
        <Route path="RequestClearanceSTUD" element={<RequestClearanceSTUD/>}/>
        <Route path="ClearanceStatusSTUD" element={<ClearanceStatusSTUD/>}/>
        <Route path="SigninSTUD" element={<SigninSTUD/>}/>
        <Route path="SignupSTUD" element={<SignupSTUD/>}/>

        <Route path="SigninST/*" element={<SigninST/>}/>
        <Route path="SignupST" element={<SignupST/>}/>

      </Routes>
    </div>
  )
}
