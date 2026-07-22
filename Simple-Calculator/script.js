let calculation = localStorage.getItem('calculation') || ''; //get it out of the local storage

function updateCalculation(num){
  calculation+=num;
  displayOnscreen();
  localStorage.setItem('calculation',calculation); //stores the value of calculation variable locally
}

function displayOnscreen(){
  document.querySelector('.js-display').innerHTML= calculation;
}