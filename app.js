const screen = document.querySelector('.screen')
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll('.operator')
const controlButtons = document.querySelectorAll('.control')
const equaSgin = document.querySelector('#equa-sign')
let inScreen = ''
let preScreen = ''
let operator = ''



numberButtons.forEach((button) =>{
  button.addEventListener('click', ()=>{
    inScreen += button.value
    screen.innerText = inScreen
  })
})

operatorButtons.forEach((button)=> {
  button.addEventListener('click', () =>{
    if (operator === ''){
      preScreen = inScreen
      inScreen = ''
      screen.innerText = 0
      operator = button.value
      console.log(preScreen)
    }
  })
})

controlButtons[0].addEventListener('click', (button) =>{
  inScreen = ''
  screen.innerText = inScreen
})

controlButtons[1].addEventListener('click', (button) => {
  inScreen = inScreen.toString().slice(0, inScreen.length -1 )
  screen.innerText = inScreen
})



equaSgin.addEventListener('click', ()=> {
  console.log(operator)
  if (operator == '+'){
    inScreen = parseInt(inScreen) + parseInt(preScreen)
  }
  if (operator == '-'){
    inScreen = preScreen - inScreen
  }
  if (operator == '.'){
    inScreen = inScreen * preScreen
  }
  if (operator == '/'){
    inScreen = preScreen/inScreen
  }

  screen.innerText = inScreen
  operator = ''
})

