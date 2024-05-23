async function fetchDataAndManipulate() { //Creo la funcion asincronica
  try {
    const response = await fetch('Datos19.json'); //Utilizo el await para esperar la respuetas de las promesas
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText); //realizo el try catch error
    }
    const data = await response.json();
    const filteredData = data.filter(item => item.name.startsWith('A')); //Filtro los datos
    console.log('Filtered Data:', filteredData); //Imprimo la data filtrada
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error); //Imprimo un posible error
  }
}
fetchDataAndManipulate(); //Ejecuto la funcion