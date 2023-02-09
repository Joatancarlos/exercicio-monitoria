const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');
const listItem = document.querySelector('li');
const form = document.querySelector('form');



function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

let quarto = getQuarto()

let arr = [quarto]

function getPessoas() {
  return select.options[select.selectedIndex].value;
}

function getData(value) {
  const valueDate = value + 'T03:00:00.000Z';
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}

if (localStorage !== undefined) {
  const li = document.createElement('li')
  const texto = localStorage.texto

  li.innerText = texto

  ol.appendChild(li)
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault()


  const li = document.createElement('li')
  const texto = `Reserva para o dia ${getData(checkin.value)} até o dia ${getData(checkout.value)} Quarto ${getQuarto()} - Para ${getPessoas()} Pessoas - Obs: ${textArea.value}`

  li.innerText = texto

  ol.appendChild(li)
  localStorage.setItem('texto', JSON.stringify(texto))
  console.log(JSON.stringify(texto));

})

btnClear.addEventListener('click', (e) => {
  e.preventDefault()
  const li = document.querySelector('li')
  ol.removeChild(li)
  form.reset()
})