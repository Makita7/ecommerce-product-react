
import { PriceFormatter } from "../store/store";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { StockAmount } from "../pages/ShoePage";

export default function CollectionCard({name, price, stock, id, img}) {

    return (
        <Link to={`/product/${id}`} className='text-decoration-none' style={{color: "var(--very-dark-blue)"}} >
            <Card className="" >
                { img && <img src={img[0]} alt='shoe name' style={{width: "100%", borderRadius: "8px"}} className="m-1" />}
                <div className="ms-2 d-flex" style={{width: "100%"}}>
                    <Title className="mb-0" style={{color: "var(--dark-grayish-blue)", width: "70%",}}>{name}</Title>
                    <div className="me-2" style={{display: "block", textAlign: "right", width: "30%", }}>
                        <Price className="mb-0">{PriceFormatter(price)}</Price>
                        <StockAmount>Stock: {stock}</StockAmount>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

const device = {
    xs: '400px',
    sm: '600px',
    md: '900px',
    lg: '1280px',
    xl: '1440px',
    xxl: '1920px',
}

const Card = styled.div`
    width: 90%;
    background-color: white;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 0.8rem 1rem;
    @media (min-width: ${device.sm}) {
        width: 20rem;
    }
`

const Title = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.1;
    width: 100%;
`

const Price = styled.p`
    color: black;
    text-align: right;
    font-size: 1.2rem;
    font-weight: 700;
`