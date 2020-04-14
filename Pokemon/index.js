let pokeContainer = document.querySelector('.pokeContainer')
let startButton = document.querySelector('#startButton')
let newButton = document.querySelector('#newButton')


startButton.addEventListener('click')
console.log('you clicked')
async function getAPIData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  catch (error) {
    console.error(error)
  }
}

function loadPage () {


getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then(
  (data) => {
    for (const pokemon of data.results) {
      getAPIData(pokemon.url).then(
        (pokeData) => {
          populatePokeCard(pokeData)
        }
      )
    }
  }
)
}

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener( 'click', function() {
      pokeCard.classList.toggle('is-flipped')
    })
    let pokeFront = populateCardFront(singlePokemon)
    let pokeBack = populateCardBack(singlePokemon)

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeContainer.appendChild(pokeScene)
}

function populateCardFront(pokeMon) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face card__face--front'
  cardFront.textContent = `${pokeMon.name} ${pokeMon.id}`
  let frontImage = document.createElement('img')
  frontImage.src = `../images/${getImageFileName}.png`
  /* we need a way to replace to call each image possibly with a for each loop then we can loop through the images*/
  cardFront.appendChild(frontImage)
  return cardFront
}

function getImageFileName(pokemon() {
  if (pokemon.id < 10) {
    return `00${pokemon.id}`
  } else if (pokemon.id > 9 && pokemon.id < 100)
  return `0${pokemon.id}`
}
}

function populateCardBack(pokeMon) {
  let cardBack = document.createElement('div')
  cardBack.className = 'card__face card__face--back'
  cardBack.textContent = pokeMon.stats[0].stat.name
  return cardBack
}



function addPokemon () {

}