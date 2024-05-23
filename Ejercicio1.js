imprimirNumeros(1, 100);


function imprimirNumeros(desde, hasta) {   //Se toman dos parametros desde y hasta
  let currentNumber = desde;

  function imprimirNumero() {
    console.log(currentNumber);
    if (currentNumber < hasta) {
      currentNumber++;
      setTimeout(imprimirNumero, 1000); //SetTimeout se llama a si misma haciendo que cada 1 segundo se repita hasta llegar a 100
    }
  }

  imprimirNumero();
}

imprimirNumeros(1, 100);