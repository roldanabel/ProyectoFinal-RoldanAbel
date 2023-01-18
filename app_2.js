
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
  // Enviar OBJETO a JSON

  const aJson = JSON.stringify(infoProducto);
  // guardar en LOCALSTORAGE
  localStorage.setItem("infoProducto", aJson);
  // bajar datos del LOCALSTORAGE 
  const deJson = localStorage.getItem("infoProducto");
  console.log(JSON.parse(deJson));
  Toastify({
    text: "Producto agregado",
    className: "info",
    style: {
      background: "linear-gradient(to right, #7CFC00, #32CD32)",
    }
  }).showToast();
  
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
  Toastify({
    text: "Producto eliminado",
    className: "info",
    style: {
      background: "linear-gradient(to right, #DC143C, #FF0000)",
    }
  }).showToast();
}

const lista = document.querySelector("#listado");

const pedirPost = async () => {
  const resp = await fetch("data.json");
  const data = await resp.json();

  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${post.nombre}</h4>
        <h5>${post.precio}</h5>

        `;
    lista.append(li);
  });
};

pedirPost(); 
