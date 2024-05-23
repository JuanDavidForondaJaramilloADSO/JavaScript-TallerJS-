function mostrarDatosFiltrados() {
  fetch('datos18.json') // Realizar una solicitud GET para obtener el archivo JSON
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(data => {
      // Filtrar los datos para mostrar solo los nombres que comienzan con "A"
      const nombresConA = data.personas.filter(persona => persona.nombre.startsWith('A'));
      // Mostrar los nombres filtrados en la consola
      console.log('Nombres que comienzan con "A":', nombresConA);
    })
    .catch(error => console.error('Error al cargar los datos o filtrarlos:', error)); // Manejar errores de carga de datos o filtrado
}

// Llamar a la función para mostrar los datos JSON filtrados
mostrarDatosFiltrados();
