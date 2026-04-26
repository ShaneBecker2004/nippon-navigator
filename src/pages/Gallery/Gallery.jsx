import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import galleryimg from '../../assets/images/breadcrumb/arrivals-lobby-osaka.webp'
import './gallery.css'

const Gallery = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

      if (window.SK?.refresh) {
        window.SK.refresh()
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <Breadcrumbs title="Gallery" pagename="Gallery" bgImage={galleryimg} />

      <div className="gallery-container">
        <div className="h1 fw-bold align-text-center">
          <h3>Browse Japan posts and reels!</h3>
        </div>
        <div>
          <p>(If the page doesn't load correctly, reload the page)</p>
        </div>
        {loading && (
          <div className="page-loader">
            Loading Gallery...
          </div>
        )}


          <div
            className="sk-instagram-feed"
            data-embed-id="25676084"
          />

      </div>
    </>
  )
}

export default Gallery