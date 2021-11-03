// Esto es solo para insertat datos en el array
function lista1(){
  var arrayInput = new Array();
  var inputsValues = document.getElementsByClassName('datoInput'),
  namesValues = [].map.call(inputsValues, function(dataInput){
    arrayInput.push(dataInput.value);
  });

  arrayInput.forEach(function(inputsValuesData){
  const resultPP = document.getElementsByClassName("ResultPP");
  resultPP.innerText = 'El precio con descuento son: $' + inputsValuesData;

  // console.log(inputsValuesData);

  })

 

}
// function datos(){
//   const d = agregarElemento();
  
//   console.log(d);
// }

// function agregarElemento(){
//   const dato = document.getElementById('texto');
//   const val = dato.value;
//   dato.push(val);
// }

// function mostrarArreglo(){
//   const resultado = document.getElementById(resultado);
//   resultado.innerHTML = '';

//   for (const val of datos){
//     let datoParrafo = document.createElement('p');
//     datoParrafo.innerText = val;
//     resultado = appendChild(datoParrafo);
//   }
// }

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
  ]);
  
  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}
