// Form elements
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

// Radio buttons
const radioType = document.querySelectorAll('input[name="type"]');
const radioBulding = document.querySelectorAll('input[name="building"]');


const basePrice = 2000;
const totalPriceElement = document.querySelector('#total-price');

// Binding rande with a text field 
// Listening to the input event 
squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
})


// Binding a text field with range
squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value;
})


function calculate (){
   let totalPrice =  basePrice * parseFloat(squareInput.value);
  

for (const radio of radioType){
    if (radio.checked === true){
       totalPrice = totalPrice * parseFloat(radio.value);
   }
}

for (const radio of radioBulding){
    if (radio.checked === true){
       totalPrice = totalPrice * parseFloat(radio.value);
    }
}



const formatter = new Intl.NumberFormat('ru');
formatter.format(totalPrice);

  totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();


for (const input of inputs){
    input.addEventListener('input', function(){
    calculate();
    })
}














