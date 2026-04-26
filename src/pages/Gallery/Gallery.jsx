import React, { useEffect } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import galleryimg from '../../assets/images/breadcrumb/arrivals-lobby-osaka.webp'
import './gallery.css'

const Gallery = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);


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
          <div
            className="sk-instagram-feed"
            data-embed-id="25676084"
          />

      </div>
    </>
  )
}

export default Gallery