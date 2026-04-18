import {
    cargarNumero,
    elegirOperador,
    calcularResultado,
    limpiarTodo,
    borrarUltimo,
    obtenerOperacion,
    obtenerResultado,
    cambiarSigno,
    usarAns,
    calcularCuadrado,
    calcularRaizCuadrada
} from "./functions.js";


//! SELECTORES

const pantallaOperacion = document.getElementById("pantallaOperacion");
const pantallaResultado = document.getElementById("pantallaResultado");

const botonesNumeros = document.querySelectorAll(".boton-numero");
const botonesOperadores = document.querySelectorAll(".boton-operador");

const btnClear = document.getElementById("btnClear");
const btnBorrar = document.getElementById("btnBorrar");
const btnIgual = document.getElementById("btnIgual");
const btnAns = document.getElementById("btnAns");
const btnSigno = document.getElementById("btnSigno");
const btnCuadrado = document.getElementById("btnCuadrado");
const btnRaiz = document.getElementById("btnRaiz");


//! FUNCION PARA ACTUALIZAR LA PANTALLA

function actualizarPantalla() {
    pantallaOperacion.textContent = obtenerOperacion();
    pantallaResultado.textContent = obtenerResultado();
}


//! EVENTOS DE LOS BOTONES

botonesNumeros.forEach((boton) => {
    boton.addEventListener("click", () => {
        const valor = boton.dataset.valor;
        cargarNumero(valor);
        actualizarPantalla();
    });
});


//! EVENTOS DE OPERADORES

botonesOperadores.forEach((boton) => {
    boton.addEventListener("click", () => {
        const valor = boton.dataset.valor;
        elegirOperador(valor);
        actualizarPantalla();
    });
});

//! EVENTOS DEL IGUAL

btnIgual.addEventListener("click", () => {
    calcularResultado();
    actualizarPantalla();
});


//! EVENTOS DEL CLEAR

btnClear.addEventListener("click", () => {
    limpiarTodo();
    actualizarPantalla();
});


//! EVENTOS DEL BORRAR

btnBorrar.addEventListener("click", () => {
    borrarUltimo();
    actualizarPantalla();
});

//! EVENTOS DEL MAS/MENOS
btnSigno.addEventListener("click", () => {
    cambiarSigno();
    actualizarPantalla();
});

//! EVENTOS DEL ANS
btnAns.addEventListener("click", () => {
    usarAns();
    actualizarPantalla();
});

//! EVENTOS DEL CUADRADO
btnCuadrado.addEventListener("click", () => {
    calcularCuadrado();
    actualizarPantalla();
});

//! EVENTOS DE RAIZ
btnRaiz.addEventListener("click", () => {
    calcularRaizCuadrada();
    actualizarPantalla();
});


actualizarPantalla();