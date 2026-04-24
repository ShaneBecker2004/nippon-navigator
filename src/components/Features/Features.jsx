import React from 'react'
import "../Features/features.css"

import feature1 from "../../assets/images/feature/shibuya-crossing-night.jpg";
import feature2 from "../../assets/images/feature/cafe-smartphone.jpg";
import feature3 from "../../assets/images/feature/gokart-tokyo.webp";
import feature4 from "../../assets/images/feature/tokyo-station-sign.jpg";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            des: "Turn your dream Japan trip into a simple, stress-free plan.",
            link: ""
        },
        {
            id: 1,
            image: feature2,
            title: "Reviews you can trust",
            des: "See what others truly think before you go."
        },
        {
            id: 2,
            image: feature3,
            title: "Go and enjoy the fun",
            des: "Discover experiences that make your trip exciting.",
            link: "/explore"
        },
        {
            id: 3,
            image: feature4,
            title: "Know what to expect",
            des: "Learn how to get around, speak, and explore like a local."
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
                          const CardContent = (
                            <Card className='feature-card'>
                              <Card.Img
                                variant='top'
                                src={feature.image}
                                className='img-fluid'
                                alt={feature.title}
                              />
                              <Card.Title>{feature.title}</Card.Title>
                              <Card.Text>{feature.des}</Card.Text>
                            </Card>
                          );

                            return (
                              <div key={inx} className="img-box-feature">
                                {feature.link ? (
                                  <Link to={feature.link} className='card-link-wrapper'>
                                    {CardContent}
                                  </Link>
                                ) : (
                                  CardContent
                                )}
                              </div>
                            );
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