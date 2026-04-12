import React from 'react'
import "../Breadcrumbs/breadcrumbs.css"
import { Breadcrumb, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Breadcrumbs = (props) => {

    const bannerStyle = {
        backgroundImage: `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
  return (
    <>
    <div className='inner-banner-wrap' style={props.bgImage ? bannerStyle : {}}>
        <div className='inner-banner-container'>
            <Container>
                <div className='inner-banner-content'>
                    <h1 className='fs-1 text-white text-uppercase font-bold'> 
                        {" "}
                        {props.title}{" "} 
                    </h1>
                </div>
            </Container>
        </div>
    </div>
        <div className='navbar-link py-1'>
            <Container>
                <Row>
                    <Breadcrumb>
                            <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }}>
                                <i className="bi bi-house-door-fill me-1"></i> Home
                            </Breadcrumb.Item>
                        
                            <Breadcrumb.Item active={!props.childpagename}>
                                {props.pagename}
                            </Breadcrumb.Item>

                            {props.childpagename && (
                                <Breadcrumb.Item active>
                                    {props.childpagename}
                                </Breadcrumb.Item>
                            )}
                    </Breadcrumb> 
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Breadcrumbs