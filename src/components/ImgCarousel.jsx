import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function ImgCarousel(photos) {

    const ShoePhotos = [];

    photos.photos.forEach((photo) => {
        ShoePhotos.push(photo);
    });

    return (
    <Carousel
        interval={4000}
        prevIcon={<FaArrowLeft className="custom-prev-icon" />}
        nextIcon={<FaArrowRight className="custom-next-icon" />}
    >
        { ShoePhotos.map((img, index) => (
            <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
        ))}
    </Carousel>
)}
