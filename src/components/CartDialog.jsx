import { useState } from "react";
import styled from "styled-components";
import CartIcon from '../assets/icon-cart.svg';
import closeIcon from '../assets/icon-close.svg';
import { OverlayStyle } from "./Navbar";
import { Button } from 'react-bootstrap';
import { useShopStore } from "../store/store";


export default function CartDialog() {

    const [isCartToggle, setIsCartToggle] = useState(false);
    const cart = useShopStore((state) => state.cart);

    const ToggleCart = () => setIsCartToggle(!isCartToggle);

    const Checkout = () => {
        console.log("Checkout");
        ToggleCart();
    };

    return (
        <>
            <img onClick={ToggleCart} src={CartIcon} style={{margin: "auto"}} alt='shopping cart button' />
            { isCartToggle &&
                <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                    <CartDialogStyle className='py-2 px-3'>
                        <div className="d-flex align-items-center justify-content-between">
                            <p style={{fontWeight: "bold", color: "var(--very-dark-blue)", fontSize: "1.2rem",}} className="mb-0">Cart</p>
                            <img onClick={ToggleCart} src={closeIcon} alt='navbar close button' aria-label='close button' style={{width: "1.2rem"}} className='ms-2' />
                        </div>
                        <div style={{minHeight: "5rem",}}>
                            { cart
                                ? cart.map((cart, index) => (
                                <p key={index}>{cart}</p>
                                ))
                                : <p>Cart is empty...</p>
                            }
                        </div>
                        <Button onClick={Checkout} variant='primary' style={{width: '100%', padding: "0.8rem 0", fontWeight: "bold",}} className='my-2' >
                            Checkout
                        </Button>
                    </CartDialogStyle>
                </OverlayStyle>
            }
        </>
    )
}

const CartDialogStyle = styled.div`
    position: absolute;
    box-shadow: 0px 7px 8px #00000052;
    background-color: white;
    height: auto;
    min-height: 30%;
    width: 90%;
    top: 3%;
    left: 5%;
    border-radius: 8px;
`