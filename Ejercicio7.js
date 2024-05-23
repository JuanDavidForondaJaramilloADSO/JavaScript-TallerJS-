function find(array, callback) {
  // Iterar sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento como argumento
    if (callback(array[i])) {
      // Si el callback devuelve true, devolver el elemento
      return array[i];
    }
  }
  // Si ningún callback devuelve true, devolver undefined
  return undefined;
}

// Ejemplo de uso
const arrayEjemplo = [1, 3, 5, 7, 9];
// Definir una función de callback que verifica si un elemento es par
function callbackEjemplo(elemento) {
  return elemento % 2 === 0;
}

// Encontrar el primer elemento par en el array utilizando la función find
const primerElementoPar = find(arrayEjemplo, callbackEjemplo);
console.log(primerElementoPar); // Devuelve undefined, ya que no hay elementos pares en el array