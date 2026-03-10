let input_1 = document.getElementById("num1");
let input_2 = document.getElementById("num2");
let form = document.querySelector("form");
let operator = document.getElementById("operator");
let answer_field = document.getElementById('answer');

// this function listens for a click on the button and calculates based on the 
// satisfied condition
// prevents form from submitting prematurely
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(input_1.value, input_2.value);

  if (operator.value === "add") {
    let answer = (Number(input_1.value) + Number(input_2.value));
    answer_field.value = answer; 
  }

  else if (operator.value === 'subtract'){
    let answer = (Number(input_1.value) - Number(input_2.value));
    answer_field.value = answer; 
  }
  else if (operator.value === 'multiply'){
    let answer = (Number(input_1.value) * Number(input_2.value));
    answer_field.value = answer; 
  }
  else if (operator.value === 'divide'){
    let answer = (Number(input_1.value) / Number(input_2.value));
    answer_field.value = answer; 
  }
});

// rotate calculator to straighten it
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e) => {

  // ignore clicks on inputs, selects, buttons
  if (e.target.tagName === "INPUT" ||
      e.target.tagName === "SELECT" ||
      e.target.tagName === "BUTTON"){
    return;
  } else calculator.classList.toggle("straight");
});