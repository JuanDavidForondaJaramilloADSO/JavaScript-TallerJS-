function takeWhile(array, callback) {
  const result = [];
  // Iterar sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento como argumento
    // Si el callback devuelve false, detener la iteración
    if (!callback(array[i])) {
      break;
    }
    // Si el callback devuelve true, agregar el elemento al nuevo array
    result.push(array[i]);
  }
  return result;
}

// Ejemplo de uso
const arrayEjemplo = [1, 2, 3, 4, 5, 6,]