function obtenerMatriz(contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  const filas = contenedor.getElementsByClassName('fila');
  const matriz = [];

  for (let i = 0; i < filas.length; i++) {
      const inputs = filas[i].getElementsByClassName('matriz__input');
      const fila = [];

      for (let j = 0; j < inputs.length; j++) {
          fila.push(parseInt(inputs[j].value) || 0);
      }

      matriz.push(fila);
  }

  return matriz;
}

function sumarMatrices() {
  const matriz1 = obtenerMatriz('cuadro1');
  const matriz2 = obtenerMatriz('cuadro2');

  if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      return "Las matrices deben tener las mismas dimensiones para sumarse.";
  }

  const resultado = [];

  for (let i = 0; i < matriz1.length; i++) {
      resultado.push([]);
      for (let j = 0; j < matriz1[0].length; j++) {
          resultado[i].push(matriz1[i][j] + matriz2[i][j]);
      }
  }

  return resultado;
}

function generarCuadros(filas, columnas, contenedor) {
  for (let i = 0; i < filas; i++) {
      const fila = document.createElement('div');
      fila.className = 'fila';
      for (let j = 0; j < columnas; j++) {
          const input = document.createElement('input');
          input.type = 'text';
          input.className ='matriz__input';
          fila.appendChild(input);
      }
      contenedor.appendChild(fila);
  }
}

function Generar() {
  const nFilas = parseInt(document.getElementById('nFilas').value);
  const nCol = parseInt(document.getElementById('nCol').value);
  
  const matricesContenedor = document.getElementById('matrices');
  matricesContenedor.innerHTML = '';

  const cuadro1 = document.createElement('div');
  cuadro1.id = 'cuadro1';
  cuadro1.className = 'matriz';
  generarCuadros(nFilas, nCol, cuadro1);
  matricesContenedor.appendChild(cuadro1);

  const cuadro2 = document.createElement('div');
  cuadro2.id = 'cuadro2';
  cuadro2.className = 'matriz';
  generarCuadros(nFilas, nCol, cuadro2);
  matricesContenedor.appendChild(cuadro2);
}

function Sumar() {
  const resultado = sumarMatrices();
  const resultadoDiv = document.getElementById('resultado');

  if (Array.isArray(resultado)) {
      resultadoDiv.textContent = "Resultado de la suma: " + JSON.stringify(resultado);
  } else {
      resultadoDiv.textContent = resultado;
  }
}
