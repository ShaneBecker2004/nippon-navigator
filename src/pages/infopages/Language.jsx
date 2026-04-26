import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import mannerImg from "../../assets/images/breadcrumb/japan-etiquette-banner.jpg"

const Language = () => {
  return (
    <>
      <Breadcrumbs title="Language & Etiquette" pagename="Language & Etiquette" bgImage={mannerImg} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Best Etiquette Practices
                </h2>
                <p className='body-text mb-4'>
                  Japan places a strong emphasis on respect, cleanliness, and consideration for others. Following basic etiquette will help you have a smoother and more enjoyable experience.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🙇 Respect & Public Behavior</h3>
                <p className='body-text mb-3'>
                  Keep your voice low in public spaces, especially on trains. Talking loudly or taking phone calls in quiet areas is generally discouraged.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🚫 No Tipping</h3>
                <p className='body-text mb-3'>
                  Tipping is not expected in Japan and can even be seen as rude. Good service is already included in the experience.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>👟 Shoes Off Indoors</h3>
                <p className='body-text mb-3'>
                  Remove your shoes when entering homes, traditional accommodations, and some restaurants. Look for provided indoor slippers.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🚶‍♂️ Walking & Eating</h3>
                <p className='body-text mb-3'>
                  Eating while walking is uncommon in many areas. It’s better to stop and eat near where you purchased your food.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🗑️ Trash & Cleanliness</h3>
                <p className='body-text mb-3'>
                  Public trash bins are limited, so carry a small bag for your garbage. Always clean up after yourself.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🚆 Train Etiquette</h3>
                <p className='body-text mb-4'>
                  Line up when boarding, let passengers exit first, and avoid blocking doors. Priority seats should be left for those who need them.
                </p>
              </div>
            </Col>
            <Col md="10">
              <div className='about-content'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Important Phrases to Know
                </h2>
                <p className='body-text mb-4'>
                  While many people in Japan understand basic English, knowing a few simple phrases can go a long way and is always appreciated.
                </p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🙏 Basic Courtesy</h3>
                <p className='body-text mb-2'><strong>Arigatou gozaimasu</strong> — Thank you</p>
                <p className='body-text mb-2'><strong>Sumimasen</strong> — Excuse me / Sorry</p>
                <p className='body-text mb-4'><strong>Onegaishimasu</strong> — Please (when requesting something)</p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🍜 Dining</h3>
                <p className='body-text mb-2'><strong>Kore o kudasai</strong> — I’ll take this</p>
                <p className='body-text mb-2'><strong>Oishii</strong> — Delicious</p>
                <p className='body-text mb-4'><strong>Okaikei onegaishimasu</strong> — Check, please</p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🚆 Getting Around</h3>
                <p className='body-text mb-2'><strong>Eki wa doko desu ka?</strong> — Where is the station?</p>
                <p className='body-text mb-2'><strong>~ wa doko desu ka?</strong> — Where is ~?</p>
                <p className='body-text mb-4'><strong>Kippu</strong> — Ticket</p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🛍️ Shopping</h3>
                <p className='body-text mb-2'><strong>Ikura desu ka?</strong> — How much is it?</p>
                <p className='body-text mb-4'><strong>Kore wa nan desu ka?</strong> — What is this?</p>

                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>💡 Tip</h3>
                <p className='body-text mb-5'>
                  Even if your pronunciation isn’t perfect, making an effort is appreciated. Pairing these phrases with gestures or a translation app can make communication much easier.
                </p>
              </div>
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

export default Language
