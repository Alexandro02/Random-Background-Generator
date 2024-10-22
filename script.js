// Get button, body and the input element
let body = document.querySelector('body')
let btn = document.querySelector('.btn')
let hexColor = document.querySelector('#hex-color')

// Array of hex values
const hexValues = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
]

// Function to generate a random hex value
function generateHex() {
  let hex = ''

  // Loop trough array of hex values to get all of the possible values
  for (let i = 0; i < 6; i++) {
    // Get a random index of no more tha the lenght of the hexValues array
    let randomIndex = Math.floor(Math.random() * hexValues.length)
    // Add the values that are obtained from the random index
    hex += hexValues[randomIndex]
  }
  // Return the hex number
  return `#${hex}`
}


// Use addEventListener to listen for a click event on the button
btn.addEventListener('click', function () {
  // Apply hex color to the body background
  body.style.backgroundColor = `${generateHex().toString()}`
  // Set the value of the hex color to the P element
  hexColor.innerHTML = `${generateHex().toString()}`
});