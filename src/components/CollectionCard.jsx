
import { PriceFormatter } from "../store/store";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function CollectionCard({name, price, id, img}) {

    return (
        <Link to={`/product/${id}`} className='text-decoration-none' style={{color: "var(--very-dark-blue)"}} >
            <Card className="" >
                { img && <img src={img[0]} alt='shoe name' style={{width: "100%", borderRadius: "8px"}} className="m-1" />}
                <div className="ms-2 d-flex" style={{width: "100%"}}>
                    <Title className="mb-0" style={{color: "var(--dark-grayish-blue),"}}>{name}</Title>
                    <Price className="mb-0">{PriceFormatter(price)}</Price>
                </div>
            </Card>
        </Link>
    )
}

const Card = styled.div`
    width: 90%;
    background-color: white;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 0.8rem 1rem;
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