import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import airport from "../../assets/images/breadcrumb/narita-airport.webp"
import haneda from '../../assets/images/airport/haneda-airport.webp'
import narita from '../../assets/images/airport/narita-airport.jpg'
import kansai from '../../assets/images/airport/kansai-international-airport.webp'
import itami from '../../assets/images/airport/itami-airport.jpg'
import chubu from '../../assets/images/airport/chubu-centrair-airport.jpg'
import chitose from '../../assets/images/airport/new-chitose-airport.jpg'
import fukuoka from '../../assets/images/airport/fukuoka-airport.jpg'
import naha from '../../assets/images/airport/naha-airport.jpg'


const Airport = () => {
  return (
    <>
      <Breadcrumbs title="navigating the airport" pagename="Airport" bgImage={airport}/>
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content'>
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    Navigating the Airports in Japan
                  </h2>
                  <p className='body-text mb-3'>
                    Arriving in Japan can feel overwhelming at first, especially in major airports like Narita , Haneda , and Kansai International . However, Japan’s airport systems are highly organized, efficient, and designed to help international travelers move through arrivals with ease.
                  </p>
                  <p className='body-text mb-3'>
                    After landing, follow clear English signage for immigration, baggage claim, and customs. Free Wi-Fi, multilingual information desks, and airport staff are widely available to assist you if you need help. Transportation options such as trains, airport buses, and taxis are also well-marked and easy to access from the arrival halls.
                  </p>
                  <p className='body-text mb-3'>
                    For the smoothest experience, it’s recommended to prepare essentials like your accommodation address, JR Pass (if applicable) or IC Cards (recommended), and mobile data plan before arrival. Once you’re through the airport, Japan’s transit system makes it simple to reach your destination quickly and comfortably.
                  </p>
              </div>
            </Col>
            <Col md="10">
              <h2 className='h2 font-bold pt-5 pb-2'>
                Airports
              </h2>
              <Row>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={haneda} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Haneda Airport</Card.Title>
                      <p className="body-text">
                        Closest airport to central Tokyo, ideal for fast city access
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={narita} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Narita Airport</Card.Title>
                      <p className="body-text">
                         Major international gateway serving long-haul flights into Tokyo
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={kansai} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Kansai International Airport</Card.Title>
                      <p className="body-text">
                       Major international hub built on an artificial island
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={itami} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Osaka International Airport (Itami Airport)</Card.Title>
                      <p className="body-text">
                        Mostly domestic flights, very convenient for local travel
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={chubu} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Chubu Centrair International Airport</Card.Title>
                      <p className="body-text">
                        Gateway to Nagoya and central Japan
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={chitose} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>New Chitose Airport</Card.Title>
                      <p className="body-text">
                        Main entry point to Hokkaido
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={fukuoka} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Fukuoka Airport</Card.Title>
                      <p className="body-text">
                        Extremely close to city center, best Kyushu entry point
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 hover-shadow h-100">
                    <div className='card-image position-relative'>
                      <img src={naha} alt="about" className='img-fluid rounded-4' />
                    </div>
                    <Card.Body>
                      <Card.Title>Naha Airport</Card.Title>
                      <p className="body-text">
                        Gateway to Okinawa islands (beach travel)
                      </p>
                    </Card.Body>
                  </Card>
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
            </Col>
            
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Airport