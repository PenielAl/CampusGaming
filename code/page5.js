/* Effet Bounce*/
const images = document.querySelectorAll('.images');
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)'; 
  });
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)'; 
  });
});

//Transition d'opacité
window.addEventListener('scroll', function() {
    const titres = document.querySelectorAll('.ecrit h3');
  
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

  //Bounce
  window.addEventListener('scroll', function() {
    const titre = document.querySelector('.métier h1');
    const titrePosition = titre.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (titrePosition < screenPosition) {
      titre.classList.add('bounce');
    } else {
      titre.classList.remove('bounce');
    }
  });

  //Sidebars
  const sidebar = document.getElementById("side-bar");
  const content = document.querySelector(".ouais ");
  
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