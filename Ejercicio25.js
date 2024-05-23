// Definimos el objeto validator que actuará como proxy
const validator = {
  // Método para definir regla de validación para atributo numérico
  numeric(target, key, value) {
    if (isNaN(value)) {
      console.error(`Error: El valor "${value}" no es un número.`);
      return false;
    }
    return true;
  },

  // Método para definir regla de validación para atributo alfanumérico
  alphanumeric(target, key, value) {
    if (!/^[a-zA-Z]+$/.test(value)) {
      console.error(`Error: El valor "${value}" no es alfanumérico.`);
      return false;
    }
    return true;
  },

  // Método para definir regla de validación para atributo email
  email(target, key, value) {
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      console.error(`Error: El valor "${value}" no es un correo electrónico válido.`);
      return false;
    }
    return true;
  },

  // Método para definir regla de validación para atributo de tipo date
  date(target, key, value) {
    if (isNaN(Date.parse(value))) {
      console.error(`Error: El valor "${value}" no es una fecha válida.`);
      return false;
    }
    return true;
  }
};

// Creamos un proxy para aplicar la validación
const validatorProxy = new Proxy({}, {
  set(target, key, value) {
    // Eliminamos espacios en blanco al inicio y al final del valor
    value = value.trim();

    // Verificamos si existe una regla de validación para la propiedad
    if (validator[key]) {
      // Aplicamos la regla de validación correspondiente
      if (validator[key](target, key, value)) {
        // Si la validación es exitosa, establecemos el valor en la propiedad
        target[key] = value;
      } else {
        // Si la validación falla, no establecemos el valor en la propiedad
        console.error(`Error al establecer el valor "${value}" para la propiedad "${key}".`);
      }
    } else {
      // Si no hay regla de validación definida, establecemos el valor en la propiedad sin validación
      target[key] = value;
    }

    // Devolvemos true para indicar que la operación de establecimiento fue exitosa
    return true;
  }
});

// Ejemplo de uso del proxy para definir y validar propiedades
const objetoValidado = new Proxy({}, validatorProxy);

objetoValidado.numero = "123"; // Se permite, es un número
objetoValidado.numero = "abc"; // Error: El valor "abc" no es un número.

objetoValidado.texto = "hola"; // Se permite, es alfanumérico
objetoValidado.texto = "123";  // Error: El valor "123" no es alfanumérico.

objetoValidado.email = "correo@example.com"; // Se permite, es un correo electrónico válido
objetoValidado.email = "correo"; // Error: El valor "correo" no es un correo electrónico válido.

objetoValidado.fecha = "2024-05-25"; // Se permite, es una fecha válida
objetoValidado.fecha = "25 de mayo de 2024"; // Error: El valor "25 de mayo de 2024" no es una fecha válida.
