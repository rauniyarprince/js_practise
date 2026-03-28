const form = document.querySelector('form')
// select the form so we can control its submit behavior

form.addEventListener('submit', function(e) {
  e.preventDefault()
  // preventDefault is used to stop page reload
  // because by default form reloads page on submit

  const height = parseInt(document.querySelector('#height').value)
  // get height input value and convert it into number
  // because input value is always string by default

  const weight = parseInt(document.querySelector('#weight').value)
  // same for weight, convert string to number for calculation

  const results = document.querySelector('#results')
  // select the element where result will be displayed

  if (!height || height <= 0 || isNaN(height)) {
    // check if height is empty, 0, negative, or not a number
    // this avoids wrong calculation and errors

    results.innerHTML = 'Please give a valid height'
    // show error message to user
  } 
  else if (!weight || weight <= 0 || isNaN(weight)) {
    // same validation for weight
    // ensures correct input before calculation

    results.innerHTML = 'Please give a valid weight'
    // show error message
  } 
  else {
    // if both height and weight are valid

    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    // height is in cm, so divide by 10000 to convert into meters
    // toFixed(2) is used to limit result to 2 decimal places

    results.innerHTML = `<span>${bmi}</span>`
  }
})