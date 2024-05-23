// Creamos tres Promises que se resuelven después de 1 segundo con diferentes números
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(30);
  }, 1000);
});

// Encadenamos las tres Promises para sumar los resultados
Promise.all([promise1, promise2, promise3]).then((resultados) => {
  // Sumamos los resultados
  const suma = resultados.reduce((total, numero) => total + numero, 0);

  // Mostramos el resultado final
  console.log("El resultado de la suma es:", suma);
});