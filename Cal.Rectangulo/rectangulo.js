// !Escribe un programa que pregunte al usuario los dos lados de un rectángulo y presente
// !por pantalla el cálculo del perímetro (suma de los lados) y el área (base por altura).





function calcularresultado() {
    const lado1 = parseInt(document.getElementById("lado1").value);
    const lado2 = parseInt(document.getElementById("lado2").value);

    const perimetro = 2 * (lado1 + lado2);
    const area = lado1 * lado2;

    document.getElementById('resultadorectangulo').innerText = `El perímetro es: ${perimetro} y el área es ${area}`;
}