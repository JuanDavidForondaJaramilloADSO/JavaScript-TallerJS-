// Definición de la función ejecucioncallback que acepta un array y un callback
function ejecucioncallback(array, callback) {
  // Creamos un array vacío para almacenar los resultados
  let resultados = [];

  // Iteramos sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Llamamos al callback con el elemento actual y guardamos el resultado en la variable resultado
    let resultado = callback(array[i]);
    // Agregamos el resultado al array de resultados
    resultados.push(resultado);
  }

  // Retornamos el array de resultados
  return resultados;
}

// Ejemplo de array
const arrayEjemplo = [1, 2, 3, 4, 5];

// Definición de la función de callback
function callbackEjemplo(elemento) {
  // Multiplicamos cada elemento por 2 y retornamos el resultado
  return elemento * 2;
}

// Llamamos a la función ejecucioncallback con el array de ejemplo y la función de callback
const resultadosFinales = ejecucioncallback(arrayEjemplo, callbackEjemplo);

// Imprimimos los resultados finales
console.log(resultadosFinales);
