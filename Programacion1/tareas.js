//! Que es una varible? Son cajas que podemos almacenar datos temporalmente 




//!crea un programa que solicite al usurio su nombre y luego lo salude por su nombre
// let datousuario = prompt("Ingrese su nombre");
// alert( "Hola "   +   datousuario);



//! Teniendo las 3 notas trimestrales de un estudiante, mostrar su nota final sabiendo que
// !esta misma se obtiene calculando el promedio de sus calificaciones.


// const nota1 =  Number (prompt("ingrese la nota del 1er trimestre"));
// const nota2 =  Number (prompt("ingrese la nota del 2do trimestre"));
// const nota3 =  Number (prompt ("ingrese la nota del 3er trimestre"));
// const Notafinal = ( nota1 + nota2 + nota3) /3;
//  alert(Notafinal);



//! Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
// !un mensaje "Promocionado".

//   const nota1 =  Number (prompt("ingrese la nota del 1er trimestre"));
//   const nota2 =  Number (prompt("ingrese la nota del 2do trimestre"));
//   const nota3 =  Number (prompt ("ingrese la nota del 3er trimestre"));
//   const promedio = ( nota1 + nota2 + nota3) /3;
//   console.log(promedio);

//   if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
//       alert("solo se admiten numeros")
//   } else {if(promedio >= 7){
//       alert("Estas promocionado")
//   }else{ alert("Estas desaprobado")}

//   }


// !Realizar un programa que solicite la carga por teclado de dos números, si el primero es
// !mayor al segundo informar su suma y diferencia, en caso contrario informar el
// !producto y la división del primero respecto al segundo.



//   let number = parseInt(prompt('Ingrese el primer numero'));
//   let number2 = parseInt(prompt(`igrese el segundo numero`))

//   if(number > number2){
//     console.log('el numero es mayor ')}
//     else if (number< number2) {
//       console.log('El numero es menor ')
//     } else{
//       console.log('los numeros son iguales')
//     }

//    console.log(number * number2)
//   console.log( number / number2)

//!Calcular cual de los tres numeros es mayor 
// let numero = prompt('Ingrese el primer numero ')
// let numero2 = prompt('Ingrese el segundo numero ')
// let numero3 = prompt('Ingrese el Tercero numero ')

// if (numero === numero2 || numero === numero3 || numero2 === numero3){
//     alert('ha ingsado valores iguales! Por favor ingrese valores distintos');
//     return;
// }

// let mayor = Math.max(numero, numero2, numero3);
// alert("el mayor de los tres valores es:" + mayor)


 //! pedir un numero al ususrio y verificar si es par o impar

//  let  numero = parseInt(prompt("ingrese cualquier numero"));
//  if (numero%2 == 0){
//    console.log("el numero es par")
//  } else
//  {
//     console.log("El numero es impar")
//  }


// !Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un
//! mensaje indicando si el número tiene uno o dos dígitos.
// !(Tener en cuenta que condición debe cumplirse para tener dos dígitos un número
//! entero).

//  let numeroo = prompt("ingrese un numero")
//  if (numeroo >= 1  && numeroo <= 9){
//      console.log("El numero tiene un digito")
//  } else if  ( numeroo >=10 &&   numeroo <= 99) { 
//     console.log("El numero tiene dos digitos")
//  } else console.log("Por favor ingresa un numero valido de 1 a 99.")







//! Confeccionar un programa que permita cargar un número entero positivo de hasta
// !tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. Mostrar un
// !mensaje de error si el número de cifras es mayor.

//  let numero = prompt("ingrese un numero")
//  if (numero >= 1  && numero <= 9){
//      console.log("El numero tiene una cifra")
//  } else if  ( numero >=10 &&   numero <= 99) { 
//      console.log("El numero tiene dos digitos")
//   } else  if (numero >= 100 && numero <= 999){
//       console.log("El numero tiene 3 cifras.")}

//   else {console.log("Ingrese un numero valido de 1 a 999")}




// !Conociendo el total de ventas mensual de una empresa. Cuyo porcentaje de ganancia
// !en cada uno de los rubros es:
// !Sanitarios 25%
// !Electricidad 40%
// !Gas 30%
// !Otros 5%

// !SE PIDE
//! a. Mostrar el monto que vendió la empresa en cada uno de sus rubro.


 //? Definimos la función para calcular los montos vendidos
// function calcularMontosVentas(totalVentas) {
 //? Porcentajes de ganancia por rubro
//   const porcentajeSanitarios = 0.25;
//   const porcentajeElectricidad = 0.40;
//   const porcentajeGas = 0.30;
//   const porcentajeOtros = 0.05;

 //? Calculamos los montos vendidos en cada rubro
//   const montoSanitarios = porcentajeSanitarios * totalVentas;
//   const montoElectricidad = porcentajeElectricidad * totalVentas;
//   const montoGas = porcentajeGas * totalVentas;
//   const montoOtros = porcentajeOtros * totalVentas;

//? Devolvemos un objeto con los montos calculados
//   return {
//       Sanitarios: montoSanitarios,
//       Electricidad: montoElectricidad,
//       Gas: montoGas,
//       Otros: montoOtros
//   };
// }

//? Ejemplo de uso
// const totalVentas = 10000; // Total de ventas mensual (ejemplo: $10,000)

//? Llamamos a la función para calcular los montos vendidos
// const montosVentas = calcularMontosVentas(totalVentas);

//? Mostramos los resultados en la consola
// console.log('Monto vendido en Sanitarios:', montosVentas.Sanitarios);
// console.log('Monto vendido en Electricidad:', montosVentas.Electricidad);
// console.log('Monto vendido en Gas:', montosVentas.Gas);
// console.log('Monto vendido en Otros:', montosVentas.Otros);



//! 1) Se ingresan por teclado tres números, si todos los valores ingresados son
//! menores a 10, imprimir en pantalla la leyenda "Todos los números son menores
//! a diez".

// const numero1 = prompt('Ingrese un numero')
// const numero2 = prompt('ingrese el segundo numero')
// const numero3 = prompt('ingrese el tercer numero')

// if (numero1 <= 10 && numero2 <=10 && numero3 <=10){
//     alert('Todos son menores a 10') ;
// } 
//  else {
//     alert('un numero NO es menor a 10')
// }




//! 3) Escribir un programa que pida ingresar la coordenada de un punto en el plano,
//! es decir dos valores enteros x e y (distintos a cero).
//! Posteriormente imprimir en pantalla en que cuadrante se ubica dicho punto.
// !(1o Cuadrante si x > 0 Y y > 0 , 
//! 2o Cuadrante: x < 0 Y y > 0, etc.)



// const cordenadaX = prompt('Ingrese la  cordenada X')
// const cordenadaY = prompt ('ingrese la cordenada Y')

// if (cordenadaX > 0 && cordenadaY >0 ){
//     alert('Se encuentra en el primer cuadrante')
// } else if (cordenadaX < 0 && cordenadaY < 0) {
//     alert('se encutra en el 2do cuadrante')
// }




//! 4) De un operario se conoce su sueldo y los años de antigüedad. Se pide
// !confeccionar un programa que lea los datos de entrada e informe:
//! a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años,
//! otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
//! b)Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años,
// !otorgarle un aumento de 5 %.
// !c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios.



// const sueldo = prompt('Cual es tu sueldo?')
// const antiguedad = prompt ('cuantos años de atiguedad tienes en la empresa?')

// if (sueldo < 500 && antiguedad >=10 ) {

    
    
// }



//! 5) Escribir un programa en el cual: dada una lista de tres valores numéricos
//! distintos se calcule e informe su rango de variación (debe mostrar el mayor y el
// !menor de ellos)



// let maximo = Math.max(1,2,34);
//  console.log("el numero menor es ${maximo}")
// console.log ("el numero mayor es %{maximo}" )







//! 6) Pensar un ejercicio o situación en la que pueda poner en práctica la estructura
// !SEGUN.









// Inicio:El inicio del flujo de programa.

// Ingreso de números: Se muestra un mensaje solicitando al usuario que ingrese tres números.

// Verificación de igualdad: Se verifica si alguno de los números ingresados es igual a otro.

// Si hay números iguales:
// Se muestra un mensaje de alerta indicando que se ingresaron valores iguales y se solicita al usuario ingresar valores distintos.
// Fin del programa.


// Si no hay números iguales:
// Se procede a encontrar el mayor de los tres números.
// Encontrar el mayor: Se utiliza la función Math.max() para encontrar el mayor de los tres números ingresados.
// Mostrar resultado: Se muestra un mensaje de alerta con el resultado, indicando cuál es el mayor de los tres números.
// Fin: Fin del flujo de programa.

// let numero = prompt('Ingrese el primer numero ')
// let numero2 = prompt('Ingrese el segundo numero ')
// let numero3 = prompt('Ingrese el Tercero numero ')

// if (numero === numero2 || numero === numero3 || numero2 === numero3){
//     alert('has ingresado valores iguales! Por favor ingrese valores distintos');
   
// }

// let mayor = Math.max(numero, numero2, numero3);
// alert("el mayor de los tres valores es:" + mayor)




