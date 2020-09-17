import styled from "styled-components";
import photographer from "../assets/img/author.jpg";

export const Home = styled.div`
    background-image: url(${photographer});
    height: 100vh;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const InfoContainer = styled.div`
    position: fixed;
    top: 100%;
    left: 0;
    transform: translateY(-100%);
    width: 100vw;
    padding: 0 20px;
    text-align: center;
    text-shadow: 1px 1px black;
    background-color: rgba(0,0,0,0.8);
    @media only screen and (min-width: 1024px) and (orientation: landscape) {
        width: auto;
        padding: 0;
        transform: translateY(0);
        top: 25%;
        left: 3%;
        background-color: transparent;
    }
`
export const Name = styled.h1`
    font-weight: 600;
    font-style: italic;
    text-transform: uppercase;
    padding: 10px 0;
    margin: 10px 0;
    font-size: 33px;
    @media only screen and (min-width: 768px){
        font-size: 37px;
    }
    @media only screen and (min-width: 1024px) and (orientation: landscape){
        font-size: 45px;
        text-align: left;
        padding: 0;
    }
`
export const Profession = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 17px;
    @media only screen and (min-width: 768px){
        font-size: 19px;
    }
    @media only screen and (min-width: 1024px) and (orientation: landscape){
        font-size: 20px;
        text-align: left;
    }

`
export const Paragraph = styled.p`
    margin: 20px auto;
    font-size: 15px;
    line-height: 20px;
    max-width: 585px;
    @media only screen and (orientation: landscape){
        margin: 15px auto;
    }
    @media only screen and (min-width: 768px){
        font-size: 17px;
    }
    @media only screen and (min-width: 1024px) and (orientation: landscape){
    margin: 20px 0;
    max-width: 380px;
    text-align: left;
    font-size: 18px;
}
`
export const HomeButton = styled.button`
    width: 100%;
    height: 45px;
    margin: 10px 0;
    font-weight: 700;
    transition: .4s;
    &:hover{
        background-color: black;
    }
`