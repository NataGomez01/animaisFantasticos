import AnimaNumeros from "./numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.Total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResposta = await fetch(url);
      const animaisJSON = await animaisResposta.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaNumeros();
    } catch (erro) {
      console.log(erro);
    }

    return criarAnimais;
  }
}
