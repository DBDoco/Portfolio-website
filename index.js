/* Animations */
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

gsap.from(".projects", { scrollTrigger:{
    trigger:".projects",
    toggleActions:"restart none none restart"
} ,duration: 1.1, y: "-20%", ease: "sine" });
gsap.from(".projects", {  scrollTrigger:{
    trigger:".projects",
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

/* Project section filtering */
$(document).on('click', '.projects-filter li', function(){
    $(this).addClass('projects-filter-active').siblings().removeClass('projects-filter-active')
})

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value=='all'){
            $('.projects-box').show('1000');
        } else{
            $('.projects-box').not('.'+value).hide('1000');
            $('.projects-box').filter('.'+value).show('1000');
        }
    })
})