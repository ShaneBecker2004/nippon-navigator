import React from 'react'
import { Container,Row,Navbar,Offcanvas,Nav,NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='header-section'>
        <Container>
            <Row>
                <Navbar expand='lg' className="bg-body-tertiary mb-3">
                {/* Logo Section */}
                    <Navbar.Brand href="#">
                        <NavLink to='/' >Nippon Navigator</NavLink>
                    </Navbar.Brand>
                    {/* End Logo Section */}

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="start"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </Row>
        </Container>
    </section>
  )
}

export default Header