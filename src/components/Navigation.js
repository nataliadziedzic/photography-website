import React from 'react';
import { MenuBtn, Stripe, Menu, Preview, Image, TableOfContent, Content } from "../styles/Navigation-style";
import Media from 'react-media';
import Icons from "../styles/Icons"
import { Link } from "react-router-dom";

function Navigation() {
    const showMenu = () => {
        document.querySelector(".wrapper").style.display = "inline-block";
        const stripes = document.querySelectorAll(".stripe")
        stripes.forEach(stripe => stripe.style.display = "none")
    }
    const hideMenu = () => {
        document.querySelector(".wrapper").style.display = "none";
        const stripes = document.querySelectorAll(".stripe")
        stripes.forEach(stripe => stripe.style.display = "block")
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
                                <MenuBtn close onClick={hideMenu}>CLOSE
                                 <Stripe close />
                                </MenuBtn>
                                <Preview>
                                    <Image />
                                </Preview>
                                <TableOfContent>
                                    <Content>
                                        <Link to="/"><span onClick={hideMenu}>Home</span></Link>
                                        <Link to="/gallery"><span onClick={hideMenu}>Gallery</span></Link>
                                        <Link to="/products"><span onClick={hideMenu}>Products</span></Link>
                                        <Link to="/courses"><span onClick={hideMenu}>Courses</span></Link>
                                        <Link to="/contact"><span onClick={hideMenu}>Contact</span></Link>
                                        <Icons >
                                            <i className="fab fa-facebook-f"></i>
                                            <i className="fab fa-instagram"></i>
                                            <Link to="/contact"><i className="far fa-envelope"></i></Link>
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
                                        <Link to="/"><span onClick={hideMenu}>Home</span></Link>
                                        <Link to="/gallery"><span onClick={hideMenu}>Gallery</span></Link>
                                        <Link to="/products"><span onClick={hideMenu}>Products</span></Link>
                                        <Link to="/courses"><span onClick={hideMenu}>Courses</span></Link>
                                        <Link to="/contact"><span onClick={hideMenu}>Contact</span></Link>
                                        <Icons>
                                            <i className="fab fa-facebook-f"></i>
                                            <i className="fab fa-instagram"></i>
                                            <Link to="/contact"><i className="far fa-envelope"></i></Link>
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