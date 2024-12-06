export function add(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function divide(num1, num2) {
    if (num2 === 0) {
        return 'error'
    }
    return num1 / num2;
}

export function operate(num1, operator, num2) {
    let answer;
    switch (operator) {
        case '+':
            answer = add(num1, num2);
            break;
        case '-':
            answer = subtract(num1, num2);
            break;
        case '*':
            answer = multiply(num1, num2);
            break;
        case '/':
            answer = divide(num1, num2);
            break;
        default:
            answer = 'error'
    }
    return answer;
}