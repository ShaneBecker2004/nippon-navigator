import React, { useEffect, useState } from 'react'
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../Header/header.css";
import { useAuth } from '../../../contexts/authContext';
import { doSignOut } from '../../../firebase/auth';
// import headerimg from "../../assets/image/Nippon Navigator logo design.png"


const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const [showExplore, setShowExplore] = useState(false);
    const [showInformation, setShowInformation] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky)
        }
    })



    // sticky Header
    const isSticky = (e) => {
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
                                <NavLink className='nav-link' to="about-us">About Us</NavLink>
                                <NavDropdown
                                    title="Explore"
                                    show={showExplore}
                                    onMouseEnter={() => setShowExplore(true)}
                                    onMouseLeave={() => setShowExplore(false)}
                                    onClick={() => setShowExplore(!showExplore)}
                                >
                                    <NavDropdown.Item className='nav-link' href="explore">See All</NavDropdown.Item>
                                    <NavDropdown
                                        title="Tradition" className='inner-dropdown'
                                        id={`dropdown-tradition`}
                                    >
                                        <NavDropdown.Item href="explore">Japanese Gardens</NavDropdown.Item>
                                        <NavDropdown.Item href="explore">Temple Stays</NavDropdown.Item>
                                        <NavDropdown.Item href="explore">Festivals and Events</NavDropdown.Item>
                                        <NavDropdown.Item href="explore">Culture in Japan</NavDropdown.Item>
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
                                        <NavDropdown.Item as={Link} to="/explore?category=theme_park">Theme Parks</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore?category=shopping">Shopping</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Nightlife</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Natrual Wonders</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Iconic Architecture</NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>

                                <NavLink className='nav-link' to="cities">Cities</NavLink>

                                <NavDropdown
                                    title="Information"
                                    show={showInformation}
                                    onMouseEnter={() => setShowInformation(true)}
                                    onMouseLeave={() => setShowInformation(false)}
                                    onClick={() => setShowInformation(!showInformation)}
                                >
                                    <NavDropdown.Item href="airport">Navigating the Airport</NavDropdown.Item>
                                    <NavDropdown.Item href="get-to-city">Getting to the City</NavDropdown.Item>
                                    <NavDropdown.Item href="online">Staying Connected Online</NavDropdown.Item>
                                    <NavDropdown.Item href="apps">Essential Apps</NavDropdown.Item>
                                    <NavDropdown.Item href="phrases">Important Phrases to Know</NavDropdown.Item>
                                    <NavDropdown.Item href="visa">VISA Information</NavDropdown.Item>
                                    <NavDropdown.Item href="immigration">Japan Immigration</NavDropdown.Item>
                                    <NavDropdown.Item href="currency">Currency Exchange</NavDropdown.Item>
                                </NavDropdown>

                                <NavLink className='nav-link' to="contact-us">Contact</NavLink>
                                <NavLink className='nav-link' to={userLoggedIn ? "/planning" : "/login"}>
                                    Planner
                                </NavLink>
                                <NavLink className='nav-link' to="gallery">Gallery</NavLink>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className=' profile-dropdown ms-md-4 ms-2'>
                        {userLoggedIn ? (
                            <NavDropdown
                                title={<i className="bi bi-person-circle fs-4"></i>}
                                id="profile-dropdown"
                                align="end"
                                className="d-inline-block"
                            >
                                <NavDropdown.Item onClick={() => navigate("/planning")}>
                                    My Plans
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/profile")}>
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onClick={() =>
                                        doSignOut().then(() => {
                                            navigate("/login");
                                        })
                                    }
                                >
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link className="primaryBtn d-none d-sm-inline-block" to="/login">
                                Login/Sign Up
                            </Link>
                        )}
                        <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
                        </li>
                    </div>
                </Navbar>
            </Container>
        </header>
    )
}


export default Header