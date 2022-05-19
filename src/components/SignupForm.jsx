import './style/LoginSignupForm.css'

import React from 'react'
import { Form , Container, Row, Col, Button} from 'react-bootstrap'
import LoadingButton from './LodingButton'
import { atSignup } from '../actions'
import { useDispatch } from 'react-redux'

export default function SignupForm() {
  const dispatch = useDispatch();
  return (
    <>
    <div className='formContainer'>
    <Form className='signupForm' >
      <Row className='formRow' >
        <Col className='formCol sformCol'>
      <Form.Label className='formLabel'>Sign Up</Form.Label> <hr size='inherit' className='hrline'/>
      <Form.Group  controlId="formGroupText" id='loginParent' className="mb-3 fieldResize">
        <Form.Label className='labelResize'>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" className=''/>
      </Form.Group>
      <Form.Group  controlId="formGroupEmail" id='loginParent' className="mb-3 fieldResize">
        <Form.Label className='labelResize'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" className=''/>
      </Form.Group>
      <Form.Group  controlId="formGroupPassword" className="mb-3 fieldResize" >
        <Form.Label className='labelResize'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='' />
      </Form.Group>
      <Form.Group  controlId="formGroupPassword" className="mb-3 fieldResize" >
        <Form.Label className='labelResize'>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='' />
      </Form.Group>
      <div className='buttonLoading'>
        <LoadingButton/> 
          <Button variant="link" onClick={() => dispatch(atSignup()) }>Already have an Account?</Button>
      </div>
      <div className='buttonLoading'>
      <h1 className='brand-name-align'>Metro Management <br/> System</h1>
      </div>
      </Col>
      </Row>
    </Form>
    </div>
    </>
  )
}
