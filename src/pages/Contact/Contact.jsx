import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Col, Container, Row, Card, ListGroup, Form, FloatingLabel } from 'react-bootstrap'
import contactimg from '../../assets/images/breadcrumb/contact-us-banner.webp'
import webimage from '../../assets/images/contact/Nippon_Navigator_Logo.png'


const Contact = () => {
  return (
    <>
      <Breadcrumbs title="Contact us" pagename="Contact Us" bgImage={contactimg}/>
      <section className='contact py-5'>
        <Container>
          <Row >
            <Col md='12'>
              <h1 className='mb-2 h1 font-bold'> Let's connect and get to know each other</h1>
              <p className='body-text mt-1'>Use any of the links below or fill out the form to get in contact with us!</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col lg='4' md='6' className='mb-4 mb-lg-0'>
              <Card className='border-0 shadow rounded-3 mb-4'>
              <Card.Body className='text-center'>
                  <div className='d-flex justify-content-center align-item-search my-2'>
                    <div className='bg-info rounded-circle text-info shadow-sm bg-opacity-10 p-2'>
                      <i className='bi bi-headset h3'></i>
                    </div>
                  </div>
                <Card.Title className='fw-bold h5'>  
                  Call Us
                </Card.Title>
                <p className='mb-3 body-text'>
                  Call us using our business number or our support number down below and we will get back to you!
                </p>
                <div className='d-flex gap-2'>
                  <a href="tel:+12-345-6789" type='button' className='btn btn-light me-3 btn-sm'>
                    <i className='bi bi-phone me-1'></i>
                    {" "} +12-345-6789
                  </a>
                  <a href="tel:+12-345-6789" type='button' className='btn btn-light me-2 btn-sm'>
                    <i className='bi bi-telephone'></i>
                    {" "} +12-345-6789
                  </a>
                </div>
              </Card.Body>
            </Card>
            </Col>

            <Col lg='4' md='6' className='mb-4 mb-lg-0'>
              <Card className='border-0 shadow rounded-3 mb-4'>
              <Card.Body className='text-center'>
                  <div className='d-flex justify-content-center align-item-search my-2'>
                    <div className='bg-danger rounded-circle text-danger shadow-sm bg-opacity-10 p-2'>
                      <i className='bi bi-envelope h3'></i>
                    </div>
                  </div>
                <Card.Title className='fw-bold h5'>  
                  Email Us
                </Card.Title>
                <p className='mb-3 body-text'>
                  Send us an email using the name below and subscribe for daily updates!
                </p>
                <div className='d-block justify-content-between'>
                  <a href="mailto:support@nipponnavigator.com" type='button' className='btn btn-light me-2 btn-sm'>
                    <i className='bi bi-envelope me-2'></i>
                    {" "} support@nipponnavigator.com
                  </a>
                </div>
              </Card.Body>
            </Card>
            </Col>

            <Col lg='4' md='12' className='mb-4 mb-lg-0'>
              <Card className='border-0 shadow rounded-3 mb-4'>
              <Card.Body className='text-center'>
                  <div className='d-flex justify-content-center align-item-search my-2'>
                    <div className='bg-warning rounded-circle text-warning shadow-sm bg-opacity-10 p-2'>
                      <i className='bi bi-globe h3'></i>
                    </div>
                  </div>
                <Card.Title className='fw-bold h5'>  
                  Social Media
                </Card.Title>
                <p className='mb-3 body-text'>
                  Follow us on one of our social media platforms and keep up to date on the latest going on in Japan!
                </p>
                <div className='d-block justify-content-center'>
                  <ListGroup horizontal className='justify-content-center'>
                      <ListGroup.Item className='border-0'>
                        <a
                          href="https://youtu.be/QDia3e12czc?si=6dvCmVNX6yJ_a5yH" // ONLY FOR THE JOKES, CHANGE LATER
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                      <i className='bi bi-youtube text-dark' ></i>
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0'> 
                        <a
                          href="https://www.instagram.com/?hl=en"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                      <i className='bi bi-instagram text-dark'></i>
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0'>
                        <a 
                          href="https://x.com/?lang=en" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                      <i className='bi bi-twitter-x text-dark'></i>
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0'>
                        <a 
                          href="https://www.facebook.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                      <i className='bi bi-facebook text-dark'></i>
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Body>
            </Card>
            </Col>
          </Row>

          <Row className='py-5 align-items-center'>
            <Col xl='6' md='6' className='d-none d-md-block'>
              <img src={webimage} alt="" className='img-fluid me-3' />
            </Col>
            <Col xl='6' md='6'>
              <Card className='bg-light p-4 border-0 shadow-sm'>
                <div className='form-box'>
                  <h1 className='h3 font-bold mb-4'>Send us a message</h1>
                    <Form>
                      <Row>
                        <Col md='6'>
                        <FloatingLabel 
                          controlId="name" 
                          label="Full Name" 
                          className='mb-4'>
                          <Form.Control 
                            type="text" 
                            placeholder="Full Name" />
                        </FloatingLabel>
                        </Col>

                        <Col md='6'>
                        <FloatingLabel 
                          controlId="floatingInput" 
                          label="Email Address" 
                          className='mb-4'>
                          <Form.Control 
                            type="email" 
                            placeholder="name@example.com" />
                        </FloatingLabel>
                        </Col>

                        <Col md='12'>
                        <FloatingLabel 
                          controlId="phone" 
                          label="Phone Number" 
                          className='mb-4'>
                          <Form.Control 
                            type="text" 
                            placeholder="Phone Number" />
                        </FloatingLabel>
                        </Col>

                        <Col md='12'>
                        <FloatingLabel 
                          controlId="message" 
                          label="Message">
                          <Form.Control
                            as="textarea"
                            placeholder="Message"
                            style={{ height: '126px' }}
                          />
                        </FloatingLabel>
                        </Col>
                      </Row>
                      <button className='primaryBtn mt-3' type='button'>Send Message</button>
                    </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact