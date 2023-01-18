//variables con elemento del DOM

let nombreForm = document.querySelector("#nombre")
let apellidoForm = document.querySelector("#apellido")
let correoForm = document.querySelector("#correo")

//eventos

nombreForm.addEventListener("input" , function () {
  //console.log(nombreForm.value);
  if (nombreForm.value === "") {
    alert("ingrese un nombre real");
  }
}); 

apellidoForm.addEventListener("input" , function () {
  //console.log(apellidoForm.value);
  if (apellidoForm.value === "") {
    alert("ingrese un apellido real");
  }
}); 

correoForm.addEventListener("input" , function () {
  //console.log(correoForm.value);
  if (correoForm.value === "") {
    alert("ingrese un correo real");
  }
}); 

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".info");

// mostrar info del form en el DOM

const mostrarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML=`
  <div class="alert alert-warning" role="alert">
  <h5> mucha gracias ${nombreForm.value} por tu consulta</h5></div>`
});
