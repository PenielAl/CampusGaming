//Sidebars
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".corpuss ");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
// Bouton de retour en haut
const boutonRetourHaut = document.getElementById('btnRetourHaut');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    boutonRetourHaut.style.display = 'block';
  } else {
    boutonRetourHaut.style.display = 'none';
  }
});
function retourHaut() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}