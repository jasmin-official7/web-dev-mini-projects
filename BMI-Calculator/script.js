function heightInput(event){
  if(event.key==='Enter'){
    calculateBMI();
  }
}
function calculateBMI(){
  const inputWeight= document.querySelector('.js-input-weight');
  const inputHeight=document.querySelector('.js-input-height');
  
  let toCalculateWeight= Number(inputWeight.value);
  let toCalculateHeight= Number(inputHeight.value);

  finalCalculation(toCalculateWeight,toCalculateHeight);
}
function finalCalculation(valWeight,valHeight){
  let heightSquare= valHeight**2;
  let finalResult= (valWeight/heightSquare)*10000;
  document.querySelector('.js-result').innerHTML= `BMI: ${finalResult.toFixed(1)}`;

  if(finalResult<18.5){
    document.querySelector('.js-display-description').innerHTML= (`Your BMI is ${finalResult.toFixed(1)}, which means you are underweight.`);
    document.querySelector('.js-display-description').classList.add('css-display-description');
  }else if(finalResult<=22.9){
    document.querySelector('.js-display-description').innerHTML=(`Your BMI is ${finalResult.toFixed(1)}, which means you are in the healthy weight range.`);
    document.querySelector('.js-display-description').classList.add('css-display-description');
  }else if(finalResult<=27.4){
    document.querySelector('.js-display-description').innerHTML=(`Your BMI is ${finalResult.toFixed(1)}, which means you are overweight.`);
    document.querySelector('.js-display-description').classList.add('css-display-description');
  }else{
    document.querySelector('.js-display-description').innerHTML=(`Your BMI is ${finalResult.toFixed(1)}, which means you are obese.`);
    document.querySelector('.js-display-description').classList.add('css-display-description');
  }
}