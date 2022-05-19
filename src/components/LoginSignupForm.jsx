import './style/LoginSignupForm.css'

import React from 'react'
import { Form , Container, Row, Col} from 'react-bootstrap'
import LoginForm from './LoginForm'
import { Routes, Route, Router } from 'react-router-dom'
import SignupForm from './SignupForm'
import { useSelector } from 'react-redux'


export const LoginSignupForm = () => {
  const currentLoginSignupState = useSelector((state) => state.loginSignupState);
  return (
    <>
    { currentLoginSignupState == 0? <LoginForm/> : <SignupForm/>}
    </>
  )
}
