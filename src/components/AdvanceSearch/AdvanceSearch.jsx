import React, { useState } from 'react'
import "../AdvanceSearch/search.css"
import { Container, Row, Col, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import
import CustomDropdown from '../CustomDropdown/CustomDropdown';

const AdvanceSearch = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectedLocation =(value)=> {
        console.log("Location", value)
    }

    const selectedGuest =(value)=> {
        console.log("Guest", value)
    }    

  return (
    <>
    <section className='box-search-advance'>
        <Container>
            <Row>
                <Col md={12} xs={12} >
                    <div className='Title-text'>
                        <h2> Create a new plan </h2>
                    </div>
                    <div className='box-search shadow-sm'>
                        <div className='item-search'>
                            {/* Using Props to Pass Data */}
                            <CustomDropdown 
                                label="Location"
                                onSelect={selectedLocation}
                                options={
                                    [
                                        "Tokyo",
                                        "Osaka",
                                        "Nagoya",
                                        "Hokkaido",
                                        "Yokohama",
                                        "Nara",
                                        "Fukuoka"
                                    ]
                                }
                            />
                        </div>
                        <div className='item-search item-search-2'>
                            <label className='item-search-label'> Arriving </label>
                            <DatePicker 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="dd, MMMM, yyyy"
                            />

                        </div>
                        <div className='item-search item-search-2'>
                            <label className='item-search-label'> Departing </label>
                            <DatePicker 
                            selected={endDate} 
                            onChange={(date) => setEndDate(date)}
                            selectedEnd
                            startDate={endDate}
                            endDate={startDate} 
                            dateFormat="dd, MMMM, yyyy"
                            />

                        </div>
                        <div className='item-search bd-none'>
                            <CustomDropdown 
                                label="Adults"
                                onSelect={selectedGuest}
                                options={
                                    [
                                       "1 adult",
                                       "2 adults",
                                       "3 adults",
                                       "4 adults"
                                    ]
                                }
                                />
                        </div>
                        <div className='item-search bd-none'>
                            <CustomDropdown
                                label="Children"
                                onSelect={selectedGuest}
                                options={
                                    [
                                        "1 child",
                                        "2 children",
                                        "3 children",
                                        "4 children"
                                    ]
                                }
                                />
                        </div>
                        <div className='item-search bd-none'>
                            <CustomDropdown 
                                label="Seniors"
                                onSelect={selectedGuest}
                                options={
                                    [
                                       "1 senior",
                                       "2 seniors",
                                       "3 seniors",
                                       "4 seniors"
                                    ]
                                }
                                />
                        </div>
                        <div className='item-search bd-none'>
                            <Button className="primaryBtn flex-even d-flex justify-content-center">
                                <i className="bi bi-plus-square">Create</i>
                            </Button>

                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default AdvanceSearch