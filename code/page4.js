
//Transition d'opacité
window.addEventListener('scroll', function() {
    const titres = document.querySelectorAll('section h3');
  
    titres.forEach(titre => {
      const titrePosition = titre.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (titrePosition < screenPosition) {
        titre.style.opacity = '1';
      } else {
        titre.style.opacity = '0';
      }
    });
  });

  //Transition d'opacité
  window.addEventListener('load', function() {
    const paragraph = document.querySelector('.text p');
    paragraph.classList.add('show'); 
  });
  
  //Sidebars
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".pages ");

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