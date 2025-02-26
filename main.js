(function ($) {
    // ("use strict");

    //canvas menu activation

   
    //master slider carousel

    var slider = new MasterSlider();
    slider.setup('masterslider', {
        width: 1024,
        height: 650,
        fullwidth: true,
        centerControls: false,
        speed: 100,
        view: 'flow',
        overPause: false,
        autoplay: true
    });

    slider.control('bullets', {
        autohide: false
    });

    // product 
    $(".product-slider").owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            300: {
                items: 3,
                nav: false
            },
            500: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    });


})(jQuery);





document.getElementById("menu-toggle").addEventListener("click", function (event) {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    event.stopPropagation(); // Prevents the click from immediately closing the menu
});

// Close menu when clicking anywhere outside it
document.addEventListener("click", function (event) {
    var menu = document.getElementById("mobile-menu");
    var toggleButton = document.getElementById("menu-toggle");

    // If the clicked element is NOT the menu or the toggle button, close it
    if (menu.style.display === "block" && !menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.style.display = "none";
    }
});

// function verifyAge(event) {
//     event.preventDefault(); // Prevents page reload

//     const day = document.getElementById("birthDay").value;
//     const month = document.getElementById("birthMonth").value;
//     const year = document.getElementById("birthYear").value;

//     if (!day || !month || !year) {
//         alert("Please enter your full date of birth.");
//         return;
//     }

//     const birthDate = new Date(year, month - 1, day);
//     const currentDate = new Date();
//     let age = currentDate.getFullYear() - birthDate.getFullYear();
//     const monthDiff = currentDate.getMonth() - birthDate.getMonth();
//     const dayDiff = currentDate.getDate() - birthDate.getDate();

//     // Adjust age if birthday hasn't happened yet this year
//     if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
//         age--;
//     }

//     if (age >= 18) {
//         document.getElementById("verification-container").style.display = "none"; // Hide verification
//         document.body.classList.add("verified"); // ✅ Unlocks content & removes blur
//     } else {
//         alert("Access Denied. You must be 18 or older to enter.");
//     }
// }



// scrolling in the welcome


const images = [
    "images/product/blazefull.jpg", // Image 1
    "images/product/blackjackfull.jpg", // Image 1
    "images/product/highwayfull.jpg", // Image 2
    "images/product/tequilaicefull.jpg",  // Image 3
    "images/product/xxlfull.jpg"  // Image 3
];

let index = 0;
const slider = document.getElementById("slider");
let slideDirection = 1; // 1 = left to right, -1 = right to left

function changeImage() {
    slider.style.transform = `translateX(${slideDirection * 100}%)`; // Move image out

    setTimeout(() => {
        index = (index + 1) % images.length;
        slider.src = images[index];
        slider.style.transform = `translateX(${slideDirection * -100}%)`; // Move new image from opposite direction

        setTimeout(() => {
            slider.style.transform = "translateX(0%)"; // Center image
        }, 50);

        slideDirection *= -1; // Reverse direction for next transition
    }, 1000);
}

setInterval(changeImage, 2000); // Change every 2 seconds