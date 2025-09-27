const myInputElement = document.getElementById('myInput');
const myButtonElement = document.getElementById('myButton');
const myVerdictElement= document.getElementById('myVerdict');

myInputElement.addEventListener("input", () => {
  let value = Number(myInput.value);
  if (value < 0) myInput.value = 0;
  if (value > 150) myInput.value = 150;
});


myButtonElement.addEventListener('click',()=>{

  let age= myInputElement.value;
  myVerdictElement.classList.remove('hidden');
  myVerdictElement.classList.add('active');

  if (age<18) {
    myVerdictElement.textContent= "You are not Allowed to Enter!"
  } else if(age >80) {
    myVerdictElement.textContent = "You are too old to enter.\nPlease head home safely"
    myVerdictElement.style.color='blue'
  } else {
    myVerdictElement.textContent = "You are Welcome to Enter!"
    myVerdictElement.style.color='green'
  }
});