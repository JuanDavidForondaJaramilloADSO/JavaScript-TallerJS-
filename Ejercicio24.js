const targetObject = {
  name: 'John',
  age: 30,
};


const handler = {
  get: function (target, prop) {
    console.log(`Obteniendo propiedad "${prop}"`);
    return target[prop];
  },

  set: function (target, prop, value) {
    console.log(`Estableciendo propiedad "${prop}" a "${value}"`);
    target[prop] = value;
  },

  has: function (target, prop) {
    console.log(`Verificando si la propiedad "${prop}" existe`);
    return prop in target;
  },
};


const proxyObject = new Proxy(targetObject, handler);
console.log(proxyObject.name);
proxyObject.age = 35;
console.log('age' in proxyObject);
console.log(proxyObject.city);
