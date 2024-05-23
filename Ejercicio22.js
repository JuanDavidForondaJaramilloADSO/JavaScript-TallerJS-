function processElement(element, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Elemento ${element} procesado después de ${delay} ms`);
    }, delay);
  });
}


async function processList(elements) {
  for (const element of elements) {
    const result = await processElement(element, 1000);
    console.log(result);
  }
}


const elements = [1, 2, 3, 4, 5];
processList(elements);