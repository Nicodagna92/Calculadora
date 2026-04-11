let numeroActual = "";
let numeroAnterior = "";
let operador = "";
let ultimoResultado = "";


//! FUNCIONES 

// *Agrega numeros o punto decimal al numeroActual
export function cargarNumero(numero) {
    if (numero === "." && numeroActual.includes(".")) {
        return;
    }

    numeroActual += numero;
}


// *Guarda el operador y prepara la calculadora para el siguiente numero
export function elegirOperador(operadorNuevo) {
    if (numeroActual === "") {
        return;
    }

    if (numeroAnterior !== "") {
        calcularResultado();
    }

    operador = operadorNuevo;
    numeroAnterior = numeroActual;
    numeroActual = "";
}


// *Realiza el calculo entre numeroAnterior y numeroActual
export function calcularResultado() {
    if (numeroAnterior === "" || numeroActual === "" || operador === "") {
        return;
    }

    const num1 = Number(numeroAnterior);
    const num2 = Number(numeroActual);

    let resultado;

    if (operador === "+") {
        resultado = num1 + num2;
    } else if (operador === "-") {
        resultado = num1 - num2;
    } else if (operador === "*") {
        resultado = num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0){
            pantallaOperacion.textContent = "Imposible dividir por cero";
            pantallaResultado.textContent = "Error"
            limpiarTodo();
        }else {
        resultado = num1 / num2;
        }
    }

    numeroActual = resultado.toString();
    numeroAnterior = "";
    operador = "";
    ultimoResultado = numeroActual;
}

//* Toma como numero actual el ultimo resultado
export function usarAns() {
    if (ultimoResultado === "") {
        return
    };
    numeroActual = ultimoResultado;
}


// *Limpia toda la calculadora
export function limpiarTodo() {
    numeroActual = "";
    numeroAnterior = "";
    operador = "";
}


// *Borra el ultimo caracter del numeroActual
export function borrarUltimo() {
    numeroActual = numeroActual.slice(0, -1);
}


// *Devuelve lo que se tiene que mostrar arriba
export function obtenerOperacion() {
    return `${numeroAnterior} ${operador}`.trim();
}


// *Devuelve lo que se tiene que mostrar en la pantalla principal
export function obtenerResultado() {
    if (numeroActual === "") {
        return "0";
    }

    return numeroActual;
}

// *Cambia el signo del numeroActual
export function cambiarSigno() {
    if (numeroActual === "") {
        return;
    }
    const num = Number(numeroActual);

    numeroActual = (-num).toString();
}