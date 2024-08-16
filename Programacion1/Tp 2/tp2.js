// Simulación de un Cajero Automático

// Objetivo:
// Desarrollar un programa en PSeInt que simule el funcionamiento básico de un cajero
// automático. El programa debe permitir al usuario interactuar con diferentes opciones de
// transacciones bancarias mientras la sesión esté activa.
// Requisitos del programa:
//! 1. Inicio de sesión:
// o El programa debe solicitar al usuario un número de identificación
// personal (PIN) para iniciar sesión.
// o Usar un PIN predeterminado (por ejemplo, 1234) para simplificar el
// proceso de autenticación.

// !2. Menú de opciones:
// o Mostrar un menú con las siguientes opciones utilizando la estructura de
// control Según:
// 1. Consultar saldo
// 2. Depositar dinero
// 3. Retirar dinero
// 4. Salir
// !3. Funcionalidad del menú:
// o Consultar saldo: Mostrar el saldo actual de la cuenta.
// o Depositar dinero: Permitir al usuario ingresar un monto para depositar y
// sumar al saldo.
// o Retirar dinero:
//  Solicitar al usuario un monto para retirar.
//  Verificar si el saldo es suficiente para realizar la transacción.
//  Restar el monto del saldo si es posible.
//  Mostrar un mensaje de error si el saldo es insuficiente.
// o Salir: Terminar la sesión del cajero automático.
// 4. Mantenimiento de sesión:
// o Utilizar una estructura de control Repetir...Hasta Que para mantener
// la sesión activa hasta que el usuario elija la opción de salir.

//! 5. Validaciones:
// o Asegurarse de que el usuario no pueda ingresar montos negativos al
// depositar o retirar.
// o Mostrar mensajes apropiados para las acciones realizadas.

// !Ejemplo de flujo del programa:
// 1. El usuario inicia sesión ingresando su PIN.
// 2. Se muestra el menú de opciones.
// 3. El usuario selecciona "Consultar saldo" y el programa muestra el saldo actual.
// 4. El usuario selecciona "Depositar dinero", ingresa un monto, y el saldo se
// actualiza.
// 5. El usuario selecciona "Retirar dinero", ingresa un monto, y el programa verifica
// si el saldo es suficiente antes de actualizarlo.

// IES LA COCHA – EXTENSIÓN ÁULICA JB ALBERDI - PROGRAMACIÓN I - PROF. Cristian Collante

//! 6. El usuario selecciona "Salir" y el programa termina.
// Consideraciones adicionales:
//  Escribir comentarios en el código para explicar las diferentes secciones y
// funcionalidades del programa.
//  Mantener un código limpio y organizado para facilitar la comprensión y

// mantenimiento.




// Variables
const pincorrecto = 12345;
let saldo = 0;
let sesionactiva = true;

// Mostrar menú
function mostarmenu() {
    console.log("Menú de opciones");
    console.log("1. Consultar saldo");
    console.log("2. Depositar dinero");
    console.log("3. Retirar dinero");
    console.log("4. Salir");
}

// Consultar saldo
function consultarsaldo() {
    console.log(`Saldo actual: ${saldo.toFixed(2)}`);
}

// Proceso para depositar
function depositar(monto) {
    if (monto > 0) {
        saldo += monto;
        console.log(`Monto depositado. Nuevo saldo: ${saldo.toFixed(2)}`);
    } else {
        console.log("El monto debe ser positivo");
    }
}

// Función de retiro de dinero
function retirodinero(monto) {
    if (monto > 0) {
        if (monto <= saldo) {
            saldo -= monto;
            console.log(`Monto retirado. Su saldo actual es de ${saldo.toFixed(2)}`);
        } else {
            console.log("Fondos insuficientes");
        }
    } else {
        console.log("El monto debe ser positivo");
    }
}

// Gestionar el cajero automático
function cajeroautomatico() {
    const piningresado = prompt("Ingrese su PIN");
    if (parseInt(piningresado) !== pincorrecto) {
        console.log("PIN Incorrecto. Fin del programa");
        return;
    }

    // El bucle continuará mientras sesionactiva sea verdadero
    while (sesionactiva) {
        mostarmenu();
        const opcion = prompt("Seleccione una opción:");

        switch (parseInt(opcion)) {
            case 1:
                consultarsaldo();
                break;
            case 2:
                const montodeposito = parseFloat(prompt("Ingrese un monto a depositar:"));
                depositar(montodeposito);
                break;
            case 3:
                const montoretiro = parseFloat(prompt("Ingrese un monto a retirar:"));
                retirodinero(montoretiro);
                break;
            case 4: // Corregido de `case 2` a `case 4`
                console.log("Gracias por usar el cajero automático");
                sesionactiva = false;
                break;
            default:
                console.log("Opción no válida, intente de nuevo");
                break;
        }
    }
}

