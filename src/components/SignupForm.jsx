import './style/LoginSignupForm.css'

import React from 'react'
import { Form , Container, Row, Col, Button, Dropdown, InputGroup, DropdownButton, FormControl} from 'react-bootstrap'
import LoadingButton from './LodingButton'
import { adminRole, atSignup, clinicRole, doctorRole, hospitalRole, superRole, userRole, validEmail, inValidEmail, emailNotExists, emailExists } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
// import SignupDataExtractor from '../backend/signup/SignupDataExtractor'
import { signupData, ValidateEmail } from '../backend/signup/SignupDataExtractor'
import { ADMIN, CLINIC, DOCTOR, HOSPITAL, SUPER, URL, USER } from '../backend/constants/BackendConstants'
import { makeSignupCall } from '../backend/signup/Signup'

export default function SignupForm() {
  const data = signupData
  var role = useSelector((state) => state.signupRoleState)
  var emailValid = useSelector((state) => state.isEmailValidState)
  const dispatch = useDispatch();
  const isEmailValid = ""
  var emailExists = useSelector((state) => state.emailExistsState);
  var apiKey = ""
  return (
    <>
    <div className='formContainer'>
      <div>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {roleName(role)}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(userRole())}>USER</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(doctorRole())}>DOCTOR</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(clinicRole())}>CLINIC</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(hospitalRole())}>HOSPITAL</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(adminRole())}>ADMIN</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(superRole())}>SUPER</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      </div>
    <Form className='signupForm' >
      <Row className='formRow' >
        <Col className='formCol sformCol'>
      <Form.Label className='formLabel'>Sign Up</Form.Label> <hr size='inherit' className='hrline'/>
      <Form.Group  controlId="formGroupText" id='loginParent' className="mb-3 fieldResize">
        <Form.Label className='labelResize'>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" onChange={ (e) => {
          setName(e,data)
          }}/>
      </Form.Group>
      <Form.Group  controlId="formGroupEmail" id='loginParent' className="mb-3 fieldResize">
        <Form.Label className='labelResize'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" className={ emailState(emailValid)} onChange={(e) => {
          ValidateEmail(e) ? dispatch(validEmail()) : dispatch(inValidEmail());
          setEmail(e,data)
          checkIfEmailExists(data,emailValid,dispatch)
        } }/>
        {emailExists === 0? <div className="invalid-feedback" id='whenEmailInvalid'>
          Please provide a valid Email.
        </div> : <div className="invalid-feedback" id='whenEmailExists'>
          Email Already Exists.
        </div>
        }
        
        
        <div className="valid-feedback">
          looks good.
        </div>
      </Form.Group>
      <Form.Group  controlId="formGroupPassword" className="mb-3 fieldResize" >
        <Form.Label className='labelResize'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => {
          setPassword(e,data)
          console.log(data)
        }} />
      </Form.Group>
      {/* <Form.Group  controlId="formGroupPasswordConfirm" className="mb-3 fieldResize" >
        <Form.Label className='labelResize'>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='' />
      </Form.Group> */}
      <div className='buttonLoading'>
        {/* <LoadingButton/>  */}
        <Button variant='outline-dark' href="/" onClick={
          (e) => {
            if(data.name === '' || data.email === '' || data.password ==='' || role === 0 || !(emailExists === 0) || !(emailValid === 1)) {
              e.preventDefault();
            }
            else {
              apiKey = getApiKey(role);
              makeSignupCall(data,apiKey);
              e.preventDefault();
            }
          }
        }>Sign Up</Button>
          <Button variant="link" onClick={() => dispatch(atSignup()) }>Already have an Account?</Button>
      </div>
      <div className='buttonLoading'>
      <h1 className='brand-name-align'>Patient Helping<br/> System</h1>
      </div>
      </Col>
      </Row>
    </Form>
    </div>
    </>
  )
}

function setName(e, data) {
  data.name = e.target.value;
  const name = e.target.value;
  console.log(data)
}
function setEmail (e,data) {
  data.email = e.target.value;
  // console.log(e.target.value)
}

function roleName(state) {
  switch(state) {
    case 0: return "Select Role"
    case 1: return "USER"
    case 2: return "DOCTOR"
    case 3: return "CLINIC"
    case 4: return "HOSPITAL"
    case 5: return "ADMIN"
    case 6: return "SUPER"
    default: return "Select Role"
  }
}

function getApiKey(state) {
  switch(state) {
    case 1: return USER
    case 2: return DOCTOR
    case 3: return CLINIC
    case 4: return HOSPITAL
    case 5: return ADMIN
    case 6: return SUPER
    default: return "Select.Role"
  }
}

function emailState(emailValid) {

  switch(emailValid) {
    case 1: return "is-valid";
    case 2: return "is-invalid";
    default: return "";
  }
}


function setPassword(e,data) {
  data.password = e.target.value;
}


async function checkIfEmailExists(data,state,dispatch) {
  var email = {email:data.email}
  if(state === 1) {
    const url = URL + "public/users/email"
    let response = await fetch(url,{
      "method":"POST",
      body: JSON.stringify(email),
      headers: {"Content-type":"application/json;charset=utf-8"}
    })
    let body = await response.text()
    let res = {
      status: response.status,
      body: body
    }
    if(res.status === 200 && res.body === 'true') {
      dispatch(inValidEmail())
      dispatch(emailExists())
    }
    else dispatch(emailNotExists())
  }
  else dispatch(emailNotExists())
}