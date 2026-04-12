import React from 'react'
import "../Features/features.css"

import feature1 from "../../assets/images/feature/japan-map-graphic.webp";
import feature2 from "../../assets/images/feature/shibuya-crossing-night.jpg";
import feature3 from "../../assets/images/feature/gokart-tokyo.webp";
import feature4 from "../../assets/images/feature/inari-shrine-day.webp";
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
    var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
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

    const featureList = [
        {
            id: 0,
            image: feature1,
            title: "Discover the magic of Japan",
            des: "Booking made easier, you can count on us to help you plan for your trip."
        },
        {
            id: 1,
            image: feature2,
            title: "Reviews you can trust",
            des: "Within a glance, you can trust what others have experienced."
        },
        {
            id: 2,
            image: feature3,
            title: "Go and enjoy the fun",
            des: "With a lot of activities to do and see, you are guaranteed to have fun no matter where you are.",
            link: "/explore"
        },
        {
            id: 3,
            image: feature4,
            title: "Need to know what to expect",
            des: "Needing to know how to get around the city or what common phrases to use, we can help you."
        },
    ];

  return (
    <>
        <section className='feature-section'>
            <Container>
                <Row>
                    <Col md='12'>
                        <Slider {...settings} >
                        {featureList.map((feature, inx)=>{
                            return (
                              <div key={inx} className="img-box-feature">
                                <Card>
                                    <Card.Img
                                    variant='top'
                                    src={feature.image}
                                    className='img-fluid'
                                    alt={feature.title}
                                    />
                                    <Card.Title>{feature.title}</Card.Title>
                                    <Card.Text>
                                        {feature.des}
                                    </Card.Text>
                                </Card>
                                </div>
                            )
                        })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Features