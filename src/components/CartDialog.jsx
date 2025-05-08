import { useState } from "react";
import styled from "styled-components";
import CartIcon from '../assets/icon-cart.svg';
import closeIcon from '../assets/icon-close.svg';
import { OverlayStyle } from "./Navbar";
import { Button } from 'react-bootstrap';
import { useShopStore } from "../store/store";
import DeleteIcon from "../assets/icon-delete.svg";
import { FaCreditCard } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function CartDialog() {

    const [isCartToggle, setIsCartToggle] = useState(false);
    const cart = useShopStore((state) => state.cart);

    const ToggleCart = () => setIsCartToggle(!isCartToggle);

    const Checkout = () => {
        console.log("Checkout");
        ToggleCart();
    };

    const TotalAmountPerProd = (price, amount) => {
        return price * amount;
    }

    return (
        <>
            {/* <img onClick={ToggleCart} src={CartIcon} style={{margin: "auto"}} alt='shopping cart button' /> */}
            <FaCartShopping onClick={ToggleCart} className='me-2' style={{ fontSize: "1.4rem", color: "#69707d", marginTop: "auto", marginBottom: "auto"}}/>
            { isCartToggle &&
                <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                    <CartDialogStyle className='py-2 px-3'>
                        <div className="d-flex align-items-center justify-content-between">
                            <p style={{fontWeight: "bold", color: "var(--very-dark-blue)", fontSize: "1.2rem",}} className="mb-0">Cart</p>
                            <img onClick={ToggleCart} src={closeIcon} alt='navbar close button' aria-label='close button' style={{width: "1.2rem"}} className='ms-2' />
                        </div>
                        <div style={{minHeight: "5rem",}}>
                            <hr className="my-2 mb-3" />
                            { cart && cart.length > 0
                                ? cart.map((cart, index) => (
                                    <div key={index} className="d-flex align-items-center mb-3" >
                                        {cart.photos && <Thumbnail src={cart.photos[0]} alt="cart shoe profile photo" />}
                                        <div className="ms-2" style={{width: "100%"}}>
                                            <p className="mb-0" style={{color: "var(--dark-grayish-blue)"}}>{cart.name}</p>
                                            <p className="mb-0" style={{color: "var(--dark-grayish-blue)"}}>{cart.price} x {cart.amount} = <b>$ {TotalAmountPerProd(cart.price, cart.amount)}</b></p>
                                        </div>
                                        <img src={DeleteIcon} alt="delete icon for product: " />
                                    </div>
                                ))
                                : <p className="text-center">Cart is empty...</p>
                            }

                        </div>
                        <Button onClick={Checkout} variant='primary' style={{width: '100%', padding: "0.8rem 0", fontWeight: "bold",color: "var(--very-dark-blue)"}} className='my-2 btn-orange' >
                            <FaCreditCard className='me-2' />
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

const Thumbnail = styled.img`
    width: 3rem;
    border-radius: 4px;
`