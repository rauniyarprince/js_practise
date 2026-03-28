const buttons = document.querySelectorAll('.button') 
// select all elements with class "button" (returns a NodeList)

buttons.forEach(function (button) {
// looping through each button

  console.log(button); 
  // printing each button in console

  button.addEventListener('click',function(e){
  // adding click event on each button 

    console.log(e); 
    // logs the full event object

    console.log(e.target); 
    // shows the element that was actually clicked

    const body = document.body
    // selecting body directly (correct way)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
      // if grey button is clicked, set background to grey
    }

    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id // e.target is used for detect the button which you clicked 
    }

    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id 
    }

    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id 
    }

    if(e.target.id === 'brown'){
      body.style.backgroundColor = e.target.id 
    }
  })
});