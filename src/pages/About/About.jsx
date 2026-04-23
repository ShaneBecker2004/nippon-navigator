import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import aboutImg from  "../../assets/images/about/about-japan.jpg"
import "../About/about.css"
import icons1 from "../../assets/images/icons/cherry-blossom-night.jpg"
import icons2 from "../../assets/images/icons/fukuoka-city-night.jpg"
import icons3 from "../../assets/images/icons/hello-kitty-shinkansen.jpg"

const About = () => {

  return (
    <>
      <Breadcrumbs title="About us" pagename="About Us" bgImage={aboutImg} />
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
                <p className='body-text mb-4'>
                  Nippon Navigator is a travel planning web application designed to help users explore cities across Japan and build personalized itineraries with ease. Whether you're planning your first trip or returning to discover more, the platform makes it simple to organize your journey in one place.
                </p>
                <p className='body-text mb-4'>
                  Users can search for top restaurants, must-see attractions, and local activities tailored to different cities throughout Japan. The goal is to create a smooth and user-friendly experience that helps travelers plan efficiently while still discovering unique and memorable experiences.
                </p>
                <p className='body-text mb-4'>
                  Beyond popular destinations, Nippon Navigator also highlights lesser-known spots and hidden gems that many tourists might overlook. This helps travelers experience Japan in a more authentic and personalized way, going beyond typical guidebook recommendations.
                </p>
              </div>
            </Col>
          <Col md='4'>
            <Card className='border-0 shadow-sm rounded-3 mb-4'>
              <Card.Body className='text-center'>
                <div className='d-flex justify-content-center align-item-center my-2'>
                <div className='rounded-circle bg-light shadow-sm bg-opacity-10 p-2'>
                  <img src={icons1} alt="icon" className='img-fluid' />
                </div>
                </div>
                <Card.Title className='mb-2 h5'> Things To Do in Japan </Card.Title>
                <p className='mb-2 body-text'>
                  Discover attractions, activities, and experiences across Japan’s most popular cities.
                </p>
              </Card.Body>
            </Card>
          
            <Card className='border-0 shadow-sm rounded-3 mb-4'>
              <Card.Body className='text-center'>
                <div className='d-flex justify-content-center align-item-center my-2'>
                <div className='rounded-circle bg-light shadow-sm bg-opacity-10 p-2'>
                  <img src={icons2} alt="icon" className='img-fluid' />
                </div>
                </div>
                <Card.Title className='mb-2 h5'> Experience Japan Your Way </Card.Title>
                <p className='mb-2 body-text'>
                  Immerse yourself in Japan’s culture, food, and scenery in a way that fits your travel style.
                </p>
              </Card.Body>
            </Card>

            <Card className='border-0 shadow-sm rounded-3 mb-4'>
              <Card.Body className='text-center'>
                <div className='d-flex justify-content-center align-item-center my-2'>
                <div className='rounded-circle bg-light shadow-sm bg-opacity-10 p-2'>
                  <img src={icons3} alt="icon" className='img-fluid' />
                </div>
                </div>
                <Card.Title className='mb-2 h5'> Plan Your Trip Easily </Card.Title>
                <p className='mb-2 body-text'>
                  Build and organize your itinerary with a simple, user-friendly planning experience.
                </p>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About