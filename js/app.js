const hamburguer = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    
    if (menu.classList.contains("active")) {
        hamburguer.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    } else {
        hamburguer.innerHTML = "<i class='fa-solid fa-bars'></i>";
    }
});

