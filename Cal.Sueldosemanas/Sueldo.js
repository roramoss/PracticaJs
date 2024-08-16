// !Realizar un programa que informe el sueldo semanal de una persona que trabaja de lunes a
// !viernes, 8 hs por día, consultándole el precio que le pagan por hs.

function calcularSueldo() {
    const precioPorHora = parseFloat(document.getElementById('precioPorHora').value);
    const horasPorDia = 8;
    const diasLaborales = 5; // De lunes a viernes
    const horasSemanales = horasPorDia * diasLaborales;
    const sueldoSemanal = horasSemanales * precioPorHora;

    document.getElementById('resultadosueldo').innerText = `El sueldo semanal es: ${sueldoSemanal.toFixed(2)}`;
  }