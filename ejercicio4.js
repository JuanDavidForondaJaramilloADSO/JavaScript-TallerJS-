function filter(array, callback) {
  const elementosFiltrados = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      elementosFiltrados.push(array[i]);
    }
  }
  return elementosFiltrados;
}

const arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8];
function callbackEjemplo(elemento) {
  return elemento % 2 === 0;
}

const elementosFiltrados = filter(arrayEjemplo, callbackEjemplo);
console.log(elementosFiltrados);
