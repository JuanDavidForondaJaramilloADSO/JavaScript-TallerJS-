// Creamos una nueva Promise
const miPromise = new Promise((resolve, reject) => {
  // Usamos setTimeout para simular un retraso de 3 segundos
  setTimeout(() => {
    // Resolvemos la Promise después de 3 segundos
    resolve("Promise resuelta");
  }, 3000);
});

// Cuando la Promise se resuelve exitosamente
miPromise.then((mensaje) => {
  // Imprimimos el mensaje cuando se cumple
  console.log(mensaje);
});
