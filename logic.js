// ARREGLOS -------------------------------------------

var arreglo = [1, "Hola", {}, true, 5.70, null, undefined, ''];

console.log(arreglo.find(function elemento(iterador){
    // console.log(iterador);
    return iterador > 4
}));


console.log(typeof(arreglo[7]), "elemento del arreglo indice 7");

arreglo = null
console.log(arreglo, "mostrar en consola el nuevo tipo de dato en el que se ha convertido arreglo")

/// EJERCICIOS CON ARREGLOS, FUNCIONES, CONDICIONALES, BUCLES

//1. Siempre Hambriento
function siempreHambriento(parametro_arreglo) {
    console.log(parametro_arreglo, "DE QUE TRATA ESTE PARAMETRO?");
    for(let iterador=0; iterador<parametro_arreglo.length; iterador++){

        // console.log(parametro_arreglo, "el parametro true ingreso al ciclo for?");
        if (parametro_arreglo[iterador] == 'comida'){
            console.log("yummy");
        }
        else{
            console.log("Quiero comer");
        }
    }
    return "Hola Mundo";
}
siempreHambriento([3.14, "comida", "pastel", true, "comida", 1000]);
// siempreHambriento();
siempreHambriento([4, 1, 5, 7, 2]);



// 3. Mejor que el promedio

function betterThanAverage(lista) {
    var sum = 0;
    // calcula el promedio
    for(var i=0; i<lista.length;i++){
        sum += lista[i];      // sum = sum + lista[i];
        console.log(sum, "REALMENTE SUMA ESTA SUMANDO?")
        // var promedio = sum/lista.length;
        // console.log(promedio, "HIZO PROMEDIOS POR CADA ITERACION?")
    }
    var promedio = sum/lista.length;
    var count = 0
    // cuenta cuántas variables son mayores que el promedio
    // for(j=0; j<lista.length; j++){
    //     if (lista[j]>promedio){
    //         count ++;
    //     }
    // }
    var j = 0;
    while(j < lista.length){
        if (lista[j]>promedio){
            count ++;
        }
        j++;  
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

