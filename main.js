const add = function(a, b) {
    return a + b;
    };

const subtract = function(a, b) {
    return a - b;
    };

const multiply = function (a, b) {
    return a * b;
    };

const divide = function(a, b) {
    return a / b;
};

const operators = {
    '+': function(a, b) { return a + b},
    '-': function(a, b) { return a - b},
    '*': function(a, b) { return a * b},
    '%': function(a, b) { return a / b},
};

// let a = a;
// let b = b;

const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");

numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function() {
        display.textContent += numberButton.value;
        currentValue = parseInt(display.innerText);
    })
})
    



// function operate {
    
// };