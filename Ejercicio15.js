// Creamos una nueva Promise
const miPromise = new Promise((resolve, reject) => {
  // Usamos setTimeout para simular un retraso de 2 segundos
  setTimeout(() => {
    // Rechazamos la Promise después de 2 segundos
    reject("Promise rechazada");
  }, 2000);
});

// Manejamos el rechazo de la Promise
miPromise.catch((error) => {
  // Imprimimos el error cuando la Promise es rechazada
  console.log("Error:", error);
});