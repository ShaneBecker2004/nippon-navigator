import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import websiteimg from "../../assets/images/breadcrumb/website-image.jpg"
import "../infopages/infopage.css"

const Website = () => {
  return (
    <>
      <Breadcrumbs title="extra resources" pagename="Extra Resources" bgImage={websiteimg} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Extra Resources for Your Trip
                </h2>
                <p className='body-text mb-4'>
                  These websites can make planning your trip to Japan much easier—from booking train tickets to finding restaurants and organizing your itinerary.
                </p>

                {/* Transportation */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🚆 Transportation & Routes</h3>

                <h4 className='h5 font-bold pt-2'>Japan Travel by NAVITIME</h4>
                <p className='body-text mb-3'>
                  A powerful route planner that helps you navigate Japan’s train systems with detailed transit options, travel times, and transfer guidance.
                </p>

                <h4 className='h5 font-bold pt-2'>HyperDia (Alternative)</h4>
                <p className='body-text mb-4'>
                  A classic train route planning tool known for precise scheduling and fare calculations—useful for double-checking routes and timing.
                </p>

                {/* Food */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🍜 Food & Dining</h3>

                <h4 className='h5 font-bold pt-2'>Tabelog (Web Version)</h4>
                <p className='body-text mb-3'>
                  Japan’s most trusted restaurant database. Great for researching places ahead of time, especially for highly rated local spots.
                </p>

                <h4 className='h5 font-bold pt-2'>Gurunavi</h4>
                <p className='body-text mb-4'>
                  Offers restaurant listings, menus, and reservation options with better accessibility for international visitors.
                </p>

                {/* Booking */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🎟️ Tickets & Experiences</h3>

                <h4 className='h5 font-bold pt-2'>Klook</h4>
                <p className='body-text mb-3'>
                  Book attractions, transportation passes, and theme park tickets in advance—often at discounted prices.
                </p>

                <h4 className='h5 font-bold pt-2'>Japan Guide</h4>
                <p className='body-text mb-4'>
                  One of the best all-around travel resources for Japan, with detailed guides on cities, attractions, and itineraries.
                </p>

                {/* Planning */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🗺️ Trip Planning</h3>

                <h4 className='h5 font-bold pt-2'>Nippon Navigator</h4>
                <p className='body-text mb-3'>
                  Plan your entire trip in one place—discover cities, organize activities, and build a personalized itinerary tailored to your travel style.
                </p>

                <h4 className='h5 font-bold pt-2'>Google My Maps</h4>
                <p className='body-text mb-4'>
                  Create custom maps to save locations, organize daily plans, and visualize your itinerary across different cities.
                </p>

                {/* Tips */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>💡 Extra Tips</h3>
                <p className='body-text mb-5'>
                  Bookmark important websites before your trip so you can quickly access tickets, reservations, and directions while traveling.
                </p>
              </div>
            </Col>

            <Col md="10">
              <Card className='p-4 mt-5 shadow-sm border-0 text-center bg-light'>
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