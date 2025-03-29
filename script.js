var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function () {
    var tl = gsap.timeline();
     
    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.3
    });

    // Make h5 visible first (if it was hidden)
    tl.set(".nav-part2 h5", { visibility: "visible" });

    // Animate the spans inside h5
    tl.from(".nav-part2 h5 span", {
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3
    });
});

