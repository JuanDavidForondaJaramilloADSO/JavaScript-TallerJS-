async function cargarDatosJSON() {
  try {
    const response = await fetch('Datos23.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    const data = await response.json();
    console.log('Datos cargados exitosamente:', data);
  } catch (error) {
    console.error('Error al cargar los datos JSON:', error.message);
  }
}

cargarDatosJSON();
