import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import HomePage from '../user/HomePage'
import './style/TopNavbar.css'
import TopNavigation from './TopNavigation'
import { useSelector, useDispatch } from 'react-redux'
import { atUserBtn, atHome } from '../actions'
import { Home } from '../homePage/Home'
import { Aboutus } from '../aboutusPage/Aboutus'
import { News } from '../newsPage/News'
import { Event } from '../eventPage/Event'
import { Team } from '../teamPage/Team'
import { LoginSignupForm } from '../components/LoginSignupForm'


export default function TopNavbar() {
  const currentNavigationState = useSelector((state) => state.topNavigationState)
  const dispatch = useDispatch();
  return (
    <>
    <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
    <Container>
        <Navbar.Brand id='brand-name' onClick={() => dispatch(atHome())}>Patient Helping<br/>System</Navbar.Brand>
        
        {
        currentNavigationState != 5 &&
        <Nav className="ms-auto sm ">
            <Button className='btn btn-dark btn-outline-light' id='btn-login-signup' onClick={() => dispatch(atUserBtn())}>New User/ Login</Button>
        </Nav>
        }
        
        
    </Container>
    </Navbar>
    <TopNavigation/>
    {renderCorrespondingState(currentNavigationState)}
    </>
  )
}

function  renderCorrespondingState(currentNavigationState) {
    switch (currentNavigationState) {
      case 0:
        return <Home/>
      case 1:
        return <Aboutus />
      case 2:
        return <News />
      case 3:
        return <Event />
      case 4:
        return <Team />
      case 5:
        return <LoginSignupForm />
      default:
        return <Home />
    }
  }



