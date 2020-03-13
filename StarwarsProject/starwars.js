import { films } from './films.js'
import { people } from './people.js'
import { getLastNumber } from '../StarwarsProject/utils.js'
import { removeChildren } from '../StarwarsProject/utils.js'

console.log("Hi There!  My first Javascript code!")

console.log(document.querySelector('.gallery'))

let gallery = document.querySelector('.gallery')

const maleCharacters = people.filter (person => person.gender === "male")

const femaleCharacters = people.filter (person => person.gender === "female")

const otherCharacters = people.filter (person => person.gender === "n/a" || person.gender == "none" || person.gender == "hermaphrodite")


let maleButton = document.querySelector('#maleButton')

let femaleButton = document.querySelector('#femaleButton')
let otherButton = document.querySelector('#otherButton')

maleButton.addEventListener("click", function (event) {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener("click", function (event) {
    populateDOM(femaleCharacters)
})

otherButton.addEventListener("click", function (event) {
    populateDOM(otherCharacters)
})


function populateDOM (characters) {
removeChildren(gallery)
characters.forEach(person => { 
    let imageNum = getLastNumber(person.url)
    let nameItem = document.createElement("li")
 nameItem.textContent = person.name
 
 let personAnchor = document.createElement("a")
 personAnchor.href= "#"
 let personImg = document.createElement('img')
 personImg.src = `https://starwars-visualguide.com/assets/img/characters/${imageNum}.jpg`

 personImg.addEventListener('error', (event) => {
    personImg.hidden = true
})

personImg.addEventListener("click", function ( event ) {
    console.log('Thanks for clicking!')
})

 personAnchor.appendChild(personImg)
gallery.appendChild(personAnchor)
})
}

