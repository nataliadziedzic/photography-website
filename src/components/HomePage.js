import React from 'react';
import { Link } from "react-router-dom";
import { Home, InfoContainer, Name, HomeButton, Paragraph, Profession, Icons } from "../styles/HomePage-style";
import Navigation from "./Navigation";
import Media from 'react-media';

function HomePage() {
    return (
        <Media query="(min-width: 1024px) and (orientation: landscape)" >
            {matches => (
                matches ? <Home>
                    <Navigation />
                    <InfoContainer>
                        <Name>Yasin Clements</Name>
                        <Profession>photographer // teacher</Profession>
                        <Paragraph>Photography is my passion. I want to share it with everyone because everyone can see the world through different eyes.</Paragraph>
                        <Link to="/products"><HomeButton>PRODUCTS</HomeButton></Link>
                        <Link to="/courses"><HomeButton>COURSES</HomeButton></Link>
                        <Link to="/gallery"> <HomeButton>GALLERY</HomeButton></Link>
                    </InfoContainer>
                    <Icons>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <Link to="/contact"><i className="far fa-envelope"></i></Link>
                    </Icons>
                </Home > :
                    <Home>
                        <Navigation />
                        <InfoContainer>
                            <Name>Yasin Clements</Name>
                            <Profession>photographer // teacher</Profession>
                            <Paragraph>Photography is my passion. I want to share it with everyone because everyone can see the world through different eyes.</Paragraph>
                            <Icons>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <Link to="/contact"><i class="far fa-envelope"></i></Link>
                            </Icons>
                        </InfoContainer>

                    </Home >
            )}
        </ Media>
    )
}
export default HomePage