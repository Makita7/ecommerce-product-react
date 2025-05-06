import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import ImgCarousel from '../components/ImgCarousel';
import { useShopStore, getDiscountedAmount } from '../store/store';
import { useParams } from 'react-router-dom';
import cartIcon from '../assets/icon-cart-darkGrey.svg';

export default function ShoePage() {

    const { prodId } = useParams();

    const product = useShopStore((
        (state) => state.products.find((product) => Number(product.id) === Number(prodId))
    ));

    const PriceFormatter = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    }

    const [amount, setAmount] = React.useState(0);

    const decrement = () => {
        if(amount > 0){
            setAmount(amount - 1)
        }
    };
    const increment = () => {
        if(amount < product.stock){
            setAmount(amount + 1)
        }
    };

    return (
        <>
            {!product ? <p>not found</p> :
            <>
                <ImgCarousel/>
                <div className='m-4'>
                    <Subtitle>sneaker company</Subtitle>
                    <Title>{product.name}</Title>
                    <GeneralText>{product.detail}</GeneralText>
                    <div className="d-flex justify-content-between mb-4 mt-2 align-items-center">
                        <div className='d-flex align-items-center'>
                            <Price className='me-4 mb-0'>{PriceFormatter(product.price)}</Price>
                            <Discount>{product.discount}%</Discount>
                        </div>
                        <AmountDiscounted>{PriceFormatter(getDiscountedAmount(product.price,product.discount))}</AmountDiscounted>
                    </div>

                    <div className='d-flex align-items-center justify-content-between mb-2' style={{backgroundColor: '#f7f8fd'}}>
                        <Button variant='light' style={{width: "33%", fontWeight: "bold", fontSize: "1.5rem", color: "#ff7d1b"}} onClick={decrement}>-</Button>
                        <p className='mb-0' style={{fontWeight: "bold", fontSize: "1.5rem"}}>{amount}</p>
                        <Button variant='light' style={{width: "33%", fontWeight: "bold", fontSize: "1.5rem", color: "#ff7d1b"}} onClick={increment}>+</Button>
                    </div>
                    <Button variant='primary' style={{width: '100%', padding: "0.8rem 0", fontWeight: "bold", color: "var(--very-dark-blue)"}} className='my-2' >
                        <img src={cartIcon} alt='shop cart icon' style={{width: "1.4rem"}} className='mx-2' />
                        Add to Cart
                    </Button>
                </div>
            </>}
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