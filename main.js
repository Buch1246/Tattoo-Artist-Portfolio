let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  // Smooth scrolling
$(document).ready(function() {
  // Agregar clase "smooth-scroll" a todos los enlaces internos de la página
  $('a[href^="#"]').not('.navbar-nav a').addClass('smooth-scroll');

  // Animar el desplazamiento suave al hacer clic en los enlaces
  $('.smooth-scroll').on('click', function(event) {
    // Asegurarse de que this.hash tenga un valor antes de anular el comportamiento predeterminado del clic
    if (this.hash !== '') {
      // Prevenir comportamiento predeterminado del clic
      event.preventDefault();

      // Guardar el hash
      var hash = this.hash;

      // Animar el desplazamiento suave
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Agregar hash (#) a la URL cuando se haya terminado la animación de desplazamiento
        window.location.hash = hash;
      });
    }
  });
});