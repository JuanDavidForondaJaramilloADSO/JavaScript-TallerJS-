const promesa1 = new Promise((resolve, reject) => { //Primera promesa 
  setTimeout(() => {
    resolve('Promesa 1 resuelta'); //Le coloco un TimeOut de 1 segundo
  }, 1000);
});

const promesa2 = new Promise((resolve, reject) => { //Segunda promesa
  setTimeout(() => {
    resolve('Promesa 2 resuelta'); //Le coloco un TimeOut de 2 segundos
  }, 2000);
});

const promesa3 = new Promise((resolve, reject) => { //Tercera promesa
  setTimeout(() => {
    resolve('Promesa 3 resuelta');  //Le coloco un TimeOut de 3 segundos
  }, 3000);
}); //Con esto creado hago que se ejecuten ordenadamente para al final poder unirlas


Promise.all([promesa1, promesa2, promesa3]) //Con el promise all verifico si todas las promesas creadas fueron resueltas
  .then((values) => {
    console.log('Todas las promesas han sido resueltas');
    console.log(values); //Imprimos los valores dados en un array
  })
  .catch((error) => { //Utilizo catch para posibles errores
    console.error('Una de las promesas ha fallado:', error); //Verifico si hubo un error al momento de ejecutar las promesas
  });