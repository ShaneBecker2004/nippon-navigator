import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import aboutImg from  "../../assets/images/about/about-japan.jpg"
import "../infopages/infopage.css"

const Website = () => {
  return (
    <>
      <Breadcrumbs title="useful websites" pagename="Useful Websites" bgImage={aboutImg} />
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

            <Col md="10">
              <Card className='p-4 mt-4 shadow-sm border-0 text-center bg-light'>
                <h3 className='mb-3 font-bold'>Did this information help you?</h3>

                <div className='d-flex justify-content-center gap-3'>
                  <button className='btn btn-outline-success px-4'>
                    👍 Yes
                  </button>
                  <button className='btn btn-outline-danger px-4'>
                    👎 No
                  </button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Website