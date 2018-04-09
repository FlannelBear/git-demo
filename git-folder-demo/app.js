// Let's test out some merge conflict resolutions
// Variable declarations
var kyleAge = 66;

var restingHR = 85;

var kyleWeight = 210;

var kyleHeight = 72;


// Maths

var kyleHeightCM = (kyleHeight * 2.54 / 100);
// Calculate Max HR

<<<<<<< HEAD
var maxHR = 400 - kyleAge;
=======
var maxHR = 300 - kyleAge;
>>>>>>> new-branch

// Calculate BMI

var bmi = (kyleWeight / 2.2) / (kyleHeightCM * kyleHeightCM);

// Outputs

console.log('Max HR is ' + maxHR + ' bpm.');

console.log('BMI is ' + bmi);
