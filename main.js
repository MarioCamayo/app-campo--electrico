let contenedorSalida = document.querySelector('#salida')
let enviar1 = document.querySelector('#enviar')
// let enviar2 = document.querySelector('#texto1')

enviar1.addEventListener('click',enviar)
function enviar(e){
  e.preventDefault()
  // se captura los valores de los inputs de la constante de Coulomb
  let contenedor2 = document.createElement('p');
  contenedor2.style.color = 'white'
  let inputCoulomb1 = parseInt(document.getElementById('coulomb1').value);
  let inputCoulomb2 = parseInt(document.getElementById('coulomb2').value);
  let inputCoulomb3Exponente = parseInt(document.getElementById('coulombExponente').value);
  
  
  //se captura los valores de los inputs la primera carga
  // let contenedor3 = document.createElement('p');
  let inputcargaNumero1 = parseInt(document.getElementById('cargaNumero1').value);
  let inputcargaNumero2 = parseInt(document.getElementById('cargaNumero2').value);
  let inputcargaExponente = parseInt(document.getElementById('cargaExponente').value);

  
  // se captura los valores de los inputs de la distancia
  let inputDistancia = parseInt(document.getElementById('distancia').value);
  let inputDistanciaExponente = parseInt(document.getElementById('distanciaElevada').value);
  
  // se realaiza las operaciones de los valores entrantes
  let elevado1 = Math.pow(inputCoulomb2,inputCoulomb3Exponente);
  let elevado2 = Math.pow(inputcargaNumero2,inputcargaExponente);
  let elevado3 = Math.pow(inputDistancia,inputDistanciaExponente);
  let respuesta2 = (inputCoulomb1 * elevado1) * (inputcargaNumero1 * elevado2) / elevado3 ;
 
  
  // se agrega la respuesta a un contenedor 
  contenedor2.innerText = "La Intensidad del Campo Eléctrico es: " + Math.floor(respuesta2)  + " N/C";
  contenedorSalida.append(contenedor2)
  
}
// se crea el boton borrar
  let formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', function(e){
    e.preventDefault()
    formulario.reset()
  })


  let formularioSumaVectores = document.getElementById('formulario-suma-vectores')
  let btnSumaVectores = document.getElementById('btn-suma-vectores')
  btnSumaVectores.addEventListener('click',sumaVectores)
  function sumaVectores(e){
    e.preventDefault()
    let contenedorSumaVectores = document.createElement('p')

    let valorCampo1 = parseInt(document.getElementById('campo1').value)
    let valorCampo1Exponente = parseInt(document.getElementById('campo1AlCuadrado').value)
    let valorCampo2 = parseInt(document.getElementById('campo2').value)
    let valorCampo2Exponente = parseInt(document.getElementById('campo2AlCuadrado').value)

    let campoTotal1 = Math.pow(valorCampo1,valorCampo1Exponente)
    let campoTotal2 = Math.pow(valorCampo2,valorCampo2Exponente)
    let sumaTotal = campoTotal1 + campoTotal2
    let resultadoFinal = Math.sqrt(sumaTotal)  

      // se agrega la respuesta a un contenedor 
    contenedorSumaVectores.innerHTML = "La Intensidad de Carga Resultante es: " + resultadoFinal + " N/C";
    formularioSumaVectores.append(contenedorSumaVectores)



  }
   

  

  









