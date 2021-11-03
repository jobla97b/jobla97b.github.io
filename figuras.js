// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// triangulo
function calcularPerimetroTriangulo() {
  const inputl1 = parseInt( document.getElementById("InputTriangulol1").value);
  const inputl2 = parseInt(document.getElementById("InputTriangulol2").value);
  const inputB = parseInt(document.getElementById("InputTrianguloB").value);
 



  const perimetroT = perimetroTriangulo(inputl1,inputl2,inputB);
  const resultPP = document.getElementById("ResultPP");
  resultPP.innerText = 'El precio con descuento son: $' + perimetroT;
  // alert(perimetroT);
}

function calcularAreaTriangulo() {
  const inputAL = document.getElementById("InputTrianguloAL");
  const v = inputAL.value;
  const inputB1 = document.getElementById("InputTrianguloB1");
  const v1 = inputAL.value;
  const areaT =  areaTriangulo(v, v1);
  // alert(areaT);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = 'El precio con descuento son: $' + areaT;

  
}

// circulo

const btn_CirArea = document.getElementById('btn-CirArea')
const btn_CirPer = document.getElementById('btn-CirPer')

const P = Math.PI

const cirDiametro = (radio) => radio * 2

const cirPerimetro = (radio) => {
  let diametro = cirDiametro(radio)
  return diametro * PI
}

// const cirArea = (radio) => Math.pow(radio, 2) * P

// const result3 = document.getElementById('main__figuras-result-circulo')

// btn_CirPer.addEventListener('click', function perimetroCirculo() {
//   const radio = document.getElementById('inputCirculo')

//   let data = cirPerimetro(parseFloat(radio.value))
//   result3.innerHTML = `${data.toFixed(2)} cm`
// })

// btn_CirArea.addEventListener('click', function areaCirculo() {
//   const radio = document.getElementById('inputCirculo')

//   let data = cirArea(parseFloat(radio.value))
//   result3.innerHTML = `${data.toFixed(2)} cm^2`
// })