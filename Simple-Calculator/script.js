<<<<<<< HEAD
let calculation = localStorage.getItem('calculation') || ''; //get it out of the local storage

function updateCalculation(num){
  calculation+=num;
  displayOnscreen();
  localStorage.setItem('calculation',calculation); //stores the value of calculation variable locally
}

function displayOnscreen(){
  document.querySelector('.js-display').innerHTML= calculation;
=======
let calculation = localStorage.getItem('calculation') || ''; //get it out of the local storage

function updateCalculation(num){
  calculation+=num;
  displayOnscreen();
  localStorage.setItem('calculation',calculation); //stores the value of calculation variable locally
}

function displayOnscreen(){
  document.querySelector('.js-display').innerHTML= calculation;
>>>>>>> d4ecf64b1014994c4d4417992d30b644a0e836ce
}