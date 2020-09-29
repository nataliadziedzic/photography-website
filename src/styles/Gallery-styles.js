import styled from "styled-components";
import { Name } from "../styles/HomePage-style";
import gallery from "../assets/img/background-gallery.jpg";

export const GalleryWrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${gallery});
`
export const ImagesContainer = styled.div`
    display: grid;
    margin-top: 70px;
    align-items: center;
    transition: .8s ease-out;
    @media only screen and (orientation: landscape){
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        margin-top: 0;
        grid-auto-flow: column;
        grid-template-rows: 50vh 50vh;
        grid-template-columns: repeat(12,50%);
    }
    
`
export const Image1 = styled.img`
    width: 100%;
    grid-row: 1;
    grid-column: 1;
    @media only screen and (orientation: landscape){
        grid-row: 1/3;
        grid-column: 1/2;
        justify-self: start;
        width: 80%;
        margin: 0 0 90px 15px;
    }
`
export const Image2 = styled.img`
    width: 100%;
    grid-row: 2;
    grid-column: 2;
    @media only screen and (orientation: landscape){
        grid-row: 2;
        grid-column: 2/3;
        justify-self: start;
        align-self: end;
        width: 60%;
        margin-left: -40px;
        padding-bottom: 10px;
    }
`
export const Image3 = styled.img`
    width: 100%;    
    grid-row: 3;
    grid-column: 1;
    @media only screen and (orientation: landscape){
        grid-row: 1;
        grid-column: 2/3;
        justify-self: end;
        width: 80%;        
    }
`
export const Image4 = styled.img`
    width: 100%;
    grid-row: 4;
    grid-column: 2;
    @media only screen and (orientation: landscape){
        grid-row: 1;
        grid-column: 3/4;
        justify-self: center;
        align-self: start;
        width: 70%;
    }
    @media only screen and (orientation: landscape) and (min-width: 1024px){
        align-self: center;
        justify-self: end; 
    }
    @media only screen and (orientation: landscape) and (min-width: 1400px){
        align-self: start;
        width: 60%;
        margin-top: 20px; 
    }

`
export const Image5 = styled.img`
    width: 100%;
    grid-row: 5;
    grid-column: 1;
    @media only screen and (orientation: landscape){
        grid-row: 2/3;
        grid-column: 3/4;
        justify-self: start;
        width: 100%;
        margin-left: 115px;
    }
`
export const Image6 = styled.img`
    width: 100%;
    grid-row: 6;
    grid-column: 2;
    @media only screen and (orientation: landscape){
        grid-row: 1/3;
        grid-column: 4/5;
        justify-self: end;
        width: 60%;
    }
`
export const Image7 = styled.img`
    width: 100%; 
    grid-row: 7;
    grid-column: 1;
    @media only screen and (orientation: landscape){
        grid-row: 1;
        grid-column: 5/6;
        width: 90%; 
        justify-self: center;
        margin-top: 100px;
    }
`
export const Image8 = styled.img`
    width: 100%;
    grid-row: 8;
    grid-column: 2;
    @media only screen and (orientation: landscape){
        grid-row: 1/3;
        grid-column: 6/7;
        justify-self: end;
        width: 100%;
    }
`
export const Image9 = styled.img` 
    width: 100%;
    grid-row: 9;
    grid-column: 1;
    @media only screen and (orientation: landscape){
        grid-row: 1;
        grid-column: 7/8;
        justify-self: center;
        width: 80%;
    }
`
export const Image10 = styled.img`
    width: 100%;
    grid-row: 10;
    grid-column: 2;
    @media only screen and (orientation: landscape){
        grid-row: 1/3;
        grid-column: 8/9;
        justify-self: end;
        width: 90%;
    }
`
export const Image11 = styled.img`
    width: 100%;
    grid-row: 11;
    grid-column: 1;
    @media only screen and (orientation: landscape){
        grid-row: 1/3;
        grid-column: 9/10;
        justify-self: end;
        width: 60%;
    }
    @media only screen and (orientation: landscape) and (min-width: 1024px){
        margin-right: 50px;
    }
`
export const NameInGallery = styled(Name)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    @media only screen and (orientation: landscape){
        letter-spacing: 5px;
    }
    @media only screen and (min-width: 768px){
        letter-spacing: 15px;
    }
    @media only screen and (min-width: 1024px){
        letter-spacing: 20px;
    }
`
export const GoUp = styled.button`
    display: none;
    border-radius: 50%;
    padding: 5px 7px;
    margin: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    @media only screen and (min-width: 1024px){
        font-size: 25px;
    }
    
`
export const ImageBox = styled.div`
    display: none;
    width: 100%;
    height: 100vh;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000a1;
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    @keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
    }
`