import styled from "styled-components";
import courses from "../assets/img/courses-top-picture.jpg";

export const ProductsWrapper = styled.div`
        margin-top: 100px;
        @media only screen and (orientation: landscape){
            margin-top: 200px;
        }
        @media only screen and (orientation: landscape) and (min-width: 1200px){
            margin-top: 250px;
        }
        @media only screen and (min-width: 1200px){
        display: grid;
        grid-template-columns: 20% 1fr;
        grid-row-gap: 50px;
        }
`
export const Icon = styled.img`
    position: absolute;
    top:0;
    left: 0;
    width: 50%;
    @media only screen and (orientation: landscape) {
        width: 30%;
    }
`
export const StartWrapper = styled.div`
    height: 100vh;
    width: 100%;
    i{
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 60px;
        text-shadow: 0 -60px white;
        @media only screen and (orientation: landscape) and (max-height: 380px){
            top: 105%;
        }
        @media only screen and (min-width: 768px){
            font-size: 80px;
        }
    }
`
export const Start = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    padding: 0 25px;
    font-size: 45px;
    font-weight: 600;
    letter-spacing: 5px;
    @media only screen and (min-width: 768px){
        font-size: 70px;
        padding: 0 45px;
    }
    @media only screen and (orientation: landscape){
        transform: translate(-50%, 0)
    }
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    @media only screen and (min-width: 1200px){
        padding-top: 0;
        grid-column: 2;
    }
`
export const ProductName = styled.h2`
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    @media only screen and (min-width: 768px){
        font-size: 40px;
        margin-bottom: 45px;
    }
    @media only screen and (min-width: 1024px){
        font-size: 45px;
    }
`
export const ProductPhoto = styled.img`
    width: 80%;
    margin: 0 auto;
    @media only screen and (min-width: 768px){
        width: 70%;
    }
    @media only screen and (orientation: landscape){
        width: 50%
    }
`
export const ProductDetails = styled.p`
margin: 25px auto;
font-size: 16px;
line-height: 20px;
text-align: center;
padding: 0px 10%;
@media only screen and (orientation: landscape){
    padding: 0 25%;
}
@media only screen and (min-width: 768px) and (orientation: portrait){
    font-size: 25px;
    line-height: 30px;
    margin-top: 45px;
}
@media only screen and (min-width: 1024px){
    font-size: 25px;
    line-height: 45px;
    margin: 45px auto;
}
@media only screen and (min-width: 1400px){
    font-size: 30px;
}

`
export const ProductButton = styled.button`
    position: relative;
    width: 200px;
    margin: 20px auto;
    padding: 7px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.buttonBackground};
    border: none;
    @media only screen and (min-width: 768px) and (orientation: portrait){
        font-size: 20px;
        width: 230px;
        margin-bottom: 100px;
    }
    @media only screen and (min-width: 1024px){
        font-size: 25px;
        width: 260px;
    }
&::after{
content: "";
position: absolute;
left: 10px;
top: -10px;
width: 100%;
height: 100%;
border: 3px solid black;
transition: .3s;
}
&:hover::after{
    top: -3px;
    left: -3px;
}
`
export const Aside = styled.aside`
    display: none;
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    cursor: pointer;
    @media only screen and (min-width: 1200px){
        display: block;
    }
`
export const AsideBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${courses});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
`
export const AsideText = styled.h2`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 25px));
    z-index:3;
    writing-mode: vertical-rl; 
    text-orientation: upright;
    font-size: 38px;
    font-weight: 600;
    letter-spacing: 50px;
    cursor: pointer;
    @media only screen and (min-width: 1200px){
    display: block;
}
`