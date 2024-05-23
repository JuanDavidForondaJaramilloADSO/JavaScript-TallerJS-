// Definimos una función asincrónica usando async
async function operacionAsincronica() {
  // Utilizamos await para esperar 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Después de esperar, devolvemos la cadena "Operación completada"
  return "Operación completada";
}

// Llamamos a la función asincrónica
operacionAsincronica().then((resultado) => {
  // Imprimimos el resultado cuando la operación se completa
  console.log(resultado);
});