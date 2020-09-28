import styled from "styled-components";
import topPicture from "../assets/img/courses-top-picture.jpg";
export const CoursesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000; 
    width: 100%;
    overflow: hidden;
`
export const TopSection = styled.div`
    height: 100vh;
    margin-bottom: 200px;
    background: url(${topPicture});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`
export const H1 = styled.h1`
    position: absolute;
    top: 20%;
    left: 5%;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 40px;
    font-weight: 600;
    text-shadow: 5px 20px 0px black;
    @media only screen and (min-width: 768px){
        font-size: 55px;
        top: 27%;
        left: 3%;
    }
    @media only screen and (min-width: 1024px){
        font-size: 60px;
    }
    @media only screen and (min-width: 1024px) and (orientation: landscape){
        top: 22%;
        left: 15%;
    }
    @media only screen and (min-width: 1200px) and (orientation: landscape){
        left: 19%;
    }
    @media only screen and (min-width: 1400px) and (orientation: landscape){
        top: 33%;
        left: 19%;
        font-size: 65px;
    }
`
export const CoursesSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 20px 50px;
`
export const Course = styled.div`
    height: 500px;
    width: 450px;
    padding: 20px;
    margin-top: 120px;
    border: 1px solid white;
    position: relative;
    cursor: pointer;
    @media only screen and (min-width: 768px){
        height: 670px;
    }
`
export const FlipContainer = styled.div`
position: relative;
height: 80%;
transform-style: preserve-3d;
transition: 1s ease-in-out;
`
export const Clip = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -84%) rotate(-15deg);
`
export const Image = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
`
export const Description = styled.p`
height: 100%;
width: 90%;
position: absolute;
top: 40%;
left: 50%;
font-size: 15px;
letter-spacing: 2px;
text-align: center;
backface-visibility: hidden;
transform: translateX(-50%) rotateY(180deg);
@media only screen and (min-width: 375px){
    font-size: 17px;
}
@media only screen and (min-width: 768px){
    font-size: 20px;
    top: 50%;
}
`
export const Title = styled.h2`
position: absolute;
top: 100%;
left: 0;
transform: translateY(-90%);
height: 20%;
padding: 5px 15px;
text-align: center;
letter-spacing: 2px;
font-size: 16px;
text-transform: uppercase;
font-weight: 600;
@media only screen and (min-width: 375px){
    font-size: 18px;
}
@media only screen and (min-width: 768px){
    font-size: 24px;
    padding: 10px 20px;
}
`
export const SignIn = styled.div`   
    position: absolute;
    top: 10%;
    left: 50%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform: translateX(-50%) rotateY(180deg);
`
export const SignButton = styled.button`
    position: relative;
    padding: 10px;
    margin-left: 10px;
    font-size: 15px;
    @media only screen and (min-width: 768px){
        font-size: 18px;
    }
    i{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-100%, -100%) rotate(-45deg);
    }
`
export const H2 = styled.h2`
    font-size: 15px;
    margin: 0 0 0 10px;
    text-align: center;
    @media only screen and (min-width: 375px){
        font-size: 18px;
    }
`