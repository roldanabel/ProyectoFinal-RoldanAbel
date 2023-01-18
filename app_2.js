
//Lee el contenido del HTML al que le dimos click y extrae la información del producto
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    leerDatosProducto(e.target.parentElement);
  });
});

//Array vacio para guardar los productos
let articulosCarrito = [];

function leerDatosProducto(producto) {
  const infoProducto = {
    titulo: producto.querySelector(".card-title").textContent,
    texto: producto.querySelector(".card-text").textContent,
    id: producto.querySelector(".btn").getAttribute("data-id"),
  };

  //Agrega elementos al carrito
  articulosCarrito = [...articulosCarrito, infoProducto];
  // console.log(articulosCarrito);

  //LLamo a la funcion para mostrar los productos en el carrito
  carritoHTML();
}

//Mostrar los productos en el carrito
const carrito = document.querySelector("#carrito");

function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  articulosCarrito.forEach((producto) => {
    const row = document.createElement("p");
    row.innerHTML = `
    <div class="container">
    <h5>${producto.titulo}</h5>
    <p>${producto.texto}</p>
    <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
    </div>
    `;
    carrito.appendChild(row);
  });
}

function limpiarHTML() {
  carrito.innerHTML = "";
}

carrito.addEventListener("click", eliminarProducto);

// Eliminar productos del carrito

function eliminarProducto(e) {
  if (e.target.classList.contains("btn-danger")) {
    let productoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoID
    );
    carritoHTML();
  }
}

// Enviar OBJETO a JSON


const producto1 = {
  titulo: "iPhone13",
  capacidad: 100,
};

const aJson = JSON.stringify(producto1);


// guardar en LOCALSTORAGE

localStorage.setItem("producto1", aJson);

// bajar datos del LOCALSTORAGE 

const deJson = localStorage.getItem("producto1");

console.log(JSON.parse(deJson));



