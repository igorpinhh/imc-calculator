const btn = document.getElementById("btn");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("imc");

btn.addEventListener("click", function () {

  let alturaCm = altura.value / 100;
  const altQuad = alturaCm * alturaCm;
  const imcFloat = peso.value / altQuad;
  const imc = imcFloat.toFixed(2);

  const imgNova = () => {
    const img = document.createElement("img");
    img.classList.add("img-resultado");
    resultado.appendChild(img);
    
  if(document.getElementById('homem').checked) {
    img.setAttribute("src", "img/man.png");
  } else if(document.getElementById('mulher').checked) {
    img.setAttribute("src", "img/girl.png");
  }else if(document.getElementById('outro').checked) {
    img.setAttribute("src", "img/people.png");
  }
}

const status = document.getElementById("status");
resultado.innerHTML = imc;

  if (imc <= 18.5) {
    status.innerHTML = "Você está abaixo do seu peso ideal" + '<span class="cor-secundaria">!!!</span>';
    imgNova();
  } else if (imc <= 24.9) {
    status.innerHTML = "Seu peso está ótimo" + '<span>!!!</span>';
    imgNova();
  } else if (imc <= 29.9) {
    status.innerHTML = "Você está em sobrepeso" +'<span>!!!</span>';
    imgNova();
  } else if (imc >= 30.0) {
    status.innerHTML = "Você está em obesidade" +'<span>!!!</span>';
    imgNova();
  }
});
