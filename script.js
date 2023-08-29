//mobile menu
document.getElementById("mobile-menu-trigger").addEventListener("click", function () {
    let myDiv = document.getElementById("nav-links");
    if (myDiv.style.display === "flex") {
        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
});


// Swiper config
var swiper = new Swiper(".main-slider", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    breakpoints: {
        900: {
            slidesPerView: 5,
            spaceBetween: 60
        },
    }
});