import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import NavBurgerIcon from '../assets/icon-menu.svg';
import styled from 'styled-components';
import closeIcon from '../assets/icon-close.svg';
import ProfileIcon from '../assets/image-avatar.png';
import CartDialog from './CartDialog';


    const NavbarItem = (name, index) =>{
        return(
            <p className='ps-2 mb-0' style={{color: "var(--very-dark-blue)"}} key={index} >{name}</p>
        )
    }

    const NavbarItemMobile = (name, index) =>{
        return(
            <MobileNavLinks className='ps-2 mx-1' style={{color: "var(--very-dark-blue)"}} key={index} >{name}</MobileNavLinks>
        )
    }


    const Navbar = () => {
        const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];
        const [isMobile, setIsMobile] = useState(false);

        let [SideNavToggle, setSideNavToggle] = useState(false);
        const toggleMenu = () => {
            setSideNavToggle(!SideNavToggle);
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
                        <CartDialog/>
                        <ProfilePhoto src={ProfileIcon} alt='user profile mini photo' className='ms-4 pt-lg-2' />
                    </div>
                </nav>

                { SideNavToggle &&
                    <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                        <ModalStyle className='py-2 px-3'>
                            <div className=' mt-2 mb-4'>
                                <img onClick={toggleMenu} src={closeIcon} alt='navbar close button' aria-label='close button' style={{width: "1.2rem"}} className='ms-2' />
                            </div>
                            { links.map((title, index) => (
                                NavbarItemMobile(title, index)
                            ))}
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

export const OverlayStyle = styled.div`
    background-color: #4d4d4d85;
    height: 100%;
    top: 0;
    left: 0;
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
export const ModalStyle = styled.div`
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

const MobileNavLinks = styled.p`
    color: var(--very-dark-blue);
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: capitalize;
`