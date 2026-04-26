import React, { useEffect, useState, useRef } from 'react'
import Banner from '../../components/Banner/Banner';

import Features from '../../components/Features/Features';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Cards/Cards';
import ActivityCard from '../../components/Cards/ActivityCard';
import { Link } from 'react-router-dom'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css"

const API = process.env.REACT_APP_API_URL

const Home = () => {

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(`${API}/api/destinations`);
        const data = await res.json();

        const updatedData = data.map((dest) => ({
          ...dest,
          images: dest.images || "/images/default.jpg",
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

  useEffect(() => {
  const fetchActivities = async () => {
    try {
      const res = await fetch(`${API}/api/activities`);
      const data = await res.json();

      const activitiesData = data.activities || data;

      setActivities(activitiesData);
    } catch (err) {
      console.error("Failed to fetch activities:", err);
    }
  };

  fetchActivities();
}, []);

  const popularActivities = activities.filter(
    (activity) => activity.popular === true
  );


  useEffect(() => {
    const fixSlider = () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0, true);
        sliderRef.current.innerSlider?.onWindowResized();
      }
    };

    // run AFTER everything renders
    const timeout = setTimeout(fixSlider, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      sliderRef.current?.innerSlider?.onWindowResized();
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          prevArrow: true,
          nextArrow: true
        }
      },
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          prevArrow: false,
          nextArrow: false,
        }
      },
      {
        breakpoint: 480, // small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
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

      <section className='popular-home py-5 slick_slider'>
        <Container>
          <Row>
            <Col md="12">
              <div className='main_heading'>
                <h1>Check Out Some Popular Activities</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md='12'>
              <Slider {...settings}>
                {popularActivities.length > 0 ? (
                  popularActivities.map((val) => (
                    <div key={val.id} className='px-2'>
                      <Link
                        to={`/activity/${val.slug || val.id}`}
                        className='activity-card-link'
                      >
                        <ActivityCard val={val} />
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-center w-100 mt-4">
                    No popular activities found.
                  </p>
                )}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

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
              <a href="/contact-us"
                className="secondary_btn" rel="no">
                Visit our Contact page!
              </a>
            </Col>
          </Row>
        </Container>
        <div className='overlay'></div>
      </section>

    </>
  )
}

export default Home;