import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = styled.div`
    position: fixed;
    z-index: 100;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`
export const MenuBtn = styled.button`
    position: fixed;
    z-index: 101;
    top: 0;
    right: ${props => props.close ? "100%" : "0"};
    transform: ${props => props.close ? "translateX(200%)" : ""};
    border: none;
    margin: 35px;
    font-size: 15px;
    letter-spacing: 3px;
    overflow: hidden;
    &:hover{
        div{
        transform: translateX(0);
        }
    }
`
export const Stripe = styled.div`
    width: 100%;
    border-bottom: 2px solid white;
    margin-top: 5px;
    transform:  ${props => props.close ? "translateX(-100%)" : "translateX(100%)"};
    transition: .4s;
`
export const Preview = styled.div`
    grid-column: 1;
    height: 100vh;
    position: relative;
`
export const Image = styled.div`
    position: absolute;
    height: 75%;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const BackgroundContainer = styled.div`
    background-color: ${props => props.theme.colors.mainBackground};
`
export const TableOfContent = styled.div`
    grid-column: 2;
    height: 100vh;
    background-color: ${props => props.theme.colors.mainBackground};
`
export const Content = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
      margin: 10px;
        @media only screen and (min-width: 768px) {
            margin: 20px;
        }
    }
    span{
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 30px;
        &:hover{
            color: ${props => props.theme.colors.fontHover};
            font-style: italic;
        }
        @media only screen and (orientation: landscape) {
            font-size: 20px;
        }
        @media only screen and (min-width: 768px) {
            font-size: 35px;
        }
    }
`
export const MyNavLink = styled(NavLink)`
    &.active{
        span{
            font-style: italic;
            color: ${props => props.theme.colors.fontHover};
        }
    }
`