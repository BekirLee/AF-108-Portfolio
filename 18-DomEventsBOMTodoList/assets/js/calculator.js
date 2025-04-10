const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById('add').addEventListener('click', () => calculate('+'))
// document.getElementById("add").onclick = () => calculate("+");
document.getElementById("subtract").onclick = () => calculate("-");
document.getElementById("multiply").onclick = () => calculate("*");
document.getElementById("divide").onclick = () => calculate("/");


function calculate(operator) {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);

    if (isNaN(n1) || isNaN(n2)) {
        result.value = "Write number";
        return;
    }

    let sum;

    switch (operator) {
        case "+":
            sum = n1 + n2;
            break;
        case "-":
            sum = n1 - n2;
            break;
        case "*":
            sum = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                result.value = "u can't divide to 0";
                return;
            }
            sum = n1 / n2;
            break;
    }

    result.value = sum;
}
