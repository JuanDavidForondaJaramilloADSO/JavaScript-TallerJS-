function dropWhile(array, callback) {
  // Encontrar el índice del primer elemento para el cual el callback devuelve false
  let dropIndex = 0;
  while (dropIndex < array.length && callback(array[dropIndex])) {
    dropIndex++;
  }
  // Devolver un nuevo array con los elementos a partir del índice dropIndex
  return array.slice(dropIndex);
}

// Ejemplo de uso
const arrayEjemplo = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// Definir una función de callback que verifica si un elemento es impar
function callbackEjemplo(elemento) {
  return elemento % 2 !== 0;
}

// Crear un nuevo array eliminando los elementos iniciales mientras sean impares utilizando la función dropWhile
const nuevoArray = dropWhile(arrayEjemplo, callbackEjemplo);
console.log(nuevoArray); // Devuelve [2, 4, 6, 8, 10], ya que elimina los elementos iniciales impares