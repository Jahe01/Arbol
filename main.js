function generarArbolNavidad(filas) {
  for (let i = 0; i < filas; i++) {
    let espacios = ' '.repeat(filas - i);
    let asteriscos = '*'.repeat(i * 2 + 1);
    console.log(espacios + asteriscos);
  }

  // Dibuja el tronco del árbol
  let espacios = ' '.repeat(filas - 1);
  console.log(espacios + '|');
}

// Llama a la función para generar un árbol con 5 filas
generarArbolNavidad(5);
