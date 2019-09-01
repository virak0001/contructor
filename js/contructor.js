//class 1
class Person {
    constructor(name, age, province) {
        this.mName = name;
        this.mAge = age;
        this.mProvince = province;
    }
}
const person1 = new Person("Romdal", 24, "Pursat");
console.log(person1.mProvince);
console.log(person1.mName);
console.log(person1.mAge);

//class 2

class Computer {
    constructor (brand, price) {
        this.mBrand = brand;
        this.mPrice = price;
    }
}
const newComputer = new Computer('MSI', '1200$');
console.log(newComputer.mBrand + " price is "+ newComputer.mPrice);
