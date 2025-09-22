const myTextElement = document.getElementById('myText');
const myButtonElement= document.getElementById('myButton');
const VerdictElement=document.getElementById('Verdict');


myButtonElement.addEventListener('click', () => {
  let age = myTextElement.value;

  if(age<0){
    VerdictElement.textContent = 'Please enter a Valid Age'
  }
  else if(age<18){
    VerdictElement.textContent = 'You are too Young Bro!' 
  }
  else if(age>=100){
    VerdictElement.textContent = 'You are too Old gramps!' 
  }
  else if(age>=18){
    VerdictElement.textContent = 'Welcome! You may enter.' 
  }
  
  else{
    VerdictElement.textContent = 'Please Enter a Valid Age' 
  }
})

