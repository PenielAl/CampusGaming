// TRANSITION
const titre = document.querySelector('.formation h2');
window.addEventListener('scroll', () => {
  const rect = titre.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    titre.style.opacity = '1';
  }
});

/* Effet transition opacité en venant de la gauche*/
const titles = document.querySelectorAll('.paragraphes h2');
window.addEventListener('scroll', () => {
  titles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      title.style.opacity = '1';
      title.style.transform = 'translateX(0)';
    }
  });
});

//Sidebars
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".headers");

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

