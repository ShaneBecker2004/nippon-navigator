import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner';

import Features from '../../components/Features/Features';
import Gallery from '../../components/Gallery/Gallery';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Cards/Cards';
import { Link } from 'react-router-dom' 

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css"

const API = process.env.REACT_APP_API_URL

const Home = () => {

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchDestinations = async () => {
    try {
      const res = await fetch(`${API}/api/destinations`);
      const data = await res.json();

      const updatedData = data.map((dest) => ({
        ...dest,
        image: dest.image || "/images/default.jpg",
      }));

      setDestinations(updatedData);
    } catch (err) {
      console.error("Failed to fetch destinations:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchDestinations();
}, []);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        }
      }
    ]
  };


  return (
    <>
    <Banner />
    <Features />

    <section className="tours_section slick_slider">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1>Top Destinations For You To Explore </h1>
            </div>
          </Col>
        </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {loading ? (
                  <p className="text-center">Loading destinations...</p>
                ) : destinations.length > 0 ? (
                  destinations.map((destination) => (
                    <div key={destination.id} className="px-2">
                      <Link
                        to={`/explore?city=${destination.slug}`}
                        className="activity-card-link"
                      >
                        <Cards destination={destination} />
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-center w-100 mt-4">
                    No destinations found.
                  </p>
                )}
              </Slider>
            </Col>
          </Row>

      </Container>
    </section>
    
    {/* <section className='popular-home py-5 slick_slider'>
        <Container>
            <Row>
                <Col md="12">
                    <div className='main_heading'>
                        <h1> Popular Activities </h1>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col md='12'>
              <Slider {...settings} >
            {popularsData.map((val, inx) => {
                return (
                <Col md={3} sm={6} xs={12} className='mb-5' key={inx}>
                  <PopularCard val={val}  key={inx} />
                </Col>
            )
            })}
              </Slider>
          </Col>
          </Row>

        </Container>
    </section>  */}

    <section className="call_us">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
              <h5 className="title">
                CALL TO ACTION
                </h5>
              <h2 className="heading">
                READY FOR AN UNFORGETTABLE TRIP TO JAPAN?
              </h2>
              <p className="text mb-4 fw-bold">
                Let us help you out and make your trip become a memory of a lifetime!
              </p>
          </Col>
          <Col md={4} className="text-center mt-3 mt-md-0">
              <a href="tel:9876543210" 
              className="secondary_btn bounce" rel="no">
                Contact Us !
              </a>
          </Col>
        </Row>
      </Container>
      <div className='overlay'></div>
    </section>


    <section className="gallery">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Photo Gallery </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
              <Gallery />
          </Col>
        </Row>
              </Container>
        </section>

    </>
  )
}

export default Home;