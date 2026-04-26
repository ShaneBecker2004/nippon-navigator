import React, { useState, useEffect } from 'react'; // Group your imports
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import airport from "../../assets/images/breadcrumb/currency-exchange-image.jpg"

const CORE_CURRENCIES = ["USD", "EUR", "GBP", "CAD", "AUD", "KRW", "SGD"];

const Currency = () => {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [converted, setConverted] = useState(0);
    const [direction, setDirection] = useState("TO_JPY");

    const SYMBOLS = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        CAD: "C$",
        AUD: "A$",
        KRW: "₩",
        SGD: "S$",
        JPY: "¥",
    };    
    
    const format = (num) => 
        new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 2,
        }).format(num);



    useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch('https://api.exchangerate-api.com/v4/latest/JPY');
                const data = await res.json();

                const filteredRates = {};

                CORE_CURRENCIES.forEach((currency) => {
                    filteredRates[currency] = 1 / data.rates[currency];
                });

                setRates(filteredRates);

            } catch (error) {
                console.error("Error fetching rates:", error);
            }
        };

        fetchRates();
        const interval = setInterval(fetchRates, 60000); 
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!rates[selectedCurrency]) return;
        
        if (direction === "TO_JPY") {
            setConverted(amount * rates[selectedCurrency]);
        } else {
            setConverted(amount / rates[selectedCurrency]);
        }
    }, [amount, selectedCurrency, direction, rates]);

    const handleSwap = () => {
        setDirection((prev) => 
            prev === "TO_JPY" ? "FROM_JPY" : "TO_JPY"
        );
    };

    // Return the full JSX for the page
    return (
        <>
            <Breadcrumbs title="Currency Exchange" pagename="Currency Exchange" bgImage={airport} />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md="10">
                            <div className='about-content'>
                                <h2 className='h2 font-bold pt-4 pb-2'>
                                    Currency Exchange Rate
                                </h2>
                                <p className='body-text mb-2'>
                                    Live exchange rates based on Japanese Yen (JPY) for common travel currencies.
                                </p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Card className="p-4 shadow-sm">
                                <h3>Live Market Rates (Base: JPY)</h3>

                                {Object.keys(rates).length === 0 ? (
                                    <p>Loading market data...</p>
                                ) : (
                                    <div className="tracker">
                                        {CORE_CURRENCIES.map((currency) => (
                                            <p key={currency}>
                                                <strong>{currency}:</strong> 1 {currency} ={" "}
                                                {rates[currency]?.toFixed(2)} JPY
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        </Col>
                        <Col md="10">
                            <div className='about-content'>
                                <h2 className='h2 font-bold pt-4 pb-2 mt-5'>
                                    Currency Calculator
                                </h2>
                                <p className='body-text mb-2'>
                                    Easily convert your home currency into Japanese Yen to better understand costs while planning your trip.
                                    Our live exchange rates help you estimate expenses in real time so you can budget with confidence.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className='p-4 shadow-sm mb-5'>
                                <h4 className='mb-3'>Convert Currency</h4>

                                <div className='mb-3'>
                                    <label>Amount</label>
                                    <input
                                        type="number"
                                        className='form-control mt-3'
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label>Currency</label>
                                    <select
                                        className='form-control mt-3'
                                        value={selectedCurrency}
                                        onChange={(e) => setSelectedCurrency(e.target.value)}
                                    >
                                        {CORE_CURRENCIES.map((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='text-center mb-3'>
                                    <button className='btn btn-outline-secondary' onClick={handleSwap}>
                                        ⇄ Swap
                                    </button>
                                </div>

                                <div className='mt-3 text-center'>
                                    {direction === "TO_JPY" ? (
                                    <h5>
                                        {SYMBOLS[selectedCurrency]}
                                        {format(amount)} {selectedCurrency} →{" "}
                                        {SYMBOLS.JPY}
                                        {format(converted)} JPY
                                    </h5>
                                    ) : (
                                        <h5>
                                            {SYMBOLS.JPY}
                                            {format(amount)} JPY →{" "}
                                            {SYMBOLS[selectedCurrency]}
                                            {format(converted)} {selectedCurrency}
                                        </h5>
                                    )}
                                </div>
                            </Card>
                        </Col>

                        <Col md="10">
                            <Card className='p-4 mt-5 shadow-sm border-0 text-center bg-light'>
                                <h3 className='mb-3 font-bold'>Did this information help you?</h3>

                                <div className='d-flex justify-content-center gap-3'>
                                    <button className='btn btn-outline-success px-4'>
                                        👍 Yes
                                    </button>
                                    <button className='btn btn-outline-danger px-4'>
                                        👎 No
                                    </button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Currency;