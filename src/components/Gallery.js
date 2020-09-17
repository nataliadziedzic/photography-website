import React from 'react';
import Navigation from "./Navigation";
import { MenuBtn as Close, Stripe } from "../styles/Navigation-style";
import { GalleryWrapper as Wrapper, ImagesContainer, NameInGallery, GoUp, ImageBox, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12 } from "../styles/Gallery-styles";
import hamburg from "../assets/img/hamburg-dark.jpg";
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
import guitarist from "../assets/img/guitarist.jpg";

function Gallery() {
    window.onscroll = () => { onScrollFunction() };

    const onScrollFunction = () => {
        const btnWrapper = document.querySelector(".btnWrapper");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnWrapper.style.display = "block";
        } else {
            btnWrapper.style.display = "none";
        }
    }
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
    }
    const closeBox = () => {
        const div = document.querySelector(".imageBox");
        div.style.animation = "fadeout .4s";
        setTimeout(() => {
            div.style.display = "none";
            div.querySelector("img").remove();
        }, 400)
    }
    return (
        <>
            <Navigation />
            <Wrapper>
                <ImagesContainer>
                    <Image1 src={hamburg} alt="hamburg" onClick={() => showImage(hamburg)} />
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
                    <Image12 src={guitarist} alt="guitarist" onClick={() => showImage(guitarist)} />
                </ImagesContainer>
                <NameInGallery>Yasin Clements</NameInGallery>
                <GoUp className="btnWrapper" onClick={topFunction}><i className="fas fa-arrow-up"></i></GoUp>
                <ImageBox className="imageBox" >
                    <Close close onClick={closeBox}>
                        CLOSE
                    <Stripe close />
                    </Close>
                </ImageBox>
            </Wrapper>
        </>
    )
}
export default Gallery