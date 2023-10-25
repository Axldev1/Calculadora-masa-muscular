/* ingresar peso y altura */
let height = 1.68 /* en metros */
let weight = 55

/* validacion de datos de peso y altura */
const DataValidation = (height, weight)  => {
    while (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        console.log("Please enter a valid weight or a valid weight")
        return;
    }
}
/* calcular el indice de masa corporal */
const IMC = (height, weight) => {
    /* validar datos */
    DataValidation(height, weight);
    /* calcular indice de masa corporal */
    let imc = weight / (height * height)

    /* imprimir el indice de masa corporal redondeado en el caso que sea un numero */
    if (!isNaN(imc)){
        console.log(imc.toFixed(2))
        if (imc < 18.5){
            console.log("Bajo peso")
        }
        else if(imc >= 18.5 && imc <= 24.9){
            console.log("Peso normal")
        }
        else if(imc >= 25 && imc <= 29.9) {
            console.log("sobrepeso")
        }
        else{
            console.log("obesidad")
        }
    }
}
IMC(height, weight);