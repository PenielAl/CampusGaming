/* Effet transition opacité*/
const titre = document.querySelector('header h4');
window.addEventListener('load', () => {
  titre.style.opacity = '1';
});

// paragraphe venant de gauche
const paragraphe = document.querySelector('header p');
window.addEventListener('load', () => {
  paragraphe.style.opacity = '1';
  paragraphe.style.transform = 'translateX(0)';
});


//Sidebars
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".color");

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


