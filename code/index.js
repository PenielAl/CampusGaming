/* Effet Bounce*/
const images = document.querySelectorAll('.mn-pic');
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)'; 
  });
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)'; 
  });
});

/* Effet transition opacité*/
const titre = document.querySelector('.left-part h2');
window.addEventListener('scroll', () => {
  const rect = titre.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    titre.style.transition = 'opacity 3s';
    titre.style.opacity = '1'; 
  } else {
    titre.style.opacity = '0'; 
  }
});

/* Effet transition opacité en venant de la gauche*/
const paragraphe = document.querySelector('.left-part p');
window.addEventListener('scroll', () => {
  const rect = paragraphe.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    paragraphe.style.opacity = '1';
    paragraphe.style.transform = 'translateX(0)';
  }
});

//Sidebars
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".main-header");

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



//Rebondissement de gauche à droite
const sectionProfils = document.querySelector('.footer-logos ');
window.addEventListener('scroll', () => {
  const rect = sectionProfils.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    const icons = document.querySelectorAll('.footer-logos');
    icons.forEach(icon => {
      icon.style.animation = 'bounce 2s ease '; 
    });
  }
});


