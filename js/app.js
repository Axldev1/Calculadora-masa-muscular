/* ingresar peso y altura */
let height = 1.80 /* en metros */
let weight = 55 /* en kilos */

let users = []


/* validacion de datos de peso y altura */
const DataValidation = (height, weight)  => {
    while (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        console.log("Please enter a valid weight or a valid weight")
        return;
    }
}
const user = {
  weight: parseFloat(weight),
  height: parseFloat(height),
}
users.push(user)
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
            console.log("low weight")
        }
        else if(imc >= 18.5 && imc <= 24.9){
            console.log("normal weight")
        }
        else if(imc >= 25 && imc <= 29.9) {
            console.log("overweight")
        }
        else{
            console.log("obesity")
        }
    }
}
IMC(height, weight);