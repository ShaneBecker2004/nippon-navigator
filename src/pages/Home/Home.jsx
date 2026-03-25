import React from 'react'
import Banner from '../../components/Banner/Banner';
import AdvanceSearch from '../../components/AdvanceSearch/AdvanceSearch';
import Features from '../../components/Features/Features';
import Gallery from '../../components/Gallery/Gallery';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css"

import PopularPlace from '../../components/PopularPlace/PopularPlace';
import { destinationsData } from "../../utils/data"


const Home = () => {


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

  // const destinations = [
  //   {
  //     id: 0,
  //     name: "Tokyo",
  //     tours: "10 tours and activities",
  //     image: tour,
  //     link: 'tour-name',
  //     shortDes: '',
  //     link: "/tour",
  //     location: "Tokyo Prefecture",
  //   },
  //   {
  //     id: 1,
  //     name: "Osaka",
  //     tours: "10 tours and activities",
  //     image: tour1,
  //     link: 'tour-name',
  //     shortDes: '',
  //     link: "/tour",
  //     location: "Osaka Prefecture",
  //   },
  //   {
  //     id: 2,
  //     name: "Kyoto",
  //     tours: "10 tours and activities",
  //     image: tour2,
  //     link: 'tour-name',
  //     shortDes: '',
  //     link: "/tour",
  //     location: "Kyoto Prefecture",
  //   },
  //   {
  //     id: 3,
  //     name: "Yokohama",
  //     tours: "10 tours and activities",
  //     image: tour3,
  //     link: 'tour-name',
  //     shortDes: '',
  //     link: "/tour",
  //     location: "Kanagawa Prefecture",
  //   },
  //   {
  //     id: 4,
  //     name: "Sapporo",
  //     tours: "10 tours and activities",
  //     image: tour4,
  //     link: 'tour-name',
  //     shortDes: '',
  //     link: "/tour",
  //     location: "Hokkaido Prefecture",
  //   },
  //   {
  //     id: 5,
  //     name: "Hiroshima",
  //     tours: "10 tours and activities",
  //     image: tour5,
  //     link: 'tour-name',
  //     shortDes: '',
  //     link: "/tour",
  //     location: "Hiroshima Prefecture",
  //   },
  // ]


  return (
    <>
    <Banner />
    <AdvanceSearch />
    <Features />

    {/* Tour section start */}

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
                {destinationsData.map((destination, inx)=>{
                  return (
                    <Cards destination = {destination} key={inx} />
                  )
              })}
              </Slider>
          </Col>
        </Row>

      </Container>
    </section>

    {/* Tour section start */}

    
    <PopularPlace /> 

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