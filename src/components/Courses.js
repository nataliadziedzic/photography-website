import React from 'react';
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { CoursesWrapper, TopSection, H1, CoursesSection, Course, Clip, Image, Title, Description, FlipContainer, SignButton, SignIn, H2 } from "../styles/Courses-styles";
import Sydney from "../assets/img/sydney2.jpg";
import communication from "../assets/img/communication.jpg";
import business from "../assets/img/business.jpg";
import clip from "../assets/img/clip-courses.png";
import { swapPlaces } from "../Animations/courseAnimation";

function Courses() {

    const handleReverse = (imageNumber) => {
        if (imageNumber === 1) {
            const image = document.querySelector("#firstCourse");
            image.style.transform = "rotateY(180deg)";
            swapPlaces("#signInBox1", "#courseTitle1")
        }
        else if (imageNumber === 2) {
            const image = document.querySelector("#secondCourse");
            image.style.transform = "rotateY(180deg)";
            swapPlaces("#signInBox2", "#courseTitle2")
        }
        else if (imageNumber === 3) {
            const image = document.querySelector("#thirdCourse");
            image.style.transform = "rotateY(180deg)";
            swapPlaces("#signInBox3", "#courseTitle3")
        }
    }

    return (
        <CoursesWrapper>
            <Navigation />
            <TopSection><H1>Current Courses</H1></TopSection>
            <CoursesSection>
                <Course onClick={() => handleReverse(1)}>
                    <Clip src={clip} />
                    <FlipContainer id="firstCourse">
                        <Image style={{ background: `black url(${Sydney}) no-repeat scroll center`, backgroundSize: "cover" }} />
                        <Description>You will know how to photograph in different scenarios like family portraits, landscapes, product, and much more. We'll talk about how the camera truly works, so you can take better photos using manual settings.</Description>
                        <SignIn id="signInBox1">
                            <Link to="/contact"><SignButton>CONTACT<i class="fas fa-arrow-down"></i></SignButton></Link>
                            <H2>ME FOR MORE DETAILS</H2>
                        </SignIn>
                    </FlipContainer>
                    <Title id="courseTitle1">30-Day Photography Course in Sydney</Title>
                </Course>
                <Course onClick={() => handleReverse(2)}>
                    <Clip src={clip} />
                    <FlipContainer id="secondCourse">
                        <Image style={{ background: `black url(${communication}) no-repeat scroll top`, backgroundSize: "cover" }} />
                        <Description>Successful photographers know that effective communication is the key to capturing exceptional images and not only. It is also the key to insuring that your clients are pleased with the final outcome.</Description>
                        <SignIn id="signInBox2">
                            <Link to="/contact"><SignButton>CONTACT<i class="fas fa-arrow-down"></i></SignButton></Link>                            <H2>ME FOR MORE DETAILS</H2>
                        </SignIn>
                    </FlipContainer>
                    <Title id="courseTitle2">Photographer and Client - Better Communication</Title>
                </Course>
                <Course onClick={() => handleReverse(3)} >
                    <Clip src={clip} />
                    <FlipContainer id="thirdCourse">
                        <Image id="thirdCourse" style={{ background: `black url(${business}) no-repeat scroll top`, backgroundSize: "cover" }} />
                        <Description>You will learn business basics, how to set up a proper business with accounting, insurance and tax tips, best practices for each step - from booking the client to final delivery and much more!</Description>
                        <SignIn id="signInBox3">
                            <Link to="/contact"><SignButton>CONTACT<i class="fas fa-arrow-down"></i></SignButton></Link>                            <H2>ME FOR MORE DETAILS</H2>
                        </SignIn>
                    </FlipContainer>
                    <Title id="courseTitle3">How to Start a Successful Photography Business</Title>
                </Course>
            </CoursesSection>
        </CoursesWrapper>
    )
}
export default Courses