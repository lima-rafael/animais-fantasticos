import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  //cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencerAnimais(animal){
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //Anima os números de cada animal
  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
    animaNumeros.init();
  }

  //Puxa os animais através de um arquivo json e cria cada animal utilizando createAnimais
  async function criarAnimais() {
    try {
      //Fetch, espera a resposta e transforma a resposta em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //Apóis a transformação de json, ativa as funções para preencher e anumar os números
      animaisJSON.forEach(animal => preencerAnimais(animal));
      animaAnimaisNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }

  return criarAnimais()
}