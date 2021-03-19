const calculatorDisplay = document.querySelector("#calculator-display");

let firstOperand = ''; 
let secondOperand = ''; 
let operator = ''; 


document.querySelectorAll(".number")
.forEach(numberButton => { 
  numberButton.addEventListener("click", e => { 
    let num = e.target.textContent; 
    if (!operator) { 
      firstOperand += num; 
    } else { 
      secondOperand += num; 
    }
    console.log('firstOperand',firstOperand); 
    console.log('secondOperand',secondOperand); 
  })
})

document.querySelector(".operator")
.addEventListener("click", e => { 

  if (firstOperand) { 
    operator = e.target.textContent; 
  }

})

document.querySelector("#equals")
.addEventListener("click", e => { 

  if (firstOperand && operator && secondOperand) { 
    const answer = calculate(); 
    firstOperand = answer; 
    operator = ''; 
    secondOperand = ''; 
    calculatorDisplay.value = answer; 
  }

})



function calculate() { 
  switch(operator) { 
    case '+': 
      return add(); 
    case '-': 
      return subtract(); 
    case 'x': 
      return multiply(); 
    case '/': 
      return divide(); 
  }
}

function add() { 
  return `${Number(firstOperand) + Number(secondOperand)}`;
}