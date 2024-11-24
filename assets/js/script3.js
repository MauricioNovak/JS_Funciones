//Ejercicio 3
const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");

// Azul
divAzul.style.width = "200px";
divAzul.style.height = "200px";
divAzul.style.backgroundColor = 'blue';
divAzul.style.color = "white";

// Rojo
divRojo.style.width = "200px";
divRojo.style.height = "200px";
divRojo.style.backgroundColor = "red";
divRojo.style.color = "white";

// Verde
divVerde.style.width = "200px";
divVerde.style.height = "200px";
divVerde.style.backgroundColor = "green";
divVerde.style.color = "white";

// Amarillo
divAmarillo.style.width = "200px";
divAmarillo.style.height = "200px";
divAmarillo.style.backgroundColor = "yellow";
divAmarillo.style.color = "white";


const cambiarColorNegro = (event) => {
    event.target.style.backgroundColor = "black";
};

divAzul.addEventListener("click", cambiarColorNegro);
divRojo.addEventListener("click", cambiarColorNegro);
divVerde.addEventListener("click", cambiarColorNegro);
divAmarillo.addEventListener("click", cambiarColorNegro);