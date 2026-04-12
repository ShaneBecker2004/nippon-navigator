import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import galleryimg from '../../assets/images/breadcrumb/arrivals-lobby-osaka.webp'

const Gallery = () => {
  return (
    <>
        <Breadcrumbs title="Gallery" pagename="Gallery" bgImage={galleryimg} />
        <div className='text-style-bold'>
            <h1>Coming Soon! Stay Tuned For A Future Update!</h1>
        </div>
    </>
  )
}

export default Gallery