/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/



const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

console.log("Mark's weight: ",markMass,'kg ',"Mark's height: ", markHeight,'m');
console.log("John's weight: ",johnMass,'kg ',"John's height: ", johnHeight,'m');

const markbmi = markMass / (markHeight * markHeight);
const johnbmi = johnMass / (johnHeight * johnHeight);
let markbmi1 = markbmi.toFixed(1);
let johnbmi1 = johnbmi.toFixed(1); 

console.log("Mark's BMI: ", markbmi1);
console.log("John's BMI: ", johnbmi1);

if (markbmi > johnbmi) {
    console.log("Mark's BMI",'(',markbmi1,')', "is higher than John's", '(',johnbmi1,')!');
  } else if (johnbmi > markbmi) {
    console.log("John's BMI",'(', johnbmi1,')', "is higher than Mark's", '(', markbmi1,')!');
  } 

if (markbmi > johnbmi) {
    const markHigherBMI = true;
    console.log('Boolean variable markHigherBMI: ',markHigherBMI);
}   else if (markbmi < johnbmi) {
    const markHigherBMI = false;
    console.log('Boolean variable markHigherBMI: ',markHigherBMI);
}

//`Mark Bmi is ${markbmi}`