import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import NavBurgerIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import ProfileIcon from '../assets/image-avatar.png';
import CartDialog from './CartDialog';


const Navbar = () => {
    const links = [
        { name:'Collections', path:'/' },
        { name:'Men', path:'/men' },
        { name:'Women', path:'/women' },
        { name:'About', path:'/about' },
        { name:'Contact', path:'/contact' }
    ];
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

    const NavbarItem = (link, index) =>{
        return(
            <Link to={link.path || '/'} key={index} className='text-decoration-none'>
                <p className='ps-2 mb-0' style={{color: "var(--very-dark-blue)"}} key={index} >{link.name}</p>
            </Link>
        )
    }

    const NavbarItemMobile = (link, index) =>{
        return(
            <Link to={link.path || '/'} key={index} onClick={toggleMenu} className='text-decoration-none'>
                <MobileNavLinks className='ps-2 mx-1' style={{color: "var(--very-dark-blue)"}} >{link.name}</MobileNavLinks>
            </Link>
        )
    }

        return (
            <>
                <nav className='d-flex align-items-center justify-content-between navbar mx-4 my-2 mx-lg-0 my-lg-0'>
                    <div className='d-flex align-items-center'>
                        { isMobile && <MenuIcon onClick={toggleMenu} src={NavBurgerIcon} alt='navigation menu button' className='me-2' /> }

                        <Link to='/' className='text-decoration-none'>
                            <img src={Logo} alt='sneakers store logo' className='ms-2 m-lg-0' />
                        </Link>
                        <div className='d-flex align-items-center ms-2'>
                            { !isMobile && links.map((link, index) => (
                                NavbarItem(link, index)
                            ))}
                        </div>
                    </div>

                    <div className='d-flex align-items-end'>
                        <CartDialog/>
                        <ProfilePhoto src={ProfileIcon} alt='user profile mini photo' className='ms-2 pt-lg-2' />
                    </div>
                </nav>

                { SideNavToggle &&
                    <OverlayStyle className={`inset-0 d-flex justify-content-center align-items-center`}>
                        <ModalStyle className='py-2 px-3'>
                            <div className=' mt-2 mb-4'>
                                <img onClick={toggleMenu} src={closeIcon} alt='navbar close button' aria-label='close button' style={{width: "1.2rem"}} className='ms-2' />
                            </div>
                            { links.map((link, index) => (
                                NavbarItemMobile(link, index)
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