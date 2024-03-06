//Transition d'opacité
window.addEventListener('load', function() {
  const paragraphs = document.querySelectorAll('header p');

  paragraphs.forEach(paragraph => {
    paragraph.style.transition = 'opacity 7s, transform 7s';
    paragraph.style.opacity = '1';
    paragraph.style.transform = 'translateX(0)';
  });
});
//Transition d'opacité
document.addEventListener('DOMContentLoaded', function() {
  const titles = document.querySelectorAll('section h2');

  titles.forEach((title, index) => {
    if (index === 0) {
      title.style.opacity = '1';
    } else {
      title.style.opacity = '1';
      title.style.transform = 'translateX(0)';
    }
  });
});

//Sidebars
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".loggo ");

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