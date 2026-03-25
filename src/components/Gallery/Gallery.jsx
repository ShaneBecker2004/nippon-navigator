import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import { Captions } from 'yet-another-react-lightbox/plugins';

import GalleryImg1 from "../../assets/images/gallery/cherry-blossom-night.jpg"
import GalleryImg2 from "../../assets/images/gallery/fushimi_inari.jpg"
import GalleryImg3 from "../../assets/images/gallery/hello-kitty-shinkansen.jpg"
import GalleryImg4 from "../../assets/images/gallery/miyazaki-coast-afternoon.jpg"
import GalleryImg5 from "../../assets/images/gallery/sapporo-snow-festival.jpg"

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        {
            src: GalleryImg1,
            title: "Cherry Blossom Season",
            description: "Occurs every Spring"
        },
        {
            src: GalleryImg2,
            desc: "Fushimi Inari Shrines",
            sub: "Home to 1,000 shrines"
        },
        {
            src: GalleryImg3,
            desc: "The Limited Time Hello Kitty Shinkansen",
            sub: "Fan-favorite character speeding through"
        },
        {
            src: GalleryImg4,
            desc: "The Miyazaki Coast",
            sub: "Beautiful shrine at the coast"
        },
        {
            src: GalleryImg5,
            desc: "The Annual Sapporo Snow Festival",
            sub: "Fun snow sculptures and activities"
        }
    ]

    return (
        <>
        {/* 👇 Image Grid (always visible) */}
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px"
        }}>
            {images.map((image, i) => (
            <img
                key={i}
                src={image.src}
                alt=""
                style={{
                width: "100%",
                cursor: "pointer",
                borderRadius: "8px"
                }}
                onClick={() => {
                setIndex(i);
                setOpen(true);
                }}
            />
            ))}
        </div>

        {/* 👇 Lightbox opens when image clicked */}
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            images={images}
            plugins={[Captions]}
        />
        </>
    )
}