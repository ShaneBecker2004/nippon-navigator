import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import aboutImg from  "../../assets/images/about/about-japan.jpg"
import oldLogo from "../../assets/images/about/Nippon_Navigator_Logo.png"
import "../About/about.css"
import icons1 from "../../assets/images/icons/cherry-blossom-night.jpg"
import icons2 from "../../assets/images/icons/fukuoka-city-night.jpg"
import icons3 from "../../assets/images/icons/hello-kitty-shinkansen.jpg"

const About = () => {
  return (
    <>
      <Breadcrumbs title="About us" pagename="About us" bgImage={aboutImg} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="8">
              <div className='about-content'>
                <div className='about-image position-relative'>
                  <img src={aboutImg} alt="about" className='img-fluid rounded-5' />
                  </div>
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    What Is This Website All About 
                  </h2>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
              </div>
            </Col>
          <Col md='4'>
            <Card className='border-0 shadow-sm rounded-3 mb-4'>
              <Card.Body className='text-center'>
                <div className='d-flex justify-content-center align-item-search my-2'>
                <div className='rounded-circle bg-light shadow-sm bg-opacity-10 p-2'>
                  <img src={icons1} alt="icon" className='img-fluid' />
                </div>
                </div>
                <Card.Title className='mb-2 h5'> 100+ Things To Do </Card.Title>
                <p className='mb-2 body-text'>
                  This is test text until we can create official ones, for the time being this is for testing only.
                </p>
              </Card.Body>
            </Card>

            <Card className='border-0 shadow-sm rounded-3 mb-4'>
              <Card.Body className='text-center'>
                <div className='d-flex justify-content-center align-item-search my-2'>
                <div className='rounded-circle bg-light shadow-sm bg-opacity-10 p-2'>
                  <img src={icons2} alt="icon" className='img-fluid' />
                </div>
                </div>
                <Card.Title className='mb-2 h5'> Best Place To Create Your Dream Plan </Card.Title>
                <p className='mb-2 body-text'>
                  This is test text until we can create official ones, for the time being this is for testing only.
                </p>
              </Card.Body>
            </Card>

            <Card className='border-0 shadow-sm rounded-3 mb-4'>
              <Card.Body className='text-center'>
                <div className='d-flex justify-content-center align-item-search my-2'>
                <div className='rounded-circle bg-light shadow-sm bg-opacity-10 p-2'>
                  <img src={icons3} alt="icon" className='img-fluid' />
                </div>
                </div>
                <Card.Title className='mb-2 h5'> Create Your Own Or Let Us Do The Hard Work </Card.Title>
                <p className='mb-2 body-text'>
                  This is test text until we can create official ones, for the time being this is for testing only.
                </p>
              </Card.Body>
            </Card>
            </Col>
          <Col md="8">
              <div className='about-content'>
                <div className='about-image position-relative'>
                  <img src={oldLogo} alt="about" className='img-fluid rounded-5' />
                  </div>
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    What Is This Website All About 
                  </h2>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About