const calculator = (a, b) => {
    const subtract = () => a - b;
    const add = () => a + b;
    const multiply = () => a * b;
    const divide = () => a / b;
    
    return {subtract, add, multiply, divide};
}

export{calculator};