document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementById("closeBtn");
  
    // Mostrar el pop-up al cargar la página
    popup.style.display = "block";
  
    // Cerrar el pop-up al hacer clic en el botón "Cerrar"
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
  