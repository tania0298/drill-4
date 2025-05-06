function solicitarNumero() {
    let entrada;
    let numero;
  
    do {
      entrada = prompt("¿Cuántos números de la serie de Fibonacci quieres ver?");
      numero = Number(entrada);
  
      if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)) {
        alert("Por favor, introduce un número entero positivo válido.");
      }
    } while (isNaN(numero) || numero < 1 || !Number.isInteger(numero));
  
    return numero;
  }
  
  function generarFibonacci(n) {
    let serie = [];
  
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        serie.push(0);
      } else if (i === 1) {
        serie.push(1);
      } else {
        serie.push(serie[i - 1] + serie[i - 2]);
      }
    }
  
    return serie;
  }
  
  const cantidad = solicitarNumero();
  const serieFibonacci = generarFibonacci(cantidad);
  
  // Mostrar por el DOM
  document.getElementById("resultado").textContent = `Serie de Fibonacci (${cantidad}): ${serieFibonacci.join(", ")}`;
  
  // También mostrar en consola
  console.log(`Serie de Fibonacci (${cantidad}): ${serieFibonacci.join(", ")}`);