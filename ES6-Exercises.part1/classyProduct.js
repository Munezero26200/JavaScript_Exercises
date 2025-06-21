
class Product{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
    getDetails(){
        return `Product:${this.name}, Price: ${this.price}`;
    }
    applyDiscount(discount){
        let discountAmount=this.price*discount/100;
        let newPrice= this.price-discountAmount;
        return newPrice;
    }
}
const p1= new Product("Laptop",10000);
console.log(p1.getDetails());
console.log(p1.applyDiscount(20));