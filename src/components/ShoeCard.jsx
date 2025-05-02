import React from 'react';
import { Button } from 'react-bootstrap';
import ImgCarousel from './ImgCarousel';
import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';

export default function ShoeCard() {

    const PriceFormatter = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    }

    const [amount, setAmount] = React.useState(0);

    const decrement = () => setAmount(amount - 1);
    const increment = () => setAmount(amount + 1);

    return (
        <>
            <ImgCarousel/>
            <div className='m-4'>
                <Subtitle>sneaker company</Subtitle>
                <Title>Fall Limited Edition Sneakers</Title>
                <GeneralText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</GeneralText>
                <div className="d-flex justify-content-between mb-4 mt-2 align-items-center">
                    <div className='d-flex align-items-center'>
                        <Price className='me-4 mb-0'>{PriceFormatter(125.00)}</Price>
                        <Discount>50%</Discount>
                    </div>
                    <AmountDiscounted>{PriceFormatter(250)}</AmountDiscounted>
                </div>

                <div className='d-flex align-items-center justify-content-between mb-2' style={{backgroundColor: '#f7f8fd'}}>
                    <Button variant='light' style={{width: "33%", fontWeight: "bold", fontSize: "1.5rem", color: "#ff7d1b"}} onClick={decrement}>-</Button>
                    <p className='mb-0' style={{fontWeight: "bold", fontSize: "1.5rem"}}>{amount}</p>
                    <Button variant='light' style={{width: "33%", fontWeight: "bold", fontSize: "1.5rem", color: "#ff7d1b"}} onClick={increment}>+</Button>
                </div>
                <Button variant='primary' style={{width: '100%', padding: "0.8rem 0", fontWeight: "bold",}} className='my-2' >
                    {/* <FaCartPlus className='me-2' style={{fontSize: "1.5rem"}}/> */}
                    <img src='' alt='' />
                    Add to Cart
                </Button>
            </div>
        </>
    )
}

const Subtitle = styled.p`
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--dark-grayish-blue);
    text-transform: uppercase;
`

const Title = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.1;
`
const GeneralText = styled.p`
    color: var(--dark-grayish-blue);
    font-weight: 480;
`

const Price = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`

const Discount = styled.div`
    background-color: var(--black);
    color: white;
    border-radius: 8px;
    padding: 2px 10px;
    font-weight: bold;
`

const AmountDiscounted = styled.p`
    margin: 0;
    text-decoration: line-through;
    font-weight: bold;
    color: var(--dark-grayish-blue);
    `