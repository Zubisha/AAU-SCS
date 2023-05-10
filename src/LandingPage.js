import React from 'react'
import './LandingPage.css'
import ImgAsset from './public'
import Signin from './Registrar Pages/SigninREG'
// import Signin from './Staff Pages/Signin'
// import Signin from './Student Pages/Signin'
import { Link } from 'react-router-dom'
export default function LandingPage() {
  return (
    <div>
        <div className='ParentContainer'>
          <p style={{fontSize:'1px', visibility:'hidden'}}>. </p>
            <div className='ChildContainer'>
               
                    <navbar className='nav'>
            <span className='Home'>Home</span>
			<span className='About'>About</span>
			<span className='Deadlines'>Deadlines</span>
			<span className='Help'>Help</span>
                    </navbar>
      
                <div className='titlecontainer'>
                    <img src={ImgAsset.LandingPageDesktop_image1} alt='img' className='logoimg'/>
                   <div className="int">
                    <span className='Welcometo'>Welcome to<br/></span>
			        <span className='AAUStudentClearanceSystem'>AAU Student Clearance System</span>
                </div>
                </div>
                <div className='dc2'>
                <div className='descriptioncontainer'>
                <span className='Description'>
                    Our online student clearance system streamlines the process for students 
                    to complete clearances, making it easy for students to conveniently manage
                     their clearance process without having to be in person.
                     </span>
                   
                </div>
                 <img src = {ImgAsset.LandingPageDesktop_manworkingonalaptopathisdesk} alt='img' className='studentimg'/>
                 </div>
                <div className='optioncontainer'>
                <span className='Continueasa'>Continue as a:</span>
			<div className='btncont'>
            <div className='Staff'>
				<button className='staffbtn'><Link to="/SigninST" style={{color:'white'}}>Staff</Link></button>
			</div>
			<div className='Student'>
				<button className='studentbtn'><Link to="/SigninSTUD" style={{color:'white'}}>Student</Link></button>
			</div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}
