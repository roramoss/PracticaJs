// !Un postulante a un empleo, realiza un test de capacitación, se obtuvo la siguiente
// !información: cantidad total de preguntas que se le realizaron y la cantidad de
// !preguntas que contestó correctamente. Se pide confeccionar un programa que ingrese
// !los dos datos por teclado e informe el nivel del mismo según el porcentaje de
// !respuestas correctas que ha obtenido, y sabiendo que:
// !Nivel máximo: Porcentaje>=90%.
// !Nivel medio: Porcentaje>=75% y <90%.
// !Nivel regular: Porcentaje>=50% y <75%.
// !Fuera de nivel: Porcentaje<50%.


function calcularNivel() {
    const totalPreguntas = parseInt(document.getElementById('totalPreguntas').value);
   const preguntasCorrectas = parseInt(document.getElementById('preguntasCorrectas').value);
    const porcentajeCorrectas = (preguntasCorrectas / totalPreguntas) * 100;

    let nivel;

    if (porcentajeCorrectas >= 90) {
      nivel = "Nivel máximo";
    } else if (porcentajeCorrectas >= 75 && porcentajeCorrectas < 90) {
      nivel = "Nivel medio";
    } else if (porcentajeCorrectas >= 50 && porcentajeCorrectas < 75) {
      nivel = "Nivel regular";
   } else {
      nivel = "Fuera de nivel";
    }

    document.getElementById('resultado').innerText = `El nivel del postulante es: ${nivel}`;
 }
