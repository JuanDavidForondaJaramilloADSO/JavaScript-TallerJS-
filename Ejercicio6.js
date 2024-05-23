function some(array, callback) {
  // Itera sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Verifica si el callback devuelve true para algún elemento
    if (callback(array[i])) {
      return true;
    }
  }
  // Si el callback devuelve false para todos los elementos, devuelve false
  return false;
}

// Ejemplo de uso
const arrayEjemplo = [1, 3, 5, 7, 9];
// Definir una función de callback que verifica si un elemento es par
function callbackEjemplo(elemento) {
  return elemento % 2 === 0;
}

// Verificar si al menos uno de los elementos del array es par utilizando la función some
const algunoEsPar = some(arrayEjemplo, callbackEjemplo);
console.log(algunoEsPar); // Devuelve false, ya que ninguno de los elementos es pa