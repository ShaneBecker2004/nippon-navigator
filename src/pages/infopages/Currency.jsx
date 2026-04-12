import React, { useState, useEffect } from 'react'; // Group your imports
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import airport from "../../assets/images/breadcrumb/narita-airport.webp"

const Currency = () => {
    const [rates, setRates] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await res.json();
                setRates(data.rates);
            } catch (error) {
                console.error("Error fetching rates:", error);
            }
        };

        fetchRates();
        const interval = setInterval(fetchRates, 60000); 
        return () => clearInterval(interval);
    }, []);

    // Return the full JSX for the page
    return (
        <>
            <Breadcrumbs title="Currency Exchange" pagename="Currency Exchange" bgImage={airport} />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card className="p-4 shadow-sm">
                                <h3>Live Market Rates</h3>
                                {!rates ? (
                                    <p>Loading market data...</p>
                                ) : (
                                    <div className="tracker">
                                        <p><strong>USD/JPY:</strong> {rates.JPY}</p>
                                    </div>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Currency;