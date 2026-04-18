import React from 'react'
import "../Cards/card.css"
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-bootstrap'


const PopularCard = ({ val }) => {
  return (
    <>
        <Card className="rounded-2 shadow-sm popular-card">
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
            <Card.Title><NavLink className="body-text text-dark text-decoration-none" to="/explore-details"> {val.title}</NavLink></Card.Title>
            <p className='review'>
            <span>
                <i className="bi bi-star-fill me-1"></i>
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

        </Card>
    </>
  )
}

export default PopularCard