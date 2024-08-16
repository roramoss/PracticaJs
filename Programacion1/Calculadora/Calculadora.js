
// !Operadoes aritmeticos: suma, resta, divicion, multiplicacion
// !Calculadora:  Realiza un programa que solicite los valores al usuario y realizar las cuatro operaciones basicas de la matematicas

let limpiar = document.getElementById('miformulario').reset();


// !Lo que hago en laa funciones es que llamo al id de cada input con get element 
function Suma (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x + y;
}


function Resta (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(  x - y  );
}


function Multiplicacion (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(  x * y  );
}

function Divicion(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(  x / y  );
}
