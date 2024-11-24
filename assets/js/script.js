//Ejercicio 2.1 / 2.2 / 2.3

//Ejercicio Base Original 
//(Lo dejé comentado para que no interfiriera con el ejercicio modificado)

// function pintar(){
//    ele.style.backgroundColor = 'yellow'
//     }
//
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


//Ejercicio Modificado 2.1 / 2.2 / 2.3
const ele = document.getElementById("ele1");

const pintar = (elemento, color = 'green') => {
    elemento.style.backgroundColor = color;
};

ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); 
});