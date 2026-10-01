// Cuadrado
function calcular_cuadrado(operation){
    let lado = document.getElementById('cuadrado');
    let value = lado.value;

    let perimetro = value * 4;
    let area = value * value; 

    if (operation == 'perimetro'){
        alert(perimetro.toFixed(2))
    } else {
        alert(area.toFixed(2))
    }

}

// Triangulo
function calcular_triangulo(operation) {
    let base = document.getElementById('triangulo_base');
    let value_base = base.value;
    
    let altura = document.getElementById('triangulo_altura');
    let value_altura = altura.value;

    var area = (value_base * value_altura) / 2;
    var perimetro = value_base * 3;

    if (operation == 'perimetro'){
        alert(perimetro.toFixed(2))
    } else {
        alert(area.toFixed(2))
    }
}

// Circulo

function calcular_circulo(operation){
    let radio = document.getElementById('circulo');
    let value = radio.value;

    var area = Math.PI * (value * value);
    var perimetro = 2 * Math.PI * value;

    if (operation == 'area'){
        alert(area.toFixed(2))
    } else {
        alert(perimetro.toFixed(2))
    }

}
