import React from 'react';
import { ProductsWrapper, Icon, Aside, AsideBackground, AsideText, Product, StartWrapper, Start, ProductPhoto, ProductName, ProductDetails, ProductButton } from "../styles/Products-styles";
import Navigation from "../components/Navigation";
import outfits from "../assets/img/outfits.jpg";
import canon from "../assets/img/canon.jpg";
import tripod from "../assets/img/tripod.jpg";
import icon from "../assets/img/undraw_camera.png";
import { Link } from "react-router-dom";

function Products() {
    const scrollDown = () => {
        document.body.style.overflow = "hidden"
        setTimeout(() => {
            const firstProduct = document.getElementById("first")
            firstProduct.scrollIntoView()
            document.body.style.overflow = "auto"
            document.body.style.overflowX = "hidden"
        }, 2000)
    }
    scrollDown()
    return (
        <>
            <Navigation />
            <Icon src={icon} />
            <StartWrapper>
                <Start>Get ready for a new journey!</Start>
                <i class="fas fa-chevron-down"></i>
            </StartWrapper>
            <ProductsWrapper>
                <Aside>
                    <Link to="/courses">
                        <AsideBackground />
                        <AsideText>COURSES</AsideText>
                    </Link>
                </Aside>
                <Product id="first">
                    <ProductName>Canon EOS Rebel T100</ProductName>
                    <ProductPhoto src={canon} />
                    <ProductDetails>This is the camera I started with, so I can absolutely recommend it for photography newbies. By buying it through my page you will receive 20% discount!</ProductDetails>
                    <ProductButton>Buy</ProductButton>
                </Product>
                <Product>
                    <ProductName>Neewer Carbon Fiber 63” Tripod</ProductName>
                    <ProductPhoto src={tripod} />
                    <ProductDetails>Prevent camera movement and provide stability. Tripods are important for getting sharp images and you should not get the random one. You can buy this one via my page and if you need any advice or any other tripod - don't hesitate to contact me!</ProductDetails>
                    <ProductButton>Buy</ProductButton>
                </Product>
                <Product>
                    <ProductName>Outfit of the day!</ProductName>
                    <ProductPhoto src={outfits} />
                    <ProductDetails>If you want to have a personalized outfit for your upcoming session go ahead and contact me! I am sure that you and I along with my team we'll figure something out ;)</ProductDetails>
                    <ProductButton>Buy</ProductButton>
                </Product>
            </ProductsWrapper>
        </>
    )
}
export default Products