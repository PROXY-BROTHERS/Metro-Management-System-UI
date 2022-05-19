import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap'
import './style/TopNavigation.css'
import { useDispatch } from 'react-redux'
import { atHome, atAbout, atNews, atEvent, atTeam } from '../actions'

const TopNavigation = () => {
  const dispatch = useDispatch();
  return (
    <>
    <Navbar bg="light" variant='light' className='top-navbar'>
    <Container className='top-container'>
        <Nav className="me-auto ms-auto sm top-nav">
            <Nav.Link onClick={() => dispatch(atHome())}>Home</Nav.Link>
            <Nav.Link onClick={() => dispatch(atAbout())}>About Us</Nav.Link>
            <Nav.Link onClick={() => dispatch(atNews())}>News</Nav.Link> <div className="vertical-separator"></div>
            <Nav.Link onClick={() => dispatch(atEvent())}>Events</Nav.Link>
            <Nav.Link onClick={() => dispatch(atTeam())}>Team</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    </>
  )
}

export default TopNavigation
