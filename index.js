const displayCart=document.getElementById("input");
const modalDisplay=document.getElementById("modal");
displayCart.value='0';


function cartQuantity(input){
  let number1=parseFloat(displayCart.value);
  let number2=parseFloat(input);
  let result=parseFloat(number1+number2);

  displayCart.value=result;
}


function reset(){
    displayCart.value=0;
}

function test(){
    if(displayCart.value<0){
        displayCart.value='0';
        modalDisplay.style.display='flex';
    }else return 0;
}

function modal(){
    modalDisplay.style.display='none';
}