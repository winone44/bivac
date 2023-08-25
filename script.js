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
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
    centeredSlides: true,
    breakpoints: {
        900: {
            slidesPerView: 4,
            spaceBetween: 60
        },
    }
});