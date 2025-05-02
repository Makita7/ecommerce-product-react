import React from 'react';
import { Carousel } from 'react-bootstrap';
import ShoeImg1  from '../assets/image-product-1.jpg';
import ShoeImg2 from '../assets/image-product-2.jpg';
import ShoeImg3 from '../assets/image-product-3.jpg';
import ShoeImg4 from '../assets/image-product-4.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function ImgCarousel() {

    const ShoePhotos = [ShoeImg1, ShoeImg2, ShoeImg3, ShoeImg4];

    return (
    <Carousel
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
