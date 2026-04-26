import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import apps from "../../assets/images/breadcrumb/apps-image.png"

const Apps = () => {
  return (
    <>
      <Breadcrumbs title="essential apps" pagename="Essential Apps" bgImage={apps} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Must-Have Apps Before You Go
                </h2>
                <p className='body-text mb-4'>
                  The right apps can make traveling in Japan much easier—from navigating trains to booking restaurants and staying connected.
                </p>

                {/* Navigation */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🗺️ Navigation & Transportation</h3>

                <h4 className='h5 font-bold pt-2'>Google Maps</h4>
                <p className='body-text mb-3'>
                  Essential for train routes, walking directions, and transit times. Works extremely well across Japan’s rail systems.
                </p>

                <h4 className='h5 font-bold pt-2'>Japan Travel by NAVITIME</h4>
                <p className='body-text mb-4'>
                  Provides more detailed train info than Google Maps, including platform numbers and smoother transfer planning.
                </p>

                {/* Food */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🍜 Food & Reservations</h3>

                <h4 className='h5 font-bold pt-2'>Tabelog</h4>
                <p className='body-text mb-3'>
                  Japan’s most trusted restaurant review platform. Great for finding high-quality local spots.
                </p>

                <h4 className='h5 font-bold pt-2'>Gurunavi</h4>
                <p className='body-text mb-4'>
                  Helpful for browsing restaurants and making reservations, with better support for travelers.
                </p>

                {/* Booking */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🎟️ Booking & Experiences</h3>

                <h4 className='h5 font-bold pt-2'>Klook</h4>
                <p className='body-text mb-3'>
                  Book attractions, theme park tickets, and transportation in advance—often at discounted prices.
                </p>

                <h4 className='h5 font-bold pt-2'>Theme Park Apps</h4>
                <p className='body-text mb-4'>
                  Official apps for places like Tokyo Disney or Universal Studios Japan show wait times, maps, and mobile tickets.
                </p>

                {/* Payments */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>💳 Payments & Money</h3>

                <h4 className='h5 font-bold pt-2'>Suica</h4>
                <p className='body-text mb-3'>
                  Digital transit card usable for trains, vending machines, and convenience stores—especially easy on iPhone.
                </p>

                <h4 className='h5 font-bold pt-2'>Xe</h4>
                <p className='body-text mb-4'>
                  Quickly convert yen to your home currency so you can better understand prices while shopping or dining.
                </p>

                {/* Travel Tools */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>📱 Travel Essentials</h3>

                <h4 className='h5 font-bold pt-2'>Airalo</h4>
                <p className='body-text mb-3'>
                  Buy and activate an eSIM before arrival for instant mobile data without needing a physical SIM.
                </p>

                <h4 className='h5 font-bold pt-2'>IC Card Reader</h4>
                <p className='body-text mb-3'>
                  Check your Suica or Pasmo balance directly from your phone.
                </p>

                <h4 className='h5 font-bold pt-2'>Yamato Transport</h4>
                <p className='body-text mb-4'>
                  Use luggage forwarding to travel between cities without carrying large suitcases on trains.
                </p>

                {/* Communication */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🗣️ Communication & Safety</h3>

                <h4 className='h5 font-bold pt-2'>Google Translate</h4>
                <p className='body-text mb-3'>
                  Translate menus, signs, and conversations using camera and voice features.
                </p>

                <h4 className='h5 font-bold pt-2'>LINE</h4>
                <p className='body-text mb-3'>
                  Japan’s most popular messaging app. Occasionally used by businesses and services.
                </p>

                <h4 className='h5 font-bold pt-2'>Japan Official Travel App</h4>
                <p className='body-text mb-4'>
                  Provides emergency alerts, travel tips, and useful information for tourists.
                </p>

                {/* Extras */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>✨ Extras</h3>

                <h4 className='h5 font-bold pt-2'>GO (Taxi App)</h4>
                <p className='body-text mb-3'>
                  Easily call taxis and pay digitally—great when trains stop running late at night.
                </p>

                <h4 className='h5 font-bold pt-2'>Life360</h4>
                <p className='body-text mb-5'>
                  Share real-time location with friends or family—helpful when traveling in groups.
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

export default Apps