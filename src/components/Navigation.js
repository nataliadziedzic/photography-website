import React, { useEffect, useState } from 'react';
import { MenuBtn, Stripe, Menu, Preview, Image, BackgroundContainer, TableOfContent, Content, MyNavLink } from "../styles/Navigation-style";
import Media from 'react-media';
import Icons from "../styles/Icons";
import home from "../assets/img/home.jpg";
import gallery from "../assets/img/gallery.jpg";
import products from "../assets/img/products.jpg";
import courses from "../assets/img/courses.jpg";
import contact from "../assets/img/contact.jpg";
import { displayingMenu, hidingMenu, photoSwapping } from '../Animations/NavigationAnimations';

function Navigation() {
    const [photo, setPhoto] = useState(home)
    const setDefaultPhoto = () => {
        const active = document.querySelector(".active").textContent;
        if (active === "Home") setPhoto(home)
        else if (active === "Gallery") setPhoto(gallery)
        else if (active === "Products") setPhoto(products)
        else if (active === "Courses") setPhoto(courses)
        else if (active === "Contact") setPhoto(contact)
    }
    const swapPhoto = (link) => {
        photoSwapping()
        setTimeout(() => {
            if (link.textContent === "Home") setPhoto(home)
            else if (link.textContent === "Gallery") setPhoto(gallery)
            else if (link.textContent === "Products") setPhoto(products)
            else if (link.textContent === "Courses") setPhoto(courses)
            else if (link.textContent === "Contact") setPhoto(contact)
        }, 250)
    }
    const handlePhoto = () => {
        const links = document.querySelectorAll('span');
        const preview = document.querySelector('#preview');
        const sidePhoto = document.querySelector('#sidePhoto');
        if (preview !== null) {
            setTimeout(() => {
                preview.style.background = `black url(${photo}) no-repeat scroll center`;
                preview.style.backgroundSize = "cover";
                sidePhoto.style.background = `black url(${photo}) no-repeat scroll center`;
                sidePhoto.style.backgroundSize = "cover";
            }, 200)

            links.forEach(link => link.addEventListener("mouseover", () => swapPhoto(link)))
        }
    }
    useEffect(handlePhoto);
    const showMenu = () => {
        document.querySelector(".wrapper").style.display = "inline-block";
        const stripes = document.querySelectorAll(".stripe")
        stripes.forEach(stripe => stripe.style.display = "none");
        setDefaultPhoto()
        displayingMenu()
    }
    const hideMenu = () => {
        hidingMenu()
        const stripes = document.querySelectorAll(".stripe");
        stripes.forEach(stripe => stripe.style.display = "block");
        setTimeout(() => {
            document.querySelector(".wrapper").style.display = "none";
        }, 1000)
    }
    return (
        <Media query="(orientation: landscape)">
            {matches => (
                matches ?
                    <>
                        <MenuBtn onClick={showMenu}>
                            MENU
                            <Stripe className="stripe" />
                            <Stripe className="stripe" />
                        </MenuBtn>
                        <div className="wrapper" style={{ height: "100vh", display: "none" }}>
                            <Menu style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                <MenuBtn id="close" close onClick={hideMenu}>CLOSE
                                 <Stripe close />
                                </MenuBtn>
                                <BackgroundContainer id="background">
                                    <Preview id="preview">
                                        <Image id="sidePhoto" />
                                    </Preview>
                                </BackgroundContainer>
                                <TableOfContent id="content">
                                    <Content>
                                        <MyNavLink exact to="/"><span onClick={hideMenu}>Home</span></MyNavLink>
                                        <MyNavLink to="/gallery"><span onClick={hideMenu}>Gallery</span></MyNavLink>
                                        <MyNavLink to="/products"><span onClick={hideMenu}>Products</span></MyNavLink>
                                        <MyNavLink to="/courses"><span onClick={hideMenu}>Courses</span></MyNavLink>
                                        <MyNavLink to="/contact"><span onClick={hideMenu}>Contact</span></MyNavLink>
                                        <Icons >
                                            <i className="fab fa-facebook-f"></i>
                                            <i className="fab fa-instagram"></i>
                                            <MyNavLink style={{ margin: 0 }} to="/contact"><i className="far fa-envelope"></i></MyNavLink>
                                        </Icons>
                                    </Content>
                                </TableOfContent>
                            </Menu>
                        </div>
                    </> :
                    <>
                        <MenuBtn onClick={showMenu}>
                            MENU
                             <Stripe className="stripe" />
                            <Stripe className="stripe" />
                        </MenuBtn>
                        <div className="wrapper" style={{ height: "100vh", display: "none" }}>
                            <Menu>
                                <MenuBtn close onClick={hideMenu}>CLOSE
                   <Stripe close />
                                </MenuBtn>
                                <TableOfContent>
                                    <Content>
                                        <MyNavLink to="/"><span onClick={hideMenu}>Home</span></MyNavLink>
                                        <MyNavLink to="/gallery"><span onClick={hideMenu}>Gallery</span></MyNavLink>
                                        <MyNavLink to="/products"><span onClick={hideMenu}>Products</span></MyNavLink>
                                        <MyNavLink to="/courses"><span onClick={hideMenu}>Courses</span></MyNavLink>
                                        <MyNavLink to="/contact"><span onClick={hideMenu}>Contact</span></MyNavLink>
                                        <Icons>
                                            <i className="fab fa-facebook-f"></i>
                                            <i className="fab fa-instagram"></i>
                                            <MyNavLink style={{ margin: 0 }} to="/contact"><i className="far fa-envelope"></i></MyNavLink>
                                        </Icons>
                                    </Content>
                                </TableOfContent>
                            </Menu>
                        </div>
                    </>
            )}
        </Media>
    )
}
export default Navigation