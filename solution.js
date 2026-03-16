// Problem 3:
function calculateTotal(...numbers) {
    if (!numbers.every(num => typeof num === "number")) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }
    return numbers.reduce((total, num) => total + num, 0);
}
