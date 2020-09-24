import styled from "styled-components";
import sideImage from "../assets/img/sideImage.jpg"

export const Wrapper = styled.div`
    height: 100vh;
    overflow: hidden;
    background: rgb(78,60,61);
    background: linear-gradient(0deg, rgba(78,60,61,1) 0%, rgba(61,78,60,1) 100%);  
`
export const ContactBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 80vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    border: 1px solid black;
    @media only screen and (orientation: landscape){
        width: 60vw;
        height: 90vh;
        flex-direction: row;
    }
    @media only screen and (orientation: landscape) and (min-width: 1024px){
        width: 85vw;
    }
    @media only screen and (orientation: landscape) and (min-width: 1400px){
        width: 60vw;
    }
`
export const Form = styled.form`
    width: 100%;
    height: 50%;
    max-width: 800px;
    text-align: center;
    margin: 35px auto; 
    overflow: auto; 
    display: flex;
    flex-direction: column;
    @media only screen and (orientation: landscape){
        width: 50%;
        height: auto;
    }
`
export const Intro = styled.h1`
    margin-bottom: 50px;
    font-family: 'Lato';
    font-size: 26px;
`
export const Error = styled.div`
    color: red;
    font-size: 10px;
    padding: 5px;
    margin-top: -40px;    
    margin-bottom: 18px;    
`
export const Input = styled.input`
height: 40px;
min-height: 25px;
width: 70%;
margin: 0 auto;
margin-bottom: 50px;
background-color: transparent;
border: none;
border-bottom: 2px solid #ccc;
font-size: 15px;
`
export const Message = styled.textarea`
    height: 40%;
    min-height: 100px;
    width: 70%;
    margin: 0 auto;
    padding: 10px 20px; 
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
`
export const Submit = styled.button`
    width: 50%;
    max-width: 200px;
    height: 45px;
    padding: 10px 0;
    margin: 40px auto 0;
    background-color: #711d18;
    border: none;
    border-radius: 12px;
    @media only screen and (orientation: landscape){
        width: 60%;
    }
`
export const SideImage = styled.div`
    background: url(${sideImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50%;
    @media only screen and (orientation: landscape){
        width: 50%;
        height: auto;
    }
`