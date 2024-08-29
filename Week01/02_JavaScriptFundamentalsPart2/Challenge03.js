// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

const people = {
    name: String,
    mass: Number,
    height: Number,
    BMI: Number,
    calcBMI: function() {
        this.BMI = (this.mass / this.height ** 2).toFixed(3);
        return this.BMI;
    }
}

const mark = Object.create(people);
mark.name = 'Mark Miller';
mark.mass = 78;
mark.height = 1.89;

const john = Object.create(people);
john.name = 'John Smith';
john.mass = 92;
john.height = 1.95;

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s (${john.BMI})!`);
} else {
    console.log(`${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s (${mark.BMI})!`);
}