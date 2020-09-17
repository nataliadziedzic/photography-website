import styled from "styled-components";
import photographer from "../assets/img/author.jpg";

const homeImg = photographer;

export const Menu = styled.div`
    position: fixed;
    z-index: 100;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.colors.mainBackground};
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
    background-image: url(${homeImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Image = styled.div`
    background-image: url(${homeImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    transform: scale(0.65, 0.7);
`
export const TableOfContent = styled.div`
    grid-column: 2;
    height: 100vh;
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