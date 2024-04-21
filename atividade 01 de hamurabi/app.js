

function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert('Por favor, preencha os campos de peso e altura.');
        return;
    }

    let imc = peso / (altura * altura);
    let diagnostico = '';
    let cor = '';

    if (imc < 18.5) {
        diagnostico = 'Abaixo do peso';
        cor = '#9C27B0';
    } else if (imc <= 24.9) {
        diagnostico = 'Peso normal';
        cor = '#4CAF50';
    } else if (imc <= 29.9) {
        diagnostico = 'Sobrepeso';
        cor = '#FFC107';
    } else if (imc <= 34.9) {
        diagnostico = 'Obesidade grau 1';
        cor = '#FF9800';
    } else if (imc <= 39.9) {
        diagnostico = 'Obesidade grau 2';
        cor = '#FF5722';
    } else {
        diagnostico = 'Obesidade grau 3';
        cor = '#795548';
    }

    let resultado = document.getElementById('resultado');
    resultado.innerText = `IMC: ${imc.toFixed(2)}, Diagnóstico: ${diagnostico}`;
    resultado.style.backgroundColor = cor;
}