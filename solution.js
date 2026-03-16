//Problem 5
class Item {
    #discount = 0.1;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

const item1 = new Item("Laptop", 1000);

console.log(item1.name);
console.log(item1.price); 
console.log(item1.finalPrice);
