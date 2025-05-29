// Toggle class active
const navbarNav = document.querySelector('.navbar');

// Navbar hide and show
const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
});

// Submenu toggle
const droptog = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submenu");

for (let x = 0; x < droptog.length; x++) {
    droptog[x].addEventListener("click", () => {
        submenu[x].classList.toggle("submenushow");
    });
}

// Klik diluar sidebar untuk menghilangkan nav
document.addEventListener("click", function(e) {
    if (!barbtn.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
