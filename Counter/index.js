const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const countLabel=document.getElementById("countLabel");

let count=0;

incrementButton.addEventListener('click',( )=> {
    count++;
    countLabel.textContent=count
})

decrementButton.addEventListener('click',( )=> {
    count--;
    countLabel.textContent=count
})

resetButton.addEventListener('click',( )=> {
    count=0;
    countLabel.textContent=count
})

