import { useState } from "react";
import { useShopStore } from "../store/store";
import styled from "styled-components";
import closeIcon from '../assets/icon-close.svg';
import { OverlayStyle } from "./Navbar";
import { Button } from 'react-bootstrap';
import { FaCreditCard, FaTrash } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function CartDialog() {

    const [isCartToggle, setIsCartToggle] = useState(false);
    const [isThanksToggle, setIsThanksToggle] = useState(false);
    let cart = useShopStore((state) => state.cart);
    const CheckoutMethod = useShopStore(state => state.checkoutMethod);

    const ToggleCart = () => setIsCartToggle(!isCartToggle);

    const removeFromCart = useShopStore((state) => state.removeFromCart);

    const ThanksMessage = () => {
        setIsThanksToggle(true);
        setTimeout(() => {
            setIsThanksToggle(false);
        }, 2000);
    };

    const Checkout = () => {
        CheckoutMethod();
        ThanksMessage();
        ToggleCart();
    };

    const PriceFormatter = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    }

    const TotalAmountPerProd = (price, amount) => {
        return price * amount;
    }

    const TotalAmount = () => {
        return cart.reduce((total, item) => total + (item.price * item.amount), 0);
    }

    return (
        <>
            <FaCartShopping onClick={ToggleCart} className='me-2' style={{ fontSize: "1.4rem", color: "#69707d", marginTop: "auto", marginBottom: "auto"}}/>
            { isCartToggle &&
                <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                    <CartDialogStyle className={`py-2 px-3 ${isCartToggle ? 'fadeIn' : 'fadeOut'}`}>
                        <div className="d-flex align-items-center justify-content-between">
                            <p style={{fontWeight: "bold", color: "var(--very-dark-blue)", fontSize: "1.2rem",}} className="mb-0">Cart</p>
                            <img onClick={ToggleCart} src={closeIcon} alt='navbar close button' aria-label='close button' style={{width: "1.2rem"}} className='ms-2' />
                        </div>
                        <div style={{minHeight: "5rem",}}>
                            <hr className="my-2 mb-3" />
                            { cart && cart.length > 0
                                ? cart.map((cartItem, index) => (
                                    <div key={index} className="d-flex align-items-center mb-3" >
                                        {cartItem.photos && <Thumbnail src={cartItem.photos[0]} alt="cart shoe profile photo" />}
                                        <div className="ms-2" style={{width: "100%"}}>
                                            <p className="mb-0" style={{color: "var(--dark-grayish-blue)"}}>{cartItem.name}</p>
                                            <p className="mb-0" style={{color: "var(--dark-grayish-blue)"}}>{PriceFormatter(cartItem.price)} x {cartItem.amount} = <b>{PriceFormatter(TotalAmountPerProd(cartItem.price, cartItem.amount))}</b></p>
                                        </div>
                                        <FaTrash onClick={() => removeFromCart(cartItem.productId)} color="grey" className="me-2" />
                                    </div>
                                ))
                                : <p className="text-center">Cart is empty...</p>
                            }

                        </div>
                        <div className="d-flex text-right justify-content-end">
                            <TotalText>Total: <b>{PriceFormatter(TotalAmount())}</b></TotalText>
                        </div>
                        <Button onClick={Checkout} variant='primary' style={{width: '100%', padding: "0.8rem 0", fontWeight: "bold",color: "var(--very-dark-blue)"}} className='my-2 btn-orange' >
                            <FaCreditCard className='me-2' />
                            Checkout
                        </Button>
                    </CartDialogStyle>
                </OverlayStyle>
            }
            { isThanksToggle &&
                <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                    <ThanksDialogStyle className={`py-2 px-3 ${isThanksToggle ? 'fadeIn' : 'fadeOut'}`}>
                        <div className="d-flex align-items-center justify-content-between">
                            <p style={{fontWeight: "bold", color: "hsl(26deg 100% 38.66%)", fontSize: "1.2rem", margin: "auto"}} className="mb-0 mt-2 text-center">Thank You!!</p>
                        </div>
                    </ThanksDialogStyle>
                </OverlayStyle>
            }
        </>
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
    @media (min-width: ${device.sm}) {
        width: 30rem;
        left: auto;
        right: 3%;
    }
`

const ThanksDialogStyle = styled.div`
    position: absolute;
    box-shadow: 0px 7px 8px #00000052;
    background-color: white;
    height: auto;
    min-height: 10%;
    width: 90%;
    top: 3%;
    left: 5%;
    border-radius: 8px;
    @media (min-width: ${device.sm}) {
        width: 30rem;
        left: auto;
        right: 3%;
    }
`

const Thumbnail = styled.img`
    width: 3rem;
    border-radius: 4px;
`

const TotalText = styled.p`
    font-size: 1.4rem;
    color: var(--very-dark-blue);
`