import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import shinkansenimg from  "../../assets/images/breadcrumb/shinkansen.jpg"

const GettoCity = () => {
  return (
    <>
      <Breadcrumbs title="getting around the city" pagename="Getting Around The City" bgImage={shinkansenimg}/>
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content mb-4'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Transportation in Japan
                </h2>
                <p className='body-text'>
                  Getting around Japanese cities is efficient, safe, and easy once you understand the main transport options.
                  Trains, buses, and taxis all work together, and most travelers rely on IC cards for seamless payment.
                </p>
              </div>
            </Col>
            <Col md="10">

              <h2 className='h2 font-bold pt-4 pb-2 mb-2'>
                🚆 Trains & Rail System
              </h2>

              <p className='body-text mb-4'>
                Japan has one of the most advanced rail systems in the world, offering fast, reliable, and highly organized transportation across cities and regions.
              </p>

              {/* SHINKANSEN */}
              <h4 className='font-bold mb-2'>🚄 Shinkansen (Bullet Train)</h4>
              <p className='body-text mb-4'>
                The Shinkansen connects major cities across Japan at high speeds. It is the fastest and most comfortable option for long-distance travel, such as Tokyo to Kyoto or Osaka.
              </p>

              {/* JR */}
              <h4 className='font-bold mb-2'>🚆 JR (Japan Railways)</h4>
              <p className='body-text mb-4'>
                JR lines are the main national rail network covering both urban and regional routes. The JR Yamanote Line in Tokyo is one of the most important circular routes for getting around the city.
              </p>

              {/* METRO */}
              <h4 className='font-bold mb-2'>🚇 Metro System (City Rail)</h4>
              <p className='body-text mb-4'>
                Metro systems operate within major cities like Tokyo and Osaka. They are fast, frequent, and ideal for traveling between business districts and neighborhoods.
              </p>

              {/* LOCAL TRAINS */}
              <h4 className='font-bold mb-2'>🚉 Local Trains</h4>
              <p className='body-text mb-4'>
                Local trains stop at every station and are commonly used for short-distance travel between suburbs and nearby towns. They are slower but very accessible and often run on JR or private rail lines.
              </p>

              {/* SUBWAY */}
              <h4 className='font-bold mb-2'>🚇 Subway Lines</h4>
              <p className='body-text mb-4'>
                Subway lines run underground and are integrated with city metro systems. They are the easiest way to navigate dense urban areas and connect key city zones.
              </p>

              <h3 className='h4 font-bold pt-4 pb-2 mb-2'>How to Use Trains</h3>

              <h4 className='font-bold mb-2'>💳 IC Cards</h4>
              <p className='body-text mb-4'>
                Tap your IC card (Suica or Pasmo) at the ticket gates to enter and exit. Fares are calculated automatically.
              </p>

              <h4 className='font-bold mb-2'>🎫 Buying Tickets</h4>
              <p className='body-text mb-4'>
                Use ticket machines at stations. Select your destination and pay the displayed fare.
              </p>

              <h4 className='font-bold mb-2'>📍 Navigation Apps</h4>
              <p className='body-text mb-4'>
                Apps like Google Maps provide accurate routes, transfer info, and platform numbers.
              </p>

              {/* TIP */}
              <p className='body-text mb-5'>
                <strong>⚠️ Tip:</strong> Rush hours (7–9 AM and 5–7 PM) can be extremely crowded. If possible, travel outside peak times for a more comfortable experience.
              </p>

            </Col>
            <Col md="10">
              <h2 className='h2 font-bold pt-4 pb-2 mb-2'>🚌 Buses</h2>
              <p className='body-text mb-4'>
                Buses are useful for reaching areas not covered by trains, especially in suburban or rural locations.
                In cities, they are reliable but slightly more complex for first-time visitors.
              </p>
              <h4 className='font-bold mb-2'>🏙️ Local/City Buses</h4>
              <p className='body-text mb-4'>
                Best for daily travel within cities and rural areas, often featuring flat fares in city centers and rear-door boarding.
              </p>
              <h4 className='font-bold mb-2'>🛣️ Highway Buses</h4>
              <p className='body-text mb-4'>
                Known as coaches, these travel between major cities (e.g., Tokyo to Osaka) or to tourist spots (e.g., Mt. Fuji). They are economical and faster alternatives to trains.
              </p>
              <h4 className='font-bold mb-2'>🌙 Night/Overnight Buses</h4>
              <p className='body-text mb-4'>
                A specialized type of highway bus that runs late at night, featuring reclining seats (sometimes individual curtains) to save on accommodation costs.
              </p>
              <h4 className='font-bold mb-2'>✈️ Airport Limousine Buses</h4>
              <p className='body-text mb-4'>
                Provide direct, comfortable travel between airports (Narita/Haneda) and major city hotels or train stations, with luggage storage.
              </p>
              <h4 className='font-bold mb-2'>🗺️ Sightseeing/Tourist Buses</h4>
              <p className='body-text mb-4'>
                Specialized buses, such as the Hato Bus in Tokyo, often with guides for visiting major sites.
              </p>
              <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🚌 How to Use Buses</h3>
              <p className='body-text mb-4'>
                Enter from the rear door and exit from the front. Pay using an IC card or cash when you get off.
                In some cities, buses have a flat fare, while others calculate distance-based fares.
              </p>
            </Col>
            <Col md="10">
              <h2 className='h2 font-bold pt-4 pb-2 mb-2'>🚕 Taxis & Ride Services</h2>
              <p className='body-text mb-4'>
                Taxis in Japan are clean, safe, and easy to use, though they are more expensive than trains or buses.
                They’re especially useful late at night, in areas with limited public transport, or when traveling with luggage.
                Most taxis accept cash, credit cards, and IC cards.
              </p>
              <h4 className='font-bold mb-2'>🚕 Standard Taxis</h4>
              <p className='body-text mb-4'>
                The most common option, offering reliable service with professional drivers. Doors open automatically,
                so there’s no need to open them yourself.
              </p>
              <h4 className='font-bold mb-2'>👤 Individual/Private Taxis</h4>
              <p className='body-text mb-4'>
                Operated by independent drivers, these taxis provide the same level of service as company taxis and are common throughout cities.
              </p>
              <h4 className='font-bold mb-2'>🗺️ Sightseeing Taxis</h4>
              <p className='body-text mb-4'>
                Pre-booked taxis where drivers act as guides, taking you to popular attractions with flexible itineraries.
              </p>
              <h4 className='font-bold mb-2'>✈️ Airport Taxis</h4>
              <p className='body-text mb-4'>
                Offer fixed-rate fares to and from major airports, making them a convenient option for travelers with luggage.
              </p>
              <h4 className='font-bold mb-2'>♿ Universal Design (UD) Taxis</h4>
              <p className='body-text mb-4'>
                Accessible vehicles designed for passengers with mobility needs, including wheelchair access and extra space for luggage.
              </p>
              <h4 className='font-bold mb-2'>✨ GO Premium</h4>
              <p className='body-text mb-4'>
                A higher-end service available through the GO app, offering larger vehicles and a more comfortable experience for groups or travelers with extra luggage.
              </p>
              <h3 className='h4 font-bold pt-4 pb-2 mb-2'> Taxi Booking Methods</h3>
              <h4 className='font-bold mb-2'>📱 Taxi Apps</h4>
              <p className='body-text mb-4'>
                Apps like GO, Uber, and DiDi are widely used in major cities. GO is the most popular and supports coverage across Japan.
              </p>
              <h4 className='font-bold mb-2'>📍 Taxi Stands</h4>
              <p className='body-text mb-4'>
                Found at train stations, airports, and major hotels. Simply line up and take the next available taxi.
              </p>
              <h4 className='font-bold mb-2'>🙋 Hailing on the Street</h4>
              <p className='body-text mb-4'>
                Look for a red light (空車) in the windshield, which indicates the taxi is available. Green means it’s occupied.
              </p>
              <h4 className='font-bold mb-2'>🏨 Phone/Hotel Booking</h4>
              <p className='body-text mb-4'>
                Hotel staff can easily arrange a taxi for you, which is a convenient option if you’re unsure about language or availability.
              </p>
            </Col>
            <Col md="10">
              <h2 className='h2 font-bold pt-4 pb-2 mb-2'>💳 Payment Methods</h2>
              <p className='body-text mb-4'>
                Japan offers a mix of modern and traditional payment options. While digital payments are becoming more common, it’s still important to carry some cash, especially when traveling outside major cities.
              </p>
              <h4 className='font-bold mb-2'>💳 IC Cards (Recommended)</h4>
              <p className='body-text mb-4'>
                IC cards like Suica and Pasmo are the most convenient way to pay for transportation and small purchases. You can use them on trains, buses, vending machines, and at many convenience stores. Simply tap your card at the gate or register—no need to buy individual tickets each time.
              </p>
              <h4 className='font-bold mb-2'>💴 Cash (Coins & Bills)</h4>
              <p className='body-text mb-4'>
                Cash is still widely used across Japan, especially at smaller shops, local restaurants, temples, and rural areas. It’s a good idea to carry yen with you at all times. ATMs at convenience stores like 7-Eleven and Lawson are reliable for international withdrawals.
              </p>
              <h4 className='font-bold mb-2'>💳 Credit Cards</h4>
              <p className='body-text mb-5'>
                Credit cards are accepted at most hotels, department stores, and larger restaurants. However, smaller businesses may not accept them, so it’s best to have a backup payment method. Contactless payment is becoming more common but isn’t universal yet.
              </p>
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
  )
}

export default GettoCity