function findIndex(array, callback) {
  // Iterar sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento como argumento
    if (callback(array[i])) {
      // Si el callback devuelve true, devolver el índice del elemento
      return i;
    }
  }
  // Si ningún callback devuelve true, devolver undefined
  return undefined;
}

// Ejemplo de uso
const arrayEjemplo = [1, 3, 5, 7, 9];
// Definir una función de callback que verifica si un elemento es mayor que 5
function callbackEjemplo(elemento) {
  return elemento > 5;
}

// Encontrar el índice del primer elemento mayor que 5 en el array utilizando la función findIndex
const indiceMayorQueCinco = findIndex(arrayEjemplo, callbackEjemplo);
console.log(indiceMayorQueCinco); // Devuelve 3, el índice del elemento 7 en el array