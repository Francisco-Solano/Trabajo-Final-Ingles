const textos = [
   "Enhance your professional future with our business skills training solutions.",
"Master essential office tools and boost your career with our expert courses.",
"Customized training for businesses looking to improve their team's productivity.",
"Unlock your potential with our business skills courses, designed for success.",
"Elevate your business with our office software training and services."
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

function cambiarTexto() {
    dynamicText.style.opacity = "0"; // Oculta el texto antes de cambiarlo

    setTimeout(() => {
        dynamicText.textContent = textos[index];
        dynamicText.style.animation = "none"; // Reiniciar animación
        void dynamicText.offsetWidth; // Forzamos el reinicio de la animación
        dynamicText.style.animation = "subirTexto 0.5s ease-in-out forwards";
        
        index = (index + 1) % textos.length;
    }, 300);
}

setInterval(cambiarTexto, 4000); // Cambia cada 3 segundos



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Esto hace que el scroll sea suave
      });
    });
  });
  
