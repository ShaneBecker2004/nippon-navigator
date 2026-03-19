import React from 'react'
import "../Features/features.css"

import feature1 from "../../assets/images/feature/kyoto-evening.jpg";
import feature2 from "../../assets/images/feature/shibuya-crossing-night.jpg";
import feature3 from "../../assets/images/feature/tokyo-disney.jpg";
import feature4 from "../../assets/images/feature/inari-shrine-day.webp";
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
    var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
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
            des: "test"
        },
        {
            id: 1,
            image: feature2,
            title: "Test 2",
            des: "test"
        },
        {
            id: 2,
            image: feature3,
            title: "Test 3",
            des: "test"
        },
        {
            id: 3,
            image: feature4,
            title: "Test 4",
            des: "test"
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
                                <Card key={inx}>
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
                            )
                        })

                        }
                        </Slider>

                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Features