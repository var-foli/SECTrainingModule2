//return random letter from my name
const anyName = "Varvara"
randIndex = Math.floor(Math.random()*(anyName.length))
console.log(randIndex)
console.log(anyName.toLowerCase().charAt(randIndex))