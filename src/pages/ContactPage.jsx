import React from 'react'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import { Title, Subtitle } from '../pages/ShoePage';
import bgImg from '../assets/shoeWheelBanner-small.png'
import styled, { keyframes } from 'styled-components';
import { AboutText as DivBg } from './AboutPage';

export default function ContactPage() {
    return (
        <div className='m-4' style={{position: "relative"}}>
            <DivBg style={{zIndex: "+5", position: "absolute"}}>
                <Title style={{fontSize: "1.5rem"}}>Contact Us</Title>
                <div className='mb-4'>
                    <Subtitle style={{fontSize: "1rem"}} className='mb-0'> <FaLocationDot/> Headquarters</Subtitle>
                    <div className='ms-4'>
                        <p className='mb-0'>Stride & Style </p>
                        <p className='mb-0'>123 Sneaker Lane </p>
                        <p className='mb-0'>New York, NY 10001, USA</p>
                    </div>
                </div>

                <div className="mb-4">
                    <Subtitle style={{fontSize: "1rem"}} className='mb-0'><FaEnvelope/> Email Support</Subtitle>
                    <div className='ms-4'>
                        <p  className='mb-0'>support@strideandstyle.com</p>
                        <p  className='mb-0'>(We typically respond within 24 hours.)</p>
                    </div>
                </div>

                <div className="mb-4">
                    <Subtitle style={{fontSize: "1rem"}} className='mb-0'><FaPhone/> Follow Us</Subtitle>
                    <div className="ms-4">
                        <p className='mb-0'>Instagram: @strideandstyle</p>
                        <p className='mb-0'>Facebook: /strideandstyle</p>
                        <p className='mb-0'>TikTok: @strideandstyle_official</p>
                    </div>
                </div>
            </DivBg>
            <ImgBg src={bgImg} alt='image background for contact page of shoes in circle' />
        </div>
    )
}

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ImgBg = styled.img`
    position: fixed;
    bottom: -50%;
    right: -85%;
    width: 170%;
    opacity: 0.8;
    animation: ${rotate360} 25s linear infinite;
`