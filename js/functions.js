let numeroActual = "";
let numeroAnterior = "";
let operador = "";
let ultimoResultado = "";
let operacionActual = "";
let resultadoMostrado = false;


//! FUNCIONES 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Agrega numeros o punto decimal al numeroActual
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export function cargarNumero(numero) {
    operacionActual = "";
    if (resultadoMostrado) {
        numeroActual = numero;
        resultadoMostrado = false;
        return;
    }

    if (numero === "." && numeroActual.includes(".")) {
        return;
    }

    numeroActual += numero;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Guarda el operador y prepara la calculadora para el siguiente numero
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export function elegirOperador(operadorNuevo) {
    operacionActual = "";
    if (numeroActual === "") {
        return;
    }

    if (numeroAnterior !== "") {
        calcularResultado();
    }

    resultadoMostrado = false;
    operador = operadorNuevo;
    numeroAnterior = numeroActual;
    numeroActual = "";
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Realiza el calculo entre numeroAnterior y numeroActual
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
            limpiarTodo();
            numeroActual="Error"
            return;
        }else {
        resultado = num1 / num2;
        }
    }

    const decimales = 6;
    const factor = 10 ** decimales;

    numeroActual = (Math.round(resultado * factor) / factor).toString();
    numeroAnterior = "";
    operador = "";
    ultimoResultado = numeroActual;
    resultadoMostrado = true;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* Toma como numero actual el ultimo resultado
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function usarAns() {
    if (ultimoResultado === "") {
        return
    };
    numeroActual = ultimoResultado;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Limpia toda la calculadora
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function limpiarTodo() {
    numeroActual = "";
    numeroAnterior = "";
    operador = "";
    operacionActual = "";
    resultadoMostrado = false;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Borra el ultimo caracter del numeroActual
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function borrarUltimo() {
    numeroActual = numeroActual.slice(0, -1);
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Devuelve lo que se tiene que mostrar arriba
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function obtenerOperacion() {
    if (operacionActual !== "") {
        return operacionActual;
    }

    return `${numeroAnterior} ${operador}`.trim();
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Devuelve lo que se tiene que mostrar en la pantalla principal
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function obtenerResultado() {
    if (numeroActual === "") {
        return "0";
    }

    return numeroActual;
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *Cambia el signo del numeroActual
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function cambiarSigno() {
    if (numeroActual === "") {
        return;
    }
    const num = Number(numeroActual);

    numeroActual = (-num).toString();
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* Se calcula el cuadrado del numeroActual
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function calcularCuadrado() {
    if (numeroActual === "") {
        return
    };

    const num = Number(numeroActual);

    const resultado = num ** 2;
    operacionActual = `${numeroActual}²`;
    const decimales = 6;
    const factor = 10 ** decimales;

    numeroActual = (Math.round(resultado * factor) / factor).toString();
    ultimoResultado = numeroActual;
    resultadoMostrado = true;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* Se calcula la raiz cuadrada del numeroActual
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export function calcularRaizCuadrada() {
    if (numeroActual === "") {
        return
    };

    const num = Number(numeroActual);
    if(num<0){
        limpiarTodo();
        numeroActual="Error"
        return; 
    }
    const resultado = num ** 0.5;
    operacionActual = `√${numeroActual}`;
    const decimales = 6;
    const factor = 10 ** decimales;

    numeroActual = (Math.round(resultado * factor) / factor).toString();
    ultimoResultado = numeroActual;
    resultadoMostrado = true;
}