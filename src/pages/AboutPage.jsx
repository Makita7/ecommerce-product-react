import styled from "styled-components"
import { Title } from "../pages/ShoePage"
import img from "../assets/about-bg.jpg"

export default function AboutPage() {
    return (
        <DivBg className="p-4 p-md-5">
            <InnerContainer>
                <Title style={{fontSize: "1.5rem"}} className="mb-2 px-3" >Welcome to Stride & Style,</Title>
                <AboutText className="text-justify"> your go-to destination for high-quality, stylish, and performance-driven sneakers. Founded with a passion for movement and design, our mission is to bring you footwear that feels as good as it looks—whether you're hitting the pavement, heading to the office, or just living life on the go.

    We carefully curate a collection of unisex, men's, and women's sneakers that balance function, fashion, and affordability. Every pair we offer is chosen for its comfort, durability, and modern style—because we believe your shoes should keep up with your lifestyle.

    Our team is made up of sneaker enthusiasts, designers, and everyday athletes who believe that great shoes can elevate not just your outfit, but your entire day. At Stride & Style, we’re committed to great design, eco-conscious packaging, and exceptional customer service.

    Let your next step be your best one—shop with us and find your perfect fit.</AboutText>
            </InnerContainer>
        </DivBg>
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

export const DivBg = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
`

export const InnerContainer = styled.div`
    @media (min-width: ${device.lg}){
        width: 40%;
        margin-left: 35%;
    }
`

export const AboutText = styled.p`
    background-color: #ffffffc4;
    padding: 1rem;
    border-radius: 8px;
`