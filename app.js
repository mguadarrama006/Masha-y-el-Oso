/* ============================================================
   Chicos: este archivo contiene TODAS las prácticas de clase,
   tanto las primeras actividades como los nuevos eventos.
=============================================================== */


/* ============================================================
   ACTIVIDAD 1:
   Cambiar el fondo del banner usando getElementById
=============================================================== */

// Chicos: seleccionamos el banner por su ID
const banner = document.getElementById("banner");

// Cambiamos su color usando Bootstrap
banner.classList.remove("bg-danger");
banner.classList.add("bg-warning");

/* ============================================================
   ACTIVIDAD 2:
   Testimonios VIP y todos los párrafos del sitio
=============================================================== */

// Chicos: seleccionamos solo los testimonios VIP
const testimoniosVip = document.getElementsByClassName("testimonio-vip");

// Recorremos cada testimonio VIP
for (let vip of testimoniosVip) {
    vip.classList.add("text-primary"); // Texto azul
}

// Chicos: ahora seleccionamos TODOS los párrafos
const parrafos = document.getElementsByTagName("p");

// Recorremos todos los párrafos del sitio
for (let p of parrafos) {
    p.classList.add("text-danger"); // Los textos se vuelven rojos
}

/* ============================================================
   ACTIVIDAD 3:
   - querySelector
   - querySelectorAll
   - getElementsByName
=============================================================== */

// Chicos: querySelector (selecciona el PRIMER elemento del tipo indicado)
const primerInput = document.querySelector("input");

// Le damos estilo para que lo vean claro
primerInput.classList.add("bg-success", "text-white");


// querySelectorAll para todos los botones
const botones = document.querySelectorAll("button");

// Chicos: recorremos todos los botones
botones.forEach(boton => boton.classList.add("btn-danger"));


// getElementsByName
const campoNombre = document.getElementsByName("nombreEjemplo");

// Si existe el campo, lo estilizamos
if (campoNombre.length > 0) {
    campoNombre[0].classList.add("text-warning");
}

/* ============================================================
   EVENTO onclick
=============================================================== */

function saludar() {
    // Chicos: este evento se ejecuta al dar clic
    const mensaje = document.getElementById("mensajeOnclick");
    mensaje.innerText = "¡Gracias por hacer clic! Así funcionan las promociones.";
}

/* ============================================================
   EVENTO onmouseover / onmouseout
=============================================================== */

function cambiarColor() {
    // Chicos: esto pasa cuando el mouse entra al área
    document.getElementById("cuadroColor").style.background = "#ffd966";
}

function restaurarColor() {
    // Chicos: esto pasa cuando el mouse sale del área
    document.getElementById("cuadroColor").style.background = "#eee";
}

/* ============================================================
   EVENTO onchange
=============================================================== */

function mostrarSeleccionEjemplo() {
    const valor = document.getElementById("selectEjemplo").value;
    const texto = document.getElementById("textoOnchange");

    if (valor === "") {
        texto.innerText = "";
    } else {
        texto.innerText = "Elegiste el taller: " + valor;
    }
}

/* ============================================================
   EVENTO addEventListener (moderno)
=============================================================== */

document.getElementById("btnCambiarCard").addEventListener("click", function () {

    // Chicos: esto cambia el contenido dinámicamente
    document.getElementById("cardTitulo").innerText =
        "Nuevo Taller Actualizado con IA";

    document.getElementById("cardTexto").innerText =
        "Este taller ahora incluye automatización con inteligencia artificial.";

    document.getElementById("cardImagen").src = "img/casco.jpeg";
});

/* ============================================================
   EVENTO onsubmit — Validación
=============================================================== */

function validarFormularioEjemplo() {
    const nombre = document.getElementById("nombreEjemplo").value;

    // Chicos: validamos antes de enviar
    if (nombre.trim() === "") {
        alert("Por favor escribe tu nombre.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}
/* ============================================================
   NUEVA FUNCIÓN – Agregar imágenes dinámicas a la galería
============================================================ */

const inputImagen = document.getElementById("inputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const galeria = document.getElementById("galeria");

btnAgregarImagen.addEventListener("click", function () {

  const url = inputImagen.value.trim();

  if (url === "") {
    alert("Por favor ingresa una URL válida.");
    return;
  }

  // Crear columna para Bootstrap
  const col = document.createElement("div");
  col.classList.add("col-md-4");

  // Crear imagen
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen agregada por el usuario";
  img.classList.add("img-fluid", "rounded", "shadow");

  // Insertar imagen dentro de la columna
  col.appendChild(img);

  // Insertar columna dentro de la galería
  galeria.appendChild(col);

  // Limpiar input
  inputImagen.value = "";
});
/* ============================================================
   ACTIVIDAD LISTA DE TAREAS WARRIOR
============================================================ */

// 1. Seleccionar elementos principales
const listaTareas = document.getElementById("listaTareas");
const btnEliminarPrimero = document.getElementById("btnEliminarPrimero");
const inputNuevaTarea = document.getElementById("inputNuevaTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");

// 2. Eliminar el primer elemento de la lista usando remove()
btnEliminarPrimero.addEventListener("click", () => {
  const primeraTarea = listaTareas.firstElementChild;

  if (primeraTarea) {
    primeraTarea.remove(); // elimina el nodo directamente
  } else {
    alert("No hay tareas para eliminar.");
  }
});

// 3. Agregar nuevas tareas a la lista
btnAgregarTarea.addEventListener("click", () => {
  const textoTarea = inputNuevaTarea.value.trim();

  if (textoTarea === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  // Crear nueva tarea (li)
  const nuevaTarea = document.createElement("li");
  nuevaTarea.classList.add("list-group-item");
  nuevaTarea.innerText = textoTarea;

  // Insertar en la lista
  listaTareas.appendChild(nuevaTarea);

  inputNuevaTarea.value = ""; // limpiar input
});
