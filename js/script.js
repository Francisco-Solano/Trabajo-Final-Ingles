const textos = [
  "Enhance your professional future with our business skills training solutions.",
  "Master essential office tools and boost your career with our expert courses.",
  "Customized training for businesses looking to improve their team's productivity.",
  "Unlock your potential with our business skills courses, designed for success.",
  "Elevate your business with our office software training and services."
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

// Aseguramos que el primer texto sea visible inmediatamente
dynamicText.classList.add("visible");

function cambiarTexto() {
  dynamicText.classList.remove("visible"); // Eliminar la clase 'visible' antes de cambiar el texto

  setTimeout(() => {
      dynamicText.textContent = textos[index];
      dynamicText.classList.add("visible"); // Añadir la clase 'visible' después de cambiar el texto
      
      index = (index + 1) % textos.length;  // Cambiar al siguiente texto en el array
  }, 300); // Esperar 300ms para la transición de 'opacity' antes de actualizar el texto
}

setInterval(cambiarTexto, 5000); // Cambia cada 5 segundos



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
  
