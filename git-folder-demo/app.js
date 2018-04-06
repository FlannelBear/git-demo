// Let's test out some merge conflict resolutions
// Variable declarations
var lindaAge = 45;

var restingHR = 67;

var lindaWeight = 175;

var lindaHeight = 68;


// Maths

var lindaHeightCM = (lindaHeight * 2.54 / 100);
// Calculate Max HR

var maxHR = 220 - lindaAge;

// Calculate BMI

var bmi = (lindaWeight / 2.2) / (lindaHeightCM * lindaHeightCM);

// Outputs

console.log('Max HR is ' + maxHR + ' bpm.');

console.log('BMI is ' + bmi);
