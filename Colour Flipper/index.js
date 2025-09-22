const newColorBtnElement = document.getElementById('new-colour-button');
const currentColourElement = document.getElementById('current-colour'); //span element

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//  get 1 random hex value from the hexValues array
function getRandomHexValue(){
  const randomIndexPosition = Math.floor(Math.random()* hexValues.length);

  const randomHexValue = hexValues[randomIndexPosition];

  return randomHexValue;
}

// get the 6 random hex values to make a hex string

function getRandomHexString(stringLength){
  let hexString = '';
  for (let i=0; i<stringLength; i++)
  {
    hexString += getRandomHexValue();
  }
  return hexString;
}

newColorBtnElement.addEventListener('click', () =>
{
  const randomHexString= '#'+ getRandomHexString(6);

  document.body.style.setProperty(
    'background-color', randomHexString
  )


  currentColourElement.textContent = randomHexString;
});