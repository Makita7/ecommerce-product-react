import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import ImgCarousel from './ImgCarousel';

export default function ShoeCard() {
    return (
        <>
            <ImgCarousel/>
            <div className='m-4'>
                <p>sneaker company</p>
                <p>Fall Limited Edition Sneakers</p>
                <p>lorem impum jasjjkash</p>
                <div className="d-flex align-content-between">
                    <div>
                        <p>$125.00</p>
                        <div>50%</div>
                    </div>
                    <p>250</p>
                </div>

                <div className='d-flex align-items-center justify-content-between' style={{backgroundColor: '#f7f8fd'}}>
                    <Button variant='light' style={{width: "33%", fontWeight: "bold", fontSize: "1.5rem", color: "#ff7d1b"}} >-</Button>
                    <p className='mb-0' style={{fontWeight: "bold", fontSize: "1.5rem"}}>0</p>
                    <Button variant='light' style={{width: "33%", fontWeight: "bold", fontSize: "1.5rem", color: "#ff7d1b"}}>+</Button>
                </div>
                <Button variant='primary' style={{width: '100%',}} className='my-2' >Add to Cart</Button>
            </div>
        </>
    )
}

