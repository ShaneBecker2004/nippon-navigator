import React, { useEffect, useState } from 'react'
import { Container,Row,Navbar,Offcanvas,Nav,NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../Header/header.css";

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky)
        }
    })

    // sticky Header 
    const isSticky=(e)=> {
       const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 120 ? header.classList.add('is-sticky') :
        header.classList.remove('is-sticky')
    } 

  return (
    <header className='header-section'>
        <Container>
            <Row>
                <Navbar expand='lg' className="">
                {/* Logo Section */}
                    <Navbar.Brand>
                        <NavLink to='/' >Nippon Navigator</NavLink>
                    </Navbar.Brand>
                    {/* End Logo Section */}

                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="start"
                    show={open}
                    >
                        {/* mobile Logo Section */}
                    <Offcanvas.Header>
                        <h1 className='logo'>Nippon Navigator</h1>
                        <span className='navbar-toggler ms-auto' onClick={toggleMenu}>
                        <i className="bi bi-x-lg"></i>
                        </span>
                    </Offcanvas.Header>
                    {/* end mobile Logo Section */}

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className='nav-link' to="/">HOME</NavLink>
                        <NavLink className='nav-link' to="/</Nav>">EXPLORE</NavLink>

                        <NavDropdown
                            title="Information"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Important Phrases to Know</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Japan Immigration Forms</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Currency Exchange</NavDropdown.Item>
                        </NavDropdown>
                            
                        <NavDropdown
                            title="Travel Tips"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown.Item href="#action3">Navigating the Airport</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">How to Get Wi-Fi</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">How to Get to the City</NavDropdown.Item>
                        </NavDropdown>

                        <NavLink className='nav-link' to="/</Nav>">ACCOUNT</NavLink>
                        
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className='ms-md-4 ms-2'>
                        <NavLink className='primaryBtn d-none d-sm-inline-block'>
                            Plan your Trip
                        </NavLink>
                        <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                        <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
                        </li>
                    </div>
                </Navbar>
            </Row>
        </Container>
    </header>
  )
}

export default Header