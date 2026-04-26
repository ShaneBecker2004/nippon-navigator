import React, { useEffect, useState } from 'react'
import { Container, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../Header/header.css";
import { useAuth } from '../../../contexts/authContext';
import { doSignOut } from '../../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn, currentUser } = useAuth();

    const [open, setOpen] = useState(false);
    const [openInner, setOpenInner] = useState(null);
    const [showExplore, setShowExplore] = useState(false);
    const [showInformation, setShowInformation] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev);

    const closeAll = () => {
        setOpen(false);
        setShowExplore(false);
        setShowInformation(false);
    };

    const isSticky = () => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        if (scrollTop >= 120) header.classList.add('is-sticky');
        else header.classList.remove('is-sticky');
    };

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => window.removeEventListener("scroll", isSticky);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const isDropdown = e.target.closest('.dropdown');
            if (!isDropdown) {
                setShowExplore(false);
                setShowInformation(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className='header-section'>
            <Container>
                <Navbar expand='lg' className="p-0">

                    <Navbar.Brand>
                        <NavLink to='/'>Nippon Navigator</NavLink>
                    </Navbar.Brand>

                    <Navbar.Offcanvas
                        placement="start"
                        show={open}
                        onHide={() => setOpen(false)}
                    >

                        <Offcanvas.Header>
                            <h1 className='logo'>Nippon Navigator</h1>
                            <span className='navbar-toggler ms-auto' onClick={toggleMenu}>
                                <i className="bi bi-x-lg"></i>
                            </span>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <NavLink className='nav-link' to="/" onClick={closeAll}>Home</NavLink>
                                <NavLink className='nav-link' to="/about-us" onClick={closeAll}>About Us</NavLink>

                                {/* ================= EXPLORE ================= */}
                                <NavDropdown
                                    title="Explore"
                                    className='explore-dropdown'
                                    show={showExplore}
                                    onClick={() => setShowExplore(!showExplore)}
                                >
                                    <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                        See All
                                    </NavDropdown.Item>

                                    <NavDropdown 
                                        title="Tradition" 
                                        className="inner-dropdown"
                                        show={openInner === "tradition"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenInner(openInner === "tradition" ? null : "tradition");
                                        }}    
                                    >
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Japanese Gardens
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Temple Stays
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Festivals & Events
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Culture in Japan
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="Nature" 
                                        className="inner-dropdown"
                                        show={openInner === "nature"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenInner(openInner === "nature" ? null : "nature");
                                        }}  >
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Scenic Spots
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Adventure
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Seasonal Flowers
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Skiing in Japan
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="Food & Drink" 
                                        className="inner-dropdown"
                                        show={openInner === "food"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenInner(openInner === "food" ? null : "food");
                                        }}  
                                    >
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Local Cuisine
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Street Food
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Dining Experiences
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Vegetarian & Vegan
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="Attractions"
                                        className="inner-dropdown"
                                        show={openInner === "attractions"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenInner(openInner === "attractions" ? null : "attractions");
                                        }}  >
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            City Views
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Landmarks
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore?category=theme_park" onClick={closeAll}>
                                            Theme Parks
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore?category=shopping" onClick={closeAll}>
                                            Shopping
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/explore" onClick={closeAll}>
                                            Nightlife
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>

                                <NavLink className='nav-link' to="/cities" onClick={closeAll}>Cities</NavLink>

                                {/* ================= INFORMATION ================= */}
                                <NavDropdown
                                    title="Information"
                                    className='information-dropdown'
                                    show={showInformation}
                                    onClick={() => setShowInformation(!showInformation)}
                                >
                                    <NavDropdown.Item as={Link} to="/airport" onClick={closeAll}>
                                        Navigating the Airport
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/get-to-city" onClick={closeAll}>
                                        Getting Around the City
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/entry" onClick={closeAll}>
                                        Entry Requirements
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/language" onClick={closeAll}>
                                        Language & Etiquette
                                    </NavDropdown.Item>
                                    <NavDropdown 
                                        title="Travel Essentials"
                                        className="inner-dropdown"
                                        show={openInner === "travel-essentials"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenInner(openInner === "travel-essentials" ? null : "travel-essentials");
                                        }}  >
                                        <NavDropdown.Item as={Link} to="/online" onClick={closeAll}>
                                            Staying Connected
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/website" onClick={closeAll}>
                                            Extra Resources
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/apps" onClick={closeAll}>
                                            Essential Apps
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/currency" onClick={closeAll}>
                                            Currency Exchange
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>

                                <NavLink
                                    className='nav-link'
                                    to={userLoggedIn ? "/planning" : "/login"}
                                    onClick={closeAll}
                                >
                                    Planner
                                </NavLink>

                                <NavLink className='nav-link' to="/contact-us" onClick={closeAll}>
                                    Contact
                                </NavLink>

                                <NavLink className='nav-link' to="/gallery" onClick={closeAll}>
                                    Gallery
                                </NavLink>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* profile unchanged */}
                    <div className='profile-dropdown ms-md-4 ms-2'>
                        {userLoggedIn ? (
                            <NavDropdown title={<i className="bi bi-person-circle fs-4"></i>} align="end" className='profile-icon'>
                                <div className="px-3 py-2 border-bottom">
                                    <strong>{currentUser?.displayName || "User"}</strong><br />
                                    <small className="text-muted">{currentUser?.email}</small>
                                </div>
                                <NavDropdown.Item onClick={() => navigate("/planning")}>My Plans</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/profile")}>Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => doSignOut().then(() => navigate("/login"))}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link className="primaryBtn" to="/login">Sign In</Link>
                        )}

                        <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
                        </li>
                    </div>

                </Navbar>
            </Container>
        </header>
    );
};

export default Header;