import styled from "styled-components"

export const ProductsWrapper = styled.div`
        overflow: auto;
        padding-bottom: 5%;
`
export const Icon = styled.img`
    width: 50%;
    @media only screen and (orientation: landscape) {
        width: 30%;
    }
`
export const StartWrapper = styled.div`
    height: 100vh;
    width: 100%;
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
`
export const ProductName = styled.h2`
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    font-size: 25px;
    @media only screen and (min-width: 768px){
        font-size: 35px;
        margin-bottom: 45px;
    }
    @media only screen and (min-width: 1024px){
        font-size: 45px;
    }
`
export const ProductPhoto = styled.img`
    width: 80%;
    margin: 0 auto;
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
    font-size: 30px;
    line-height: 45px;
    margin: 45px auto;
}
@media only screen and (min-width: 1200px){
    padding: 0 25%;
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