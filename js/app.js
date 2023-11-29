// Obtener elementos del DOM
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateButton = document.getElementById('calculateButton');
const resultContainer = document.getElementById('resultContainer');

// Cargar usuarios desde localStorage o inicializar array vacio
let users = JSON.parse(localStorage.getItem('users')) || [];

// Función para validar datos
const dataValidation = (height, weight) => {
    return !isNaN(weight) && !isNaN(height) && weight > 0 && height > 0;
}

// Funcion para calcular IMC y mostrar resultado
const calculateIMC = () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (dataValidation(height, weight)) {
        const imc = weight / (height * height);

        console.log(`IMC: ${imc.toFixed(2)}`);

        let resultText = '';
        let resultColor = '';

        if (imc < 18.5) {
            resultText = "Low weight";
            resultColor = 'red';
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultText = "Normal weight";
            resultColor = 'green';
        } else if (imc >= 25 && imc <= 29.9) {
            resultText = "Overweight";
            resultColor = 'yellow';
        } else {
            resultText = "Obesity";
            resultColor = 'red';
        }

        // Mostrar resultado en pantalla con color correspondiente
        resultContainer.innerHTML = `<p style="color: ${resultColor};">${resultText}</p>`;

        // Guardar usuario en el array y en localStorage
        const user = { weight, height, imc, resultText, resultColor };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        console.log("Please enter valid weight and height");
    }
}

// Agregar evento al boton de calcular IMC
calculateButton.addEventListener('click', calculateIMC);
