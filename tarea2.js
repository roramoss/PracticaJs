//! Mientras/While

//* while usa una condicion para detrminar si se ejecuta o no el bloque de codigo



// 1) Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe
// cuántos tienen notas mayores o iguales a 7 y cuántos menores.


// No salee!!

// let notasmayores = 0;

// let notasmenores = 0;

// let contadornotas = 0;

// while (contadornotas < 10){
//   let nota =  parseFloat (prompt(`ingrese la nota del alumno ${contadornotas + 1}`))
// } if(nota&& nota >= 0 && nota <=10){
//   contadornotas++;1

// }if (nota >= 7) {
//   notasmayores++;
// }else {
//   notasmenores++
// }

// console.log(`notas mayores a 7: ${notasmayores}`);
// console.log(` notas menores a 7: ${notasmenores}`)






// 2) Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura
// promedio de las personas.









//! 3) En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500,
// !realizar un programa que lea los sueldos que cobra cada empleado e informe
// !cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
// !Además, el programa deberá informar el importe que gasta la empresa en
// !sueldos al personal.


// let empleadosmayores300 = 0;
// let empleadosmnoresa300 = 0;
// let totalsueldos= 0;

// let n = prompt("ingrese la catidad de empleados");
// for (let i = 1; i<=n; i++)
//   {
//     let sueldo = prompt(`ingrese el sueldo del empleado ${i}`);
//     if (sueldo >=100 && sueldo <=500){

//       totalsueldos += sueldo;

//       if(sueldo >=100 && sueldo <=300){
// empleadosmnoresa300++;

//       }else if (sueldo > 300){
//         empleadosmayores300++;
//       }
//     }
//   }5

//   console.log(`Empleados con sueldo entre $100 y $300: ${empleadosmnoresa300}`);
// console.log(`Empleados con sueldo mayor a $300: ${empleadosmayores300}`);
// console.log(`Total gastado en sueldos: $${totalsueldos}`);







//! 4) Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc.
// !(No se ingresan valores por teclado).

// let numero = 11;

// for (let i = 0; i < 25; i++) {
//     console.log(numero);
//     numero += 11;
// }





//! 5) Mostrar todos los múltiplos de 8 que hay hasta el valor 500.
//! Debe aparecer en pantalla 8 - 16 - 24, etc.



// for (let i = 8; i <= 500; i += 8) {
//     console.log(i);
// }



//! 6) Realizar un programa que permita cargar dos listas de 15 valores cada una.
// !Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
// !(mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")
// !Tener en cuenta que puede haber dos o más estructuras repetitivas en un
// !algoritmo.
// Inicialización de las listas
// let lista1 = [];
// let lista2 = [];

// // Cargar valores en las listas (asumiendo ingreso manual)
// for (let i = 0; i < 15; i++) {
//     let valorLista1 = parseFloat(prompt(`Ingrese valor ${i + 1} para la Lista 1:`));
//     lista1.push(valorLista1);

//     let valorLista2 = parseFloat(prompt(`Ingrese valor ${i + 1} para la Lista 2:`));
//     lista2.push(valorLista2);
// }

// // Calcular la suma de cada lista
// let sumaLista1 = lista1.reduce((a, b) => a + b, 0);
// let sumaLista2 = lista2.reduce((a, b) => a + b, 0);

// // Comparar las sumas y mostrar el mensaje correspondiente
// if (sumaLista1 > sumaLista2) {
//     console.log("Lista 1 mayor");
// } else if (sumaLista2 > sumaLista1) {
//     console.log("Lista 2 mayor");
// } else {
//     console.log("Listas iguales");
// }




//! 7) Desarrollar un programa que permita cargar n números enteros y luego nos
// !informe cuántos valores fueron pares y cuántos impares.
// !Emplear el operador “%” en la condición de la estructura condicional (este
// !operador retorna el resto de la división de dos valores, por ejemplo 11%2
// !retorna un 1):
// !if (valor%2==0) Si el if da verdadero luego es par.

// let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a cargar:"));
// let pares = 0;
// let impares = 0;

// for (let i = 0; i < cantidadNumeros; i++) {
//     let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
//     if (numero % 2 === 0) {
//         pares++;
//     } else {
//         impares++;
//     }
// }
// 22
// console.log(`Cantidad de números pares: ${pares}`);
// console.log(`Cantidad de números impares: ${impares}`);



//! Ejercitación FOR / PARA

// !1) Confeccionar un programa que lea n pares de datos, cada par de datos corresponde a
// !la medida de la base y la altura de un triángulo. El programa deberá informar:
// !a) De cada triángulo la medida de su base, su altura y su superficie.
// !b) La cantidad de triángulos cuya superficie es mayor a 12.


// let cantidadTriangulos = parseInt(prompt("Ingrese la cantidad de triángulos a procesar:"));
// let contadorSuperficieMayor12 = 0;

// for (let i = 0; i < cantidadTriangulos; i++) {
//     let base = parseFloat(prompt(`Ingrese la base del triángulo ${i + 1}:`));
//     let altura = parseFloat(prompt(`Ingrese la altura del triángulo ${i + 1}:`));

//     let superficie = (base * altura) / 2;
// 33
//     console.log(`Triángulo ${i + 1}:`);
//     console.log(`- Base: ${base}`);
//     console.log(`- Altura: ${altura}`);
//     console.log(`- Superficie: ${superficie}`);

//     if (superficie > 12) {
//         contadorSuperficieMayor12++;
//     }
// }

// console.log(`Cantidad de triángulos cuya superficie es mayor a 12: ${contadorSuperficieMayor12}`);



// !2) Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los
// !últimos 5 valores ingresados.


// let sumaUltimos5 = 0;

// for (let i = 1; i <= 10; i++) {
//     let numero = parseFloat(prompt(`Ingrese el número ${i}:`));1
    
    
//     if (i > 5) {
//         sumaUltimos5 += numero;
//     }
// }

// console.log(`La suma de los últimos 5 números ingresados es: ${sumaUltimos5}`);



//! 3) Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50)

// for (let i = 1; i <= 10; i++) {
//   let resultado = 5 * i;
//   console.log(`5 x ${i} = ${resultado}`);
// }


//! 4) Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la
// !tabla de multiplicar del mismo (los primeros
// !12 términos)
// !Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

//   let numerotabla = prompt("indique el numero de tabla que sea");
//  for (  let i = 0;  i <=10; i++){
//  console.log(`${numerotabla} * ${i} = ${numerotabla * i }`)
//   }





//! 5) Realizar un programa que lea los lados de n triángulos, e informar:
// !a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos
// !lados iguales), o escaleno
// !(ningún lado igual)
// !b) Cantidad de triángulos de cada tipo.
// !c) Tipo de triángulo que posee menor cantidad.

// let cantidadTriangulos = parseInt(prompt("Ingrese la cantidad de triángulos a procesar:"));
// let contadorEquilateros = 0;
// let contadorIsoceles = 0;
// let contadorEscalenos = 0;

// let menorCantidad = Number.MAX_SAFE_INTEGER;
// let tipoMenorCantidad = "";

// for (let i = 0; i < cantidadTriangulos; i++) {
//     let lado1 = parseFloat(prompt(`Ingrese el lado 1 del triángulo ${i + 1}:`));
//     let lado2 = parseFloat(prompt(`Ingrese el lado 2 del triángulo ${i + 1}:`));
//     let lado3 = parseFloat(prompt(`Ingrese el lado 3 del triángulo ${i + 1}:`));

//     if (lado1 === lado2 && lado2 === lado3) {
//         console.log(`Triángulo ${i + 1}: Equilátero`);
//         contadorEquilateros++;
//     } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//         console.log(`Triángulo ${i + 1}: Isósceles`);
//         contadorIsoceles++;
//     } else {
//         console.log(`Triángulo ${i + 1}: Escaleno`);
//         contadorEscalenos++;
//     }
// }

// // Determinar el tipo de triángulo con menor cantidad
// if (contadorEquilateros <= contadorIsoceles && contadorEquilateros <= contadorEscalenos) {
//     tipoMenorCantidad = "Equiláteros";
// } else if (contadorIsoceles <= contadorEquilateros && contadorIsoceles <= contadorEscalenos) {
//     tipoMenorCantidad = "Isósceles";
// } else {
//     tipoMenorCantidad = "Escalenos";
// }
// 3
// console.log(`Cantidad de triángulos equiláteros: ${contadorEquilateros}`);
// console.log(`Cantidad de triángulos isósceles: ${contadorIsoceles}`);
// console.log(`Cantidad de triángulos escalenos: ${contadorEscalenos}`);
// console.log(`Tipo de triángulo con menor cantidad: ${tipoMenorCantidad}`);







// !6) Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el
// !plano.
// !Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al
// !comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.


// let cantidadPuntos = parseInt(prompt("Ingrese la cantidad de puntos a procesar:"));
// let primerCuadrante = 0;
// let segundoCuadrante = 0;
// let tercerCuadrante = 0;
// let cuartoCuadrante = 0;

// for (let i = 0; i < cantidadPuntos; i++) {
//     let x = parseFloat(prompt(`Ingrese la coordenada x del punto ${i + 1}:`));
//     let y = parseFloat(prompt(`Ingrese la coordenada y del punto ${i + 1}:`));

//     if (x > 0 && y > 0) {
//         primerCuadrante++;
//     } else if (x < 0 && y > 0) {
//         segundoCuadrante++;
//     } else if (x < 0 && y < 0) {
//         tercerCuadrante++;
//     } else if (x > 0 && y < 0) {
//         cuartoCuadrante++;
//     }
// }

// console.log(`Cantidad de puntos en el primer cuadrante: ${primerCuadrante}`);
// console.log(`Cantidad de puntos en el segundo cuadrante: ${segundoCuadrante}`);
// console.log(`Cantidad de puntos en el tercer cuadrante: ${tercerCuadrante}`);
// console.log(`Cantidad de puntos en el cuarto cuadrante: ${cuartoCuadrante}`);




// !7) Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
//! a) La cantidad de valores ingresados negativos.
// !b) La cantidad de valores ingresados positivos.
// !c) La cantidad de múltiplos de 15.
// !d) El valor acumulado de los números ingresados que son pares.


// let cantidadNegativos = 0;
// let cantidadPositivos = 0;
// let cantidadMultiplos15 = 0;
// let acumuladoPares = 0;

// for (let i = 0; i < 10; i++) {
//     let valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`));

//     if (valor < 0) {
//         cantidadNegativos++;
//     } else if (valor > 0) {
//         cantidadPositivos++;
//     }

//     if (valor % 15 === 0) {
//         cantidadMultiplos15++;
//     }

//     if (valor % 2 === 0) {
//         acumuladoPares += valor;
//     }
// }

// console.log(`Cantidad de valores ingresados negativos: ${cantidadNegativos}`);
// console.log(`Cantidad de valores ingresados positivos: ${cantidadPositivos}`);
// console.log(`Cantidad de múltiplos de 15: ${cantidadMultiplos15}`);
// console.log(`Valor acumulado de los números pares ingresados: ${acumuladoPares}`);










//! 8) Se cuenta con la siguiente información:
//! Las edades de 5 estudiantes del turno mañana.
// !Las edades de 6 estudiantes del turno tarde.
// !Las edades de 11 estudiantes del turno noche.
// !Las edades de cada estudiante deben ingresarse por teclado.
// !a) Obtener el promedio de las edades de cada turno (tres promedios)
// !b) Imprimir dichos promedios (promedio de cada turno)
// !c) Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de
// !edades mayor.

// // Edades de estudiantes por turno
// let edadesMañana = [];
// let edadesTarde = [];
// let edadesNoche = [];

// // Ingreso de edades para el turno mañana (5 estudiantes)
// for (let i = 0; i < 5; i++) {
//     let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno mañana:`));
//     edadesMañana.push(edad);
// }

// // Ingreso de edades para el turno tarde (6 estudiantes)
// for (let i = 0; i < 6; i++) {
//     let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno tarde:`));
//     edadesTarde.push(edad);
// }

// // Ingreso de edades para el turno noche (11 estudiantes)
// for (let i = 0; i < 11; i++) {
//     let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno noche:`));
//     edadesNoche.push(edad);
// }

// // Calcular promedios de cada turno
// let promedioMañana = calcularPromedio(edadesMañana);
// let promedioTarde = calcularPromedio(edadesTarde);
// let promedioNoche = calcularPromedio(edadesNoche);

// // Mostrar promedios
// console.log(`Promedio de edades del turno mañana: ${promedioMañana}`);
// console.log(`Promedio de edades del turno tarde: ${promedioTarde}`);
// console.log(`Promedio de edades del turno noche: ${promedioNoche}`);

// // Determinar turno con mayor promedio de edades
// if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
//     console.log("El turno mañana tiene un promedio de edades mayor.");
// } else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche) {
//     console.log("El turno tarde tiene un promedio de edades mayor.");
// } else if (promedioNoche > promedioMañana && promedioNoche > promedioTarde) {
//     console.log("El turno noche tiene un promedio de edades mayor.");
// } else {
//     console.log("Hay al menos dos turnos con el mismo promedio de edades mayor.");
// }

// // Función para calcular el promedio de un array de edades
// function calcularPromedio(edades) {
//     if (edades.length === 0) {
//         return 0;
//     }
//     let suma = edades.reduce((a, b) => a + b, 0);
//     return suma / edades.length;
// }





//!Ciclo for

//* el ciclo for es una estructura de control que nos permite repetir un bloque de codigo un numero especificode veces 


// **La sintaxis de for en javaScrip es la siguiente:
//* For (inicializacion;condicion;actualizacion {
// *  codigo a ejecutar
// *})

//* +La inicializacion: se realiza antes que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales
// *+ La condicion: es una expresion booleada que se evalua antes de cara interacion del bucle, Si la expresion se evalua como true, se ejecuta el bloque de codigo dentro del bucle. Si la expresion se evalua como false, el bucle termina.
// *+La actualizacion: para actualizar el valor de la variable de control del bucle despues de cata interaccion. normalmente se incrementa o decrementa el valor de la variable de control de buble.

//! utiliza un for para imprimir del 1 al 10 

// for (let numero= 1 ; numero <= 10; numero++) {
//   console.log (numero)
// }


// * La inicializacion es la declaracion de la variable numero y la asignacion del valor 1
//*  la condicion es que mientras numero <=10, se itera el bucle 
//* la actualizacion es numero++ que incrementa l calor de numero en 1 despues de cada interacion 


//?Incrementado numeros con ++
//*El operador ++ nos permite incrementar el valor de una variable numero en 1. Ejemplo: si tenemos la variable i con el valor 5, 1++ incemeta el valor de 1 , es decir, i pasaria a ser 6

// for (let i= 5; i <= 7; i++){
//   console.log(i)
// }



// for ( let i = 10; i >=0; i--){

//   if (i === 0 ){
//     console.log('Despegue!!!')
//   } else {
//     console.log ( 'Faltan ' + i + 'segundos')
//   }
// }



//?Continue y break
//*al igual que while, for tiene las palabras reservadas contiune y break para controlar el flujo de ejecucion del buble, CONTINUE se usa para saltar a la siguiente iteracion del bucle y breck para salir del bucle.

// for ( let i = 0; i < 10 ; i++){
//   const esPar = i % 2 === 0  
//   if (esPar ){
//     continue

//   } 
//   //* Solo mostramos esta consola si e impar 
//   console.log(i)


//   if (i === 7 ){
//     break
//   }
// }


//?Bucles animados 

//*Imagina que quieres crear la tabla de multiplicar del 1 al 10. Para ello necesitas un bucle que intere del 1 al 10 y dentro de ese buble otro bucle que intere del 1 al 10. esto se puede hacer con dos bucles for animados (uno dentro del otro )


//tablas de multiplicar, me salen todas las tablas y yo solo quiero una

// for( let i = 1; i <=10; i ++){
//   for(let j = 1 ; j <=10; j++){
//     const resultado  = i*j  
//       console.log (i + 'x' + j + '=' + resultado)
    
//   }
// }

//! imprime los numeros pares de 2 a 10

// for (let i = 2 ; i < 10; i++ ){
//   const espar = i % 2  === 0
//   if (espar){
//     console.log(i)
//   }
// }


//!calcula la suma de los numeros del 1 al 100
// let suma=0
// for ( let i = 0 ; i<100; i++){
//   suma +=i;
//   console.log('la suma de los numeros del 1 al 100 es:', suma);

// }


// en este ejercicio va sumando los numeros asi: osea 1 mas 2 es igual a 3, 3 mas 3 es igual a 6, despues 6 mas 4 es igual a 10, despues 10 mas 5 es igual a 15, osea va sumando al resultado el numero que sigue de la lista del 1 al 100



//!Muestra los 10 terminos de la secuencia fibonacci

// let a = 0;
// let b = 1;


// for (let i = 1; i <  10; i++ )
// { console.log(a);
//  let suma = a + b;
//   a=b;
//   b = suma;

// }




//* El anses necesita clasificar a las personas que se acogieron a la jubilacion durante 2012 y 2013, conociendo la edad y años de servicio de una persona determina que tipo de jubilacion le corresponde. tener en cuenta que existen 3 tipos de jubilacion: jubilacion por edad: debe tener  65  años de edad y menos de 30 años de servicio, jubilacion por antiguedad joven: 64 años o meenos de edad y una antiguedad superior a los 30 años, y jubilacion por antiguedadadulta: 65 o mas años de edad y una antiguedad de mas de 30 años. Se pide determinar segun sus datos de entrada que tiepo de jubilacion le corresponde


// function determinarTipoJubilacion(edad, añosServicio) {
//   if (edad >= 65 && añosServicio < 30) {
//       return "Jubilación por Edad";
//   } else if (edad < 65 && añosServicio > 30) {
//       return "Jubilación por Antigüedad Joven";
//   } else if (edad >= 65 && añosServicio > 30) {
//       return "Jubilación por Antigüedad Adulta";
//   } else {
//       return "No corresponde a ninguna categoría de jubilación específica.";
//   }
// }

// let edad = prompt("Ingrese su edad");
// let añosServicio=prompt("igrese sus años de aporte");


// let tipodejubilacion = determinarTipoJubilacion(edad, añosServicio);

// console.log(`tipo de jubilacion: ${tipodejubilacion}`)



//! se ingresaron duplas de valores correpondientes a las coordenadas (x, y) de un punto en el plano cartesiano, mostrar la cantidad de puntos que se hayan ingresado en cada uno de los cuadrantes, el proceso termina al ingresar el par (0,0).


// lo intente hacer y se hace bucles infinitos no entiendo








//!sabiendo la base y la altura de un triangulo, calcular y mostrar su superficie. la formula para que la superficie (b * h /2 ) en caso que la superficie sea mayo a 20 indicar la situacion con un mensaje.


// function calcularSuperficieTriangulo(base, altura) {
//   let superficie = (base * altura) / 2;
//   console.log(`La superficie del triángulo es: ${superficie}`);
//   if (superficie > 20) {
//       console.log("La superficie del triángulo es mayor a 20.");
//   }
// }

// let base = parseFloat(prompt("Ingrese la base del triángulo:"));
// let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
// calcularSuperficieTriangulo(base, altura);




















