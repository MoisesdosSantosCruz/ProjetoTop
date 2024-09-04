alert('Seja bem vindo ao nosso Site !!!');

function trocar(cor) {
  document.body.style.background = cor; 
}


function mudar() {
  let novo = document.getElementById('idNome'); //Pegar elemento da Index por ID
  document.getElementById('titulo'); //Pegar elemento 
  document.getElementById('titulo').innerHTML = novo.value;
}

function inserir() {
  let numero = document.getElementById('posicao').value - 1;
  let novo = document.getElementById('novo').value;
  document.getElementsByClassName('time')[numero].innerHTML = novo;
}
