import React from 'react'
import Banner from '../components/Banner/Banner';
import AdvanceSearch from '../components/AdvanceSearch/AdvanceSearch';
import Features from '../components/Features/Features';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css"

import tour from "../assets/images/tour/tokyo-night.jpg"
import tour1 from "../assets/images/tour/osaka-castle-evening.jpg"
import tour2 from "../assets/images/tour/kyoto-evening.jpg"
import tour3 from "../assets/images/tour/yokohama-evening.jpg"
import tour4 from "../assets/images/tour/sapporo-night.webp"
import tour5 from "../assets/images/tour/hiroshima-city-night.jpg"
import PopularPlace from '../components/PopularPlace/PopularPlace';


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

  const destinations = [
    {
      id: 0,
      name: "Tokyo",
      tours: "10 tours and activities",
      image: tour,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Tokyo Prefecture",
    },
    {
      id: 1,
      name: "Osaka",
      tours: "10 tours and activities",
      image: tour1,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Osaka Prefecture",
    },
    {
      id: 2,
      name: "Kyoto",
      tours: "10 tours and activities",
      image: tour2,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Kyoto Prefecture",
    },
    {
      id: 3,
      name: "Yokohama",
      tours: "10 tours and activities",
      image: tour3,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Kanagawa Prefecture",
    },
    {
      id: 4,
      name: "Sapporo",
      tours: "10 tours and activities",
      image: tour4,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Hokkaido Prefecture",
    },
    {
      id: 5,
      name: "Hiroshima",
      tours: "10 tours and activities",
      image: tour5,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Hiroshima Prefecture",
    },
  ]


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
                {destinations.map((destination, inx)=>{
                  return (
                    <div className="img-box" key={inx}>
                      <Card>
                          <Card.Img
                          variant='top'
                          src={destination.image}
                          className='img-fluid'
                          alt={destination.name}
                          />
                          <Card.Title>{destination.name}</Card.Title>
                          <span className="tours">{destination.tours}</span>
                      </Card>
                    </div>
                  )
              })}
              </Slider>
          </Col>
        </Row>

      </Container>
    </section>

    {/* Tour section start */}

    
    <PopularPlace /> 

    </>
  )
}

export default Home;