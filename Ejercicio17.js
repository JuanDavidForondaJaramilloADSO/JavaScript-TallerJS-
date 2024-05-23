function mostrarDatosJSON() {
  fetch('Datos17.json') // Realizar una solicitud GET para obtener el archivo JSON
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(data => {
      console.log(data); // Mostrar los datos en la consola
    })
    .catch(error => console.error('Error al cargar los datos:', error)); // Manejar errores de carga de datos
}

// Llamar a la función para mostrar los datos JSON
mostrarDatosJSON();
