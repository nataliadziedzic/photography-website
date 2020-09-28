import gsap from "gsap";

export const swapPlaces = (box, title) => {
    gsap.to(box, { top: "105%", duration: 1, delay: 1 })
    gsap.to(title, { top: "30%", duration: 1, delay: 1 })
}