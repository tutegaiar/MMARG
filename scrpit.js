document.addEventListener("DOMContentLoaded", function() {
  const lupa = document.getElementById("busqueda");
  const contenedorImput = document.querySelector(".navbar__element:last-child");
  const menuHamburguesa = document.getElementById("menuHamburguesa");
  const navMobileContainer = document.querySelector(".nav__mobile__container");
  const cerrarMenuHamburguesa = document.getElementById("cerrarMenuHamburguesa");
  const heder = document.querySelector(".encabezado__container");
  const main = document.querySelector("main");
  let isLupaClicked = false;

  // Agrega un evento de clic a la lupa
  lupa.addEventListener("click", function(event) {
      if (!isLupaClicked) {
          const input = document.createElement("input");
          input.className = "navbar__element__input";
          input.type = "text";
          lupa.innerHTML = "";
          contenedorImput.style.width = "350px";
          lupa.appendChild(input);
          isLupaClicked = true;

          // Prevenir propagación del evento
          event.stopPropagation();
      }
  });

  // Evento de clic en cualquier lugar del documento
  document.addEventListener("click", function(event) {
      if (isLupaClicked && !lupa.contains(event.target)) {
          // Volver a la imagen de la lupa
          lupa.innerHTML = '<img src="./imagenes/lupa.png" alt="busqueda" class="lupa">';
          contenedorImput.style.width = "";
          isLupaClicked = false;
      }
  });

  menuHamburguesa.addEventListener("click", function() {
      navMobileContainer.style.opacity = "1";
      navMobileContainer.style.visibility = "visible";
      heder.style.display = "none";
      main.style.display = "none";
  });

  cerrarMenuHamburguesa.addEventListener("click", function() {
      navMobileContainer.style.opacity = "0";
      navMobileContainer.style.visibility = "hidden";
      heder.style.display = "flex";
      main.style.display = "block";
  });
});
