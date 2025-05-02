import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import ProfileIcon from '../assets/image-avatar.png';
import CartIcon from '../assets/icon-cart.svg';
import NavBurgerIcon from '../assets/icon-menu.svg';
import styled from 'styled-components';

    const NavbarItem = (name, index) =>{
        return(
            <p className='ps-2 mb-0' key={index} >{name}</p>
        )
    }


    const Navbar = () => {
        const links = ['Collections', 'menubar', 'Women', 'About', 'Contact'];
        const [isMobile, setIsMobile] = useState(false);

        let [isCartToggle, setIsCartToggle] = useState(false);
        const toggleMenu = () => {
            setIsCartToggle(!isCartToggle);
            console.log(isCartToggle);
        }

        useEffect(() => {
            const checkScreen = () => {
                setIsMobile(window.innerWidth < 768);
            }
            checkScreen();
            window.addEventListener('resizes', checkScreen);

        }, []);

        return (
            <>
                <nav className='d-flex align-items-center justify-content-between navbar mx-4 my-2 mx-lg-0 my-lg-0'>
                    <div className='d-flex align-items-center'>
                        { isMobile && <MenuIcon onClick={toggleMenu} src={NavBurgerIcon} alt='navigation menu button' className='me-2' /> }

                        <img src={Logo} alt='sneakers store logo' className='ms-2 m-lg-0' />
                        <div className='d-flex align-items-center ms-2'>
                            { !isMobile && links.map((title, index) => (
                                NavbarItem(title, index)
                            ))}
                        </div>
                    </div>

                    <div className='d-flex align-items-end'>
                        <img src={CartIcon} alt='shopping cart button' />
                        <ProfilePhoto src={ProfileIcon} alt='user profile mini photo' className='ms-4 pt-lg-2' />
                    </div>
                </nav>

                { isCartToggle &&
                    <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                        <ModalStyle className='py-2 px-3'>
                            <div>
                                <button onClick={toggleMenu} type="button" class="btn-close" aria-label="Close"/>
                            </div>
                            hi there
                        </ModalStyle>
                    </OverlayStyle>
                }
            </>
        );
    };

    export default Navbar;


const MenuIcon = styled.img`
    width: 1.3rem;
`;

const ProfilePhoto = styled.img`
    width: 2rem;
    @media (min-width: 768px) {
        width: 2.5rem;
    }
`;

const OverlayStyle = styled.div`
    background-color: #4d4d4d85;
    height: 100%;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 1000;
`;

const ModalStyleCenter = styled.div`
    position: absolute;
    box-shadow: 0px 7px 8px #00000052;
    width: 80%;
    height: 50%;
    background: white;
    border-radius: 1rem;
`;
const ModalStyle = styled.div`
    position: absolute;
    box-shadow: 0px 7px 8px #00000052;
    width: 70%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
`;

const ModalActions = styled.div`
    margin: 1rem;
    bottom: 0;
    position: absolute;
    right: 0;
`