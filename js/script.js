// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav-links");
//     const links = document.querySelectorAll(".nav-links a"); // Select all menu links

//     // Toggle menu when clicking the menu button
//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });

//     // Close menu when clicking a menu link
//     links.forEach(link => {
//         link.addEventListener("click", function () {
//             navLinks.classList.remove("active"); // Close menu
//         });
//     });

//     // Image Slider Script
//     let images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"]; // Replace with actual image paths
//     let index = 0;
    
//     function changeImage() {
//         let slide = document.getElementById("slide");
//         slide.src = images[index];
//         index = (index + 1) % images.length;
//     }
    
//     setInterval(changeImage, 3000); // Change image every 3 seconds
// });
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a"); // Select all menu links

    // Toggle menu when clicking the menu button
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a menu link
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active"); // Close menu
        });
    });

    // Close menu when clicking outside the menu
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = navLinks.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInsideMenu) {
            navLinks.classList.remove("active"); // Close menu
        }
    });

    // Image Slider Script
    let images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"]; // Replace with actual image paths
    let index = 0;
    
    function changeImage() {
        let slide = document.getElementById("slide");
        slide.src = images[index];
        index = (index + 1) % images.length;
    }
    
    setInterval(changeImage, 3000); // Change image every 3 seconds
});
