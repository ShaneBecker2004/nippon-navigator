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
                <Navbar expand='lg' className="p-0">
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
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/">About Us</NavLink>

                        <NavDropdown
                            title="Explore"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown
                                title="Tradition" className='inner-dropdown'
                                id={`dropdown-tradition`}
                            >
                                <NavDropdown.Item href="#action3">Japanese Gardens</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Temple Stays</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Festivals and Events</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Culture in Japan</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Nature" className='inner-dropdown'
                                id={`dropdown-nature`}
                            >
                                <NavDropdown.Item href="#action3">Scenic Spots</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Adventure</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Seasonal Flowers in Japan</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Skiing in Japan</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Food & Drink" className='inner-dropdown'
                                id={`dropdown-food`}
                            >
                                <NavDropdown.Item href="#action3">Local Cuisine Western Japan</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Local Street Food</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Sushi In Japan</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Vegetarian and Vegan</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Cities" className='inner-dropdown'
                                id={`dropdown-cities`}
                            >
                                <NavDropdown.Item href="#action3">Scenic Spots</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Scenic Night Views</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Theme Parks</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Shopping</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Nightlife</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Natrual Wonders</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Iconic Architecture</NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>
                            
                        <NavDropdown
                            title="Information"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown.Item href="#action3">Navigating the Airport</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">How to Get to the City</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Staying Connected Online</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Important Phrases to Know</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">VISA Information</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Japan Immigration Forms</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Currency Exchange</NavDropdown.Item>
                        </NavDropdown>

                        <NavLink className='nav-link' to="/</Nav>">Contact</NavLink>
                        <NavLink className='nav-link' to="/</Nav>">Plan Your Trip</NavLink>
                        
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className='ms-md-4 ms-2'>
                        <NavLink className='primaryBtn d-none d-sm-inline-block'>
                            Log In/Sign Up
                        </NavLink>
                        <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                        <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
                        </li>
                    </div>
                </Navbar>
        </Container>
    </header>
  )
}

export default Header