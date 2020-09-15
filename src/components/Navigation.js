import React from 'react';
import { MenuBtn, Stripe } from "../styles/Navigation-style";

function Navigation() {
    const handleMenu = () => {
        console.log("hello")
    }
    return (
        <MenuBtn onClick={handleMenu}>
            MENU
            <Stripe />
            <Stripe />
        </MenuBtn>
    )
}
export default Navigation