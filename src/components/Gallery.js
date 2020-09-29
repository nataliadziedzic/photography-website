import React from 'react';
import Navigation from "./Navigation";
import { MenuBtn as Close, Stripe } from "../styles/Navigation-style";
import { GalleryWrapper as Wrapper, ImagesContainer, NameInGallery, GoUp, ImageBox, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11 } from "../styles/Gallery-styles";
import japan from "../assets/img/japan.jpg";
import mother from "../assets/img/baby-mother.jpg";
import berlin from "../assets/img/berlin.jpg";
import parachute from "../assets/img/parachute-sky.jpg";
import couple from "../assets/img/couple.jpg";
import edge from "../assets/img/edge-legs.jpg";
import jump from "../assets/img/jump.jpg";
import factory from "../assets/img/factory.jpg";
import camera from "../assets/img/camera-person.jpg";
import puppy from "../assets/img/puppy.jpg";
import girls from "../assets/img/girls.jpg";

function Gallery() {
    let position = 0
    const handleButtonVisibility = () => {
        const btnWrapper = document.querySelector(".btnWrapper");
        const arrow = document.querySelector(".fas")
        if (btnWrapper != null) {
            if (window.innerWidth < window.innerHeight) {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    btnWrapper.style.display = "block";
                    btnWrapper.style.left = "0";
                    btnWrapper.style.transform = "translateX(0)";
                    arrow.classList.remove("fa-arrow-left");
                    arrow.classList.add("fa-arrow-up");

                } else {
                    btnWrapper.style.display = "none";
                }
            }
            else {
                if (position < 0) {
                    btnWrapper.style.display = "block";
                    btnWrapper.style.left = "100%";
                    btnWrapper.style.transform = "translateX(-160%)";
                    arrow.classList.remove("fa-arrow-up");
                    arrow.classList.add("fa-arrow-left");
                }
                else {
                    btnWrapper.style.display = "none";
                }
            }
        }
    }
    window.addEventListener("wheel", handleButtonVisibility);
    window.addEventListener("keydown", handleButtonVisibility);

    const backToStart = () => {
        const btnWrapper = document.querySelector(".btnWrapper");
        btnWrapper.style.display = "none"
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (window.innerWidth > window.innerHeight) {
            const container = document.querySelector(".container");
            position = 0;
            container.style.left = 0;
        }
    }

    const showImage = (src) => {
        const div = document.querySelector(".imageBox");
        const img = document.createElement("img");
        img.style.width = "90%";
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.setAttribute("src", src);
        div.appendChild(img);
        div.style.display = "block";
        div.style.animation = "fadein .3s";
        adjustImage()
        handleResize()
    }
    const closeBox = () => {
        const div = document.querySelector(".imageBox");
        const img = div.querySelector("img");
        div.style.animation = "fadeout .4s";
        setTimeout(() => {
            div.style.display = "none";
            if (img !== null) {
                img.remove();
            }
        }, 400)
    }
    const adjustImage = () => {
        const div = document.querySelector(".imageBox");
        const img = div.querySelector("img");
        img.style.width = "90%"
        // landscape
        if (window.innerWidth > window.innerHeight) {
            img.style.width = "80%";
            if (window.innerHeight <= 450) {
                img.style.width = "60%";
            }
            if (img.height > window.innerHeight) {
                img.style.width = "40%";
                if (window.innerHeight <= 450) {
                    img.style.width = "30%";
                }
            }
            if (window.innerWidth >= 1400) {
                img.style.width = "65%";
                if (img.height > window.innerHeight) {
                    img.style.width = "30%";
                }
            }
        }
        // portrait
        if (window.innerWidth < window.innerHeight) {
            if (window.innerWidth >= 768) {
                if (img.height > window.innerHeight) {
                    img.style.width = "70%";
                }
            }
        }
    }
    const handleResize = () => {
        const div = document.querySelector(".imageBox");
        if (div != null) {
            if (div.style.display === "block") {
                adjustImage()
            }
        }
    }
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("resize", handleResize);

    const scrollOnSides = (e) => {
        const container = document.querySelector(".container");
        if (container != null) {
            if (window.innerWidth > window.innerHeight) {
                if (e.type === "keydown") {
                    if (e.keyCode === 40 || e.keyCode === 39) {
                        if (position > -355) {
                            position = position - 5
                            container.style.left = position + "%"
                        }
                    }
                    else if (e.keyCode === 38 || e.keyCode === 37) {
                        if (!position <= 0) {
                            position = position + 5
                            container.style.left = position + "%"
                        }
                    }
                }
                else if (e.type === "wheel") {
                    if (e.deltaY > 0 && position > -355) {
                        position = position - 5
                        container.style.left = position + "%"
                    }
                    else if (e.deltaY < 0 && !position <= 0) {
                        position = position + 5
                        container.style.left = position + "%"
                    }
                }
            }
        }
    }
    window.addEventListener("wheel", scrollOnSides)
    window.addEventListener("keydown", scrollOnSides)
    return (
        <Wrapper>
            <Navigation />
            <ImagesContainer className="container">
                <Image1 src={japan} alt="hamburg" onClick={() => showImage(japan)} />
                <Image2 src={mother} alt="mother" onClick={() => showImage(mother)} />
                <Image3 src={berlin} alt="berlin" onClick={() => showImage(berlin)} />
                <Image4 src={parachute} alt="parachute" onClick={() => showImage(parachute)} />
                <Image5 src={couple} alt="couple" onClick={() => showImage(couple)} />
                <Image6 src={jump} alt="jump" onClick={() => showImage(jump)} />
                <Image7 src={edge} alt="edge" onClick={() => showImage(edge)} />
                <Image8 src={factory} alt="factory" onClick={() => showImage(factory)} />
                <Image9 src={camera} alt="camera" onClick={() => showImage(camera)} />
                <Image10 src={puppy} alt="puppy" onClick={() => showImage(puppy)} />
                <Image11 src={girls} alt="girls" onClick={() => showImage(girls)} />
            </ImagesContainer>
            <NameInGallery>Yasin Clements</NameInGallery>
            <GoUp className="btnWrapper" onClick={backToStart}><i className="fas fa-arrow-up"></i></GoUp>
            <ImageBox className="imageBox" >
                <Close close onClick={closeBox}>
                    CLOSE
                    <Stripe close />
                </Close>
            </ImageBox>
        </Wrapper>
    )
}
export default Gallery