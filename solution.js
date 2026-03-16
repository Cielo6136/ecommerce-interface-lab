// Problem 6:
function safeDivide(a, b) {
    try {     
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }  
    } catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        console.log("Operation attempted");
    }
}
