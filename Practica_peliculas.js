
//----------Actividad peliculas-------------//

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]


console.log("Las peliculas son: " + peliculas)

//--------------- Funcion convierte contenido de arreglo a mayusculas
function mayusculas(arreglo){
    let n = arreglo.length
    let arregloNuevo = []
    for(i = 0; i < n; i++){
        arregloNuevo[i]=arreglo[i].toUpperCase()
    }
    return arregloNuevo
}

console.log("Las peliculas en mayusculas son: " + mayusculas(peliculas))

let otrasPeliculas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

//--------------------- Funcion que combina 2 arreglos
function fusionar(arreglo1,arreglo2){
    let n1 = arreglo1.length
    let n2 = arreglo2.length
    for(i = n1; i < n1+n2; i++){
        arreglo1[i]=arreglo2[i-n1]
    }
    return arreglo1
}

let listaCompleta = mayusculas(fusionar(peliculas,otrasPeliculas))

console.log("La lista completa de peliculas es: " + listaCompleta)

//--------------------- Borrando ultimo elemento de la lista y lo guarda en una variable
let respaldo = listaCompleta.pop()
console.log("La lista completa y corregida de peliculas es: " + listaCompleta)

// Compara scores y devuelve un array booleano segun si las calificaciones son iguales o no
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(arreglo1,arreglo2){
    let n1 = arreglo1.length
    let resultados = []
    for(i = 0; i < n1; i++){
        if(arreglo1[i] === arreglo2[i]){
            resultados[i] = true;
            //console.log(true);
        }else{
            resultados[i] = false;
            //console.log(false);
        }
        
    }
    return resultados
}

console.log("Las calificaciones son iguales? " + comparar(asiaScores,euroScores))