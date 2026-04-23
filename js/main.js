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


document.addEventListener("keydown", (event) => {
    const key = event.key;
    //Si accionEjecutada es true entonces actualiza la UI
    let accionEjecutada = false;

//numeros
    if (key >= "0" && key <= "9") {
        cargarNumero(key);
        accionEjecutada = true;
    }
//punto
    else if (key === ".") {
        cargarNumero(".");
        accionEjecutada = true;
    }
//operadores
    else if (["+", "-", "*", "/"].includes(key)) {
        elegirOperador(key);
        accionEjecutada = true;
    }
//igual
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calcularResultado();
        accionEjecutada = true;
    }
//borrar
    else if (key === "Backspace" || key === "Delete") {
        borrarUltimo();
        accionEjecutada = true;
    }
//limpiar todo
    else if (key === "Escape") {
        limpiarTodo();
        accionEjecutada = true;
    }
//con la "n" cambiamos el signo
    else if (key.toLowerCase() === "n") {
        cambiarSigno();
        accionEjecutada = true;
    }
//con la "r" calculamos la raiz cuadrada
    else if (key.toLowerCase() === "r") {
        calcularRaizCuadrada();
        accionEjecutada = true;
}

//actualizar UI solo si accion ejecutada es true
    if (accionEjecutada) {
        actualizarPantalla();
    }
});


actualizarPantalla();