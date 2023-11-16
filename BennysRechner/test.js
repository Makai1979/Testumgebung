let input = "-"

const clac = (operator, num1, num2, callback) => {
    if (operator === "+")
        return callback(num1 + num2)
    if (operator === "-")
        return callback(num1 - num2)
}

let result = clac(input, 10, 20, result => result)
console.log(result)