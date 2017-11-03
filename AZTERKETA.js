var numaleat = NULL;

function generarNumero() {
  numaleat = Math.round(Math.random() * 50);
  alert("El numero aleatorio es: " + numaleat);
}

function comprobarNumero() {
  var celda = 0;
  numIntroducido = document.getElementById("mi_numero").value;

  if (numIntroducido == numaleat) {
    comprobacion = green;
  } else {
    comprobacion = red;
    celda = celda + 1;
  }
}
    // numaleat = Math.round(Math.random() * nummax);
