import './style/LoginSignupForm.css'

import React from 'react'
import { Form , Container, Row, Col, Button} from 'react-bootstrap'
import LoadingButton from './LodingButton'
import { atLogin } from '../actions'
import { useDispatch } from 'react-redux'
import checkServerStatus from '../backend/public/ServerStatus'

export default function LoginForm() {
  const dispatch = useDispatch();
  return (
    <>
    <div className='formContainer'>
    <Form className='signupForm' >
      <Row className='formRow' >
        <Col className='formCol'>
      <Form.Label className='formLabel'>Login</Form.Label> <hr size='inherit' className='hrline'/>
      <Form.Group  controlId="formGroupEmail" id='loginParent' className="mb-3 fieldResize">
        <Form.Label className='labelResize'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className=''/>
      </Form.Group>
      <Form.Group  controlId="formGroupPassword" className="mb-3 fieldResize" >
        <Form.Label className='labelResize'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='' />
      </Form.Group>
      <div className='buttonLoading'>
        <LoadingButton/> 
          <Button variant="link" onClick={() => dispatch(atLogin())}>New User?</Button>
      </div>
      <div className='buttonLoading'>
      <h1 className='brand-name-align'>Patient Helping <br/> System</h1>
      </div>
      </Col>
      </Row>
    </Form>
    </div>
    </>
  )
}
