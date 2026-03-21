import React from 'react'
import "../PopularPlace/popular-place.css"
import { Container, Row, Card, Col, Stack } from 'react-bootstrap'
import Disney from "../../assets/images/popular/tokyo-disney.jpg"
import Universal from "../../assets/images/popular/universal-japan-globe-day.jpg"
import Skytree from "../../assets/images/popular/tokyo-skytree-afternoon.avif"
import Strawberry from "../../assets/images/popular/yokohama_strawberry_festival.webp"
import Ichiran from "../../assets/images/popular/ichiran_ramen.jpg"

const PopularPlace = () => {
    const populars = [
        {
            id: 0,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Theme Park"],
            days: "5 days - 4 nights",
            price: 65,
            afterDiscount: 0,
            rating: 4.5,
            review: 100,
        },
        {
            id: 1,
            title: "Universal Studios Japan",
            image: Universal,
            location: "Osaka",
            category: [("Theme Park")],
            days: "3 days - 2 nights",
            price: 85,
            afterDiscount: 60,
            rating: 4.5,
            review: 95,
        },
        {
            id: 2,
            title: "Tokyo Skytree",
            image: Skytree,
            location: "Tokyo",
            category: ["Shopping", "Observation Deck"],
            days: "unlimited",
            price: 45,
            afterDiscount: 32,
            rating: 4.2,
            review: 50,
        },
        {
            id: 3,
            title: "Ichiran Ramen",
            image: Ichiran,
            location: "Tokyo",
            category: ["Restaurant"],
            days: "24/7",
            price: 12,
            afterDiscount: 0,
            rating: 4.2,
            review: 99,
        },
        {
            id: 4,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Amusement"],
            days: "5 days - 4 nights",
            price: 75,
            afterDiscount: 58,
            rating: 4.5,
            review: 5,
        },
        {
            id: 5,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Amusement"],
            days: "5 days - 4 nights",
            price: 75,
            afterDiscount: 58,
            rating: 4.5,
            review: 5,
        },
        {
            id: 6,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Amusement"],
            days: "5 days - 4 nights",
            price: 75,
            afterDiscount: 58,
            rating: 4.5,
            review: 5,
        },
        {
            id: 7,
            title: "Yokohama Strawberry Festival",
            image: Strawberry,
            location: "Yokohama",
            category: ["Festival"],
            days: "All Day",
            price: 5,
            afterDiscount: 0,
            rating: 4.1,
            review: 25,
        },
    ]

  return (
    <section className='popular'>
        <Container>
            <Row>
                <Col md="12">
                    <div className='main_heading'>
                        <h1> Popular Activities </h1>
                    </div>
                </Col>
            </Row>
            <Row>
            {populars.map((val, inx) => {
                return (
                <Col md={3} sm={6} xs={12} className='mb-5' key={inx}>
                      <Card className='rounded-2 shadow-sm'>
                          <Card.Img
                          variant='top'
                          src={val.image}
                          className='img-fluid'
                          alt={"image"}
                          />
                          <Card.Body>
                          <Card.Text> 
                          <i className="bi bi-geo-alt"></i>
                          <span className='text'>{val.location}</span>
                            </Card.Text>
                          <Card.Title> {val.title} </Card.Title>
                          <p className='review'>
                            <span>
                                <i className="bi bi-star-fill"></i>
                            </span>
                            <span>{val.rating} </span>
                            <span>( {val.review} reviews )</span>
                          </p>
                          {val.category.map((cat, index) => {
                            return (
                                <span key={index} 
                                className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>                                
                            )
                          })}

                          </Card.Body>

                          <Card.Footer className='py-4'>
                            {val.afterDiscount ? (
                                <p className="text-decoration-line-through"> ${val.price.toFixed(2)}</p>
                            ): ""}
                            
                        <Stack direction="horizontal" className="justify-content-between mt-3">
                            <p>From <b>${val.afterDiscount  ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b></p>
                            <p> 
                                <i class="bi bi-clock"></i> {val.days} 
                            </p>
                        </Stack>

                          </Card.Footer>

                      </Card>
                </Col>
            )
            })}

            </Row>
        </Container>
    </section>
  )
}

export default PopularPlace