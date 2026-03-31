import React, { useState } from 'react'
import "../Footer/footer.css"
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const [visible, setVisible]=useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300) {
      setVisible(true)
    }
    else if(scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  if (typeof window !== "undefined"){
    window.addEventListener("scroll", toggleVisible)
  }


  return (
    <>
    <footer className='pt-5'>
      <Container>
        <Row>
          <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Company</h4>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <NavLink to="about-us">About Us</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">News</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">FaQ</NavLink>
              </ListGroup.Item>

            </ListGroup>
          </Col>
          
          <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Explore</h4>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <NavLink to="/">FaQ</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">Tour Listings</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="explore">Destinations</NavLink>
              </ListGroup.Item>       
            </ListGroup>
          </Col>

          <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Quick Link</h4>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <NavLink to="/">Home</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="about-us">About Us</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="contact-us">Contact Us</NavLink>
              </ListGroup.Item>       
            </ListGroup>
          </Col>

          <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Contact Info</h4>

            <div className="d-flex align-items-center">
              <p className='pb-2'>Eugene, OR</p>
            </div>

            <div className='d-flex align-items-top my-2'>
              <i className='bi bi-geo-alt me-3'></i>
              <a target='_blank' href='mailto:shanetest@bushnell.com' className='d-block'>shanetest@bushnell.com</a>
            </div>
            
            <div className='d-flex align-items-top'>
              <i className='bi bi-telephone me-3'></i>
              <a target='_blank' href='tel:9876543210' className='d-block'>9876543210</a>
            </div>

          </Col>
        </Row>
        <Row className='py-2 bdr'>
          <Col className='col-copyright'>
            <p className='text-light'> @ 2026, shanebecker All rights reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>

    <div id='back-top' onClick={scrollTop} className= {visible ? "active" : ""}>
      <i className="bi bi-arrow-up"></i>
    </div>
    </>
  )
}

export default Footer