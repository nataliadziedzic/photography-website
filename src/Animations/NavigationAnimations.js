import gsap from "gsap";

export const photoSwapping = () => {
    const tl = gsap.timeline()
    tl.to("#sidePhoto", { height: 0, duration: .5 })
        .to("#preview", { opacity: .2, duration: .5 }, "-=.5")
        .to("#preview", { opacity: 1, duration: .7 })
        .to("#sidePhoto", { height: 600, duration: .7 }, "-=.7")
}

export const displayingMenu = () => {
    const tl = gsap.timeline()
    tl.fromTo("#background", { yPercent: -100 }, { yPercent: 0, delay: .3 })
        .fromTo("#menu", { opacity: 1, scale: 1, ease: "back" }, { opacity: 0, scale: 0 })
        .fromTo("#content", { yPercent: -100 }, { yPercent: 0 }, "-=.5")
        .fromTo("#close", { opacity: 0, scale: 0, ease: "back" }, { opacity: 1, scale: 1.4 })
        .to("#close", { scale: 1 })
}

export const hidingMenu = () => {
    const tl = gsap.timeline({ defaults: { duration: .3 } })
    tl.to("#content", { yPercent: -100 })
        .to("#background", { yPercent: -100 })
        .to("#close", { opacity: 0 }, "-=.5")
        .to("#menu", { opacity: 1, scale: 1, ease: "back" })

}