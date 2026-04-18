import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner';

import Features from '../../components/Features/Features';
import Gallery from '../../components/Gallery/Gallery';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Cards/Cards';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css"

import { useAuth } from '../../contexts/authContext';


const Home = () => {

  const { currentUser } = useAuth()

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchDestinations = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/destinations");
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
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className='main_heading'>
      {currentUser ? (
      <h1>Welcome {currentUser.displayName || "User"}</h1>
        ) : (
          <h1>Welcome Guest</h1>
        )}</div>
    {/* <AdvanceSearch /> */}
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
            <Col md='12'>
              <Slider {...settings} >
                {loading ? (
                  <p className="text-center">Loading destinations...</p>
                ) : (
                  destinations.map((destination) => (
                    <Cards destination={destination} key={destination.id} />
                  ))
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
                READY FOR AN UNFORGETTABLE TRIP TO JAPAN, LET US HELP YOU OUT!
              </h2>
              <p className="text">
                This is a test text, it will be a filler text until the final draft is fulfilled and finalized.
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