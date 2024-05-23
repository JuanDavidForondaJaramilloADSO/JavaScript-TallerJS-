function every(array, callback) {
  // Itera sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Verifica si el callback devuelve false para algún elemento
    if (!callback(array[i])) {
      return false;
    }
  }
  // Si el callback devuelve true para todos los elementos, devuelve true
  return true;
}

// Ejemplo de uso
const arrayEjemplo = [2, 4, 6, 8, 10];
// Definir una función de callback que verifica si un elemento es mayor que 1
function callbackEjemplo(elemento) {
  return elemento > 1;
}

// Verificar si todos los elementos del array son mayores que 1 utilizando la función every
const todosSonMayoresQueUno = every(arrayEjemplo, callbackEjemplo);
console.log(todosSonMayoresQueUno);