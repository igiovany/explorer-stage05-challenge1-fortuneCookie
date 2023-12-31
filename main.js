const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')

const closedCookieBtn = document.querySelector('#closedCookie')
const btnReset = document.querySelector('#btnReset')

closedCookieBtn.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', toggleContent)
document.addEventListener('keydown', handleOpenEnter)

const phrasesArray = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
]

function handleOpenClick() {
  content2.querySelector('p').innerText = selectRandomPhrase()
  toggleContent()
}

function handleOpenEnter(event) {
  if (event.key === 'Enter' && content2.classList.contains('hide')) {
    handleOpenClick()
  } else {
    toggleContent()
  }
}

function selectRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrasesArray.length)
  const randomPhrase = phrasesArray[randomIndex];
  return randomPhrase
  // console.log(randomIndex, randomPhrase)
}

function toggleContent() {
  content1.classList.toggle("hide")
  content2.classList.toggle("hide")
}