gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav-link", {  scrollTrigger:{
    trigger:".circle-1",
    toggleActions:"restart none none restart"
} ,duration: 1, opacity: 0 });
gsap.from(".navbar-button", {  scrollTrigger:{
    trigger:".circle-1",
    toggleActions:"restart none none restart"
} ,duration: 1, opacity: 0 });

gsap.from(".circle-1", { scrollTrigger:{
    trigger:".circle-1",
    toggleActions:"restart none none restart"
} ,duration: 1.1, x: "-20%", ease: "sine" });
gsap.from(".circle-1", {  scrollTrigger:{
    trigger:".circle-1",
    toggleActions:"restart none none restart"
} ,duration: 0.5, opacity: 0 });

gsap.from("h1", {  scrollTrigger:{
    trigger:".circle-1",
    toggleActions:"restart none none restart"
} ,duration: 1.3, x: "-10%" });

gsap.from("h1", {  scrollTrigger:{
    trigger:".circle-1",
    toggleActions:"restart none none restart"
} ,duration: 1, opacity: 0 });

gsap.from(".btn-heading-1", {scrollTrigger:{
    trigger:".btn-heading-1",
    toggleActions:"restart none none restart"
},duration:1, opacity:0})

gsap.from(".btn-heading-2", {scrollTrigger:{
    trigger:".btn-heading-2",
    toggleActions:"restart none none restart"
},duration:1, opacity:0})

gsap.from("h2", { scrollTrigger:{
    trigger:"h2",
    toggleActions:"restart none none restart"
} ,duration: 1.1, x: "-20%", ease: "sine" });
gsap.from("h2", {  scrollTrigger:{
    trigger:"h2",
    toggleActions:"restart none none restart"
} ,duration: 0.5, opacity: 0 });

gsap.from(".about-me", { scrollTrigger:{
    trigger:".about-me",
    toggleActions:"restart none none restart"
} ,duration: 1.1, x: "20%", ease: "sine" });
gsap.from(".about-me", {  scrollTrigger:{
    trigger:".about-me",
    toggleActions:"restart restart none restart"
} ,duration: 1, opacity: 0});

gsap.from(".circle-2", { scrollTrigger:{
    trigger:".circle-2",
    toggleActions:"restart none none restart"
} ,duration: 1.1, x: "20%", ease: "sine" });
gsap.from(".circle-2", {  scrollTrigger:{
    trigger:".circle-2",
    toggleActions:"restart none none restart"
} ,duration: 0.5, opacity: 0 });

gsap.from(".skills-header", { scrollTrigger:{
    trigger:".skills-header",
    toggleActions:"restart none none restart"
} ,duration: 1.1, y: "-20%", ease: "sine" });
gsap.from(".skills", {  scrollTrigger:{
    trigger:".skills",
    toggleActions:"restart none none restart"
} ,duration: 1.1, y: "-20%", ease: "sine" });
gsap.from(".skills", {  scrollTrigger:{
    trigger:".skills",
    toggleActions:"restart none none restart"
} ,duration: 1, opacity: 0});

gsap.from(".contact", { scrollTrigger:{
    trigger:".contact",
    toggleActions:"restart none none restart"
} ,duration: 1.1, y: "-20%", ease: "sine" });
gsap.from(".contact", {  scrollTrigger:{
    trigger:".contact",
    toggleActions:"restart none none restart"
} ,duration: 1, opacity: 0});

gsap.from(".card", { scrollTrigger:{
    trigger:".card",
    toggleActions:"restart none none restart"
} ,duration: 1.1, y: "-50%", ease: "sine" });
gsap.from(".card", {  scrollTrigger:{
    trigger:".card",
    toggleActions:"restart none none restart"
} ,duration: 1, opacity: 0});
