import React from 'react'
import backgroundPattern from "../assets/backgroundPattern.svg";
import './SignupSTUD.css'
export default function SignupSTUD() {
  return (
    <div className="sign-up-page-desktop">
      <div className="white-background">
        <span className="create-an-account">Create an account</span>
        <span className="full-name">Full Name</span>
        <input className="name-input-field" type="text" />
        <span className="student-id">Student ID</span>
        <input className="input-field" type="text" />
        <span className="school-department">School&#x2F;Department</span>
        <input className="input-field-1" type="text" />
        <span className="password">Password</span>
        <input className="password-input-field" type="password" />
        <span className="confirm-password">Confirm Password</span>
        <input className="password-input-field-1" type="password" />
        <button className="continue-cta" >
          <span className="label">Signup</span>
        </button>
      </div>
      <img className="background-pattern" src={backgroundPattern} alt="" />
    </div>
  )
}
