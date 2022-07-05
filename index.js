
$(document).ready(function(){

  let num1= 0;
  let num2 ="0";
  let operator =null ;
  let total =0;
  updateScreen(total);



$(".button").on("click" , function(event){
let btn = event.target.innerHTML;//Storing the value of user clicks
console.log(btn);

if(btn ==="C"){ //Whne the user decides to cler the sreen the using C
  total = 0;
  num2 ="0";
  clearScreen();
}
else if(btn ==="π"){ // When the user selects π
  num2 = (Math.PI);
  num2 =num2.toFixed(6);
}
else if(btn === "+/-"){
  num2 *= -1; //changes negative to positve and vice versa
}
else if(btn === "."){
  num2 += '.'; //adds a decimal place
}
else if(btn ==="%"){
  num2= num2/100;
}
else if(handleOperator(btn)){ //Process as Operator
  num1= parseFloat(num2); // Changing the the String to integer
  operator = btn;
  num2="";
}
else if(checkNo(btn)){
  if(num2 === "0"){
    num2 = btn;
  }
  else{
    num2= num2 + btn;
  }
}
else if(btn === "="){
  num2 = handleTotal(num1,num2,operator);
  operator =null;
}
  updateScreen(num2);
  displayButton(num2,operator,num1);

}); //Code initiates when user click


$(document).keydown(function(event){
let btn =event.key;//Storing the value of user clicks
console.log(btn);
//$(btn).toggleClass(".chg");
if(btn ==="C" || btn ==="Escape"){ //Whne the user decides to cler the sreen the using C
  total = 0;
  num2 ="0";
  clearScreen();
}
else if(btn ==="π"){ // When the user selects π
  num2 = (Math.PI);
  num2 =num2.toFixed(6);
}
else if(btn === "+/-"){
  num2 *= -1; //changes negative to positve and vice versa
}
else if(btn === "."){
  num2 += '.'; //adds a decimal place
}
else if(btn ==="%"){
  num2= num2/100;
}
else if(handleOperator(btn)){ //Process as Operator
  num1= parseFloat(num2); // Changing the the String to integer
  operator = btn;
  num2="";
}
else if(checkNo(btn)){
  if(num2 === "0"){
    num2 = btn;
  }
  else{
    num2= num2 + btn;
  }
}
else if(btn === "=" || btn ==="Enter"){
  num2 = handleTotal(num1,num2,operator);
  operator =null;
}
  updateScreen(num2);
  displayButton(num2,operator,num1);
}); // Code will inites when user uses keyboard



});

function updateScreen(val){ //this function will print the answer
if(val === ""){
  $(".calc-typed").text(val);
}
else{
  val =parseFloat(val);
  //val =val.toFixed(6);
  $(".calc-typed").text(val);

}

}

function displayButton(val,ope,prev){
val= val.toString();
ope= ope;
prev= prev.toString();
var storeValues = [prev+ope+val];
if(prev !=="" && val !=="" && ope !==null){
$(".calc-operation").text(storeValues.toString());
console.log(storeValues);
}
}


function checkNo(val){
  return !isNaN(val); //this will return wether the input in between 0-9 or not
}


function handleOperator(val){
  return val ==="+" ||val ==="-" ||val ==="/" ||val ==="*" ; //Returning all possible operators
}


function handleTotal(x,y,op){

  x = parseFloat(x);
  y = parseFloat(y);
  console.log("The total is between"+x+op+y);

  if(op ==="+"){
    return (x+y);
  }
  if(op ==="-"){
    return (x-y);
  }
  if(op ==="*"){
    return (x*y);
  }
  if(op ==="/"){
    return (x/y);

  }

}

function clearScreen(){
  $(".calc-operation").text("Clear");
};
